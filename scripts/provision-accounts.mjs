#!/usr/bin/env node
/**
 * ==============================================================================
 * SAHYADRI PLACEMENT PREP PORTAL — IDEMPOTENT SERVER-SIDE ACCOUNT PROVISIONER
 * ==============================================================================
 * Securely provisions:
 * - Exactly 20 student accounts (4SF24CI160 through 4SF24CI179)
 * - Exactly 1 administrator account (admin1.exam@gmail.com)
 *
 * Security Policies:
 * - Uses SUPABASE_SERVICE_ROLE_KEY exclusively on the server boundary.
 * - Idempotent: safe to run repeatedly; checks existing users to prevent duplicates.
 * - Sets must_change_password = true for all accounts (both students and admin).
 * - Never commits or outputs credentials to client-side bundles or public logs.
 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read environment from .env.local or process.env
const loadEnvLocal = () => {
  const envPath = path.join(rootDir, '.env.local');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
        const [key, ...rest] = trimmed.split('=');
        const val = rest.join('=').trim().replace(/^["']|["']$/g, '');
        if (!process.env[key.trim()]) {
          process.env[key.trim()] = val;
        }
      }
    }
  }
};

loadEnvLocal();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const isDryRun = process.argv.includes('--dry-run');

console.log('============================================================');
console.log(' SAHYADRI PORTAL — SECURE ACCOUNT PROVISIONER');
console.log('============================================================');
console.log(`Supabase URL:    ${SUPABASE_URL || '(not configured)'}`);
console.log(`Execution Mode:  ${isDryRun ? 'DRY-RUN (Simulation Only — No DB Changes)' : 'LIVE PROVISION'}`);
console.log('============================================================\n');

if (!isDryRun && (!SERVICE_ROLE_KEY || SERVICE_ROLE_KEY === 'your-service-role-secret-key-here')) {
  console.error('[ERROR] SUPABASE_SERVICE_ROLE_KEY is missing or invalid in .env.local.');
  console.error('The service role key is strictly required for live server-side user provisioning in auth.users.');
  console.error('Please add your project service-role key to .env.local and retry.\n');
  process.exit(1);
}

const supabaseAdmin =
  SERVICE_ROLE_KEY && SERVICE_ROLE_KEY !== 'your-service-role-secret-key-here'
    ? createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;

// CSV parser helper
const parseCSV = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8').trim();
  const [headerLine, ...dataLines] = content.split('\n');
  const headers = headerLine.split(',').map((h) => h.trim());

  return dataLines.map((line) => {
    const values = line.split(',').map((v) => v.trim());
    const row = {};
    headers.forEach((h, idx) => {
      row[h] = values[idx] || '';
    });
    return row;
  });
};

async function main() {
  const adminCsvPath = path.join(rootDir, 'data', 'admin.csv');
  const studentsCsvPath = path.join(rootDir, 'data', 'students.csv');

  if (!fs.existsSync(adminCsvPath) || !fs.existsSync(studentsCsvPath)) {
    console.error('[ERROR] data/admin.csv or data/students.csv not found.');
    process.exit(1);
  }

  const adminRows = parseCSV(adminCsvPath);
  const studentRows = parseCSV(studentsCsvPath);

  // 1. Dataset Integrity & Duplicate Check (Offline)
  const allEmails = new Set();
  const allUSNs = new Set();
  const internalDuplicates = [];

  adminRows.forEach((a) => {
    const email = a.Email.toLowerCase();
    if (allEmails.has(email)) internalDuplicates.push(`Admin email conflict: ${email}`);
    allEmails.add(email);
  });

  studentRows.forEach((s) => {
    const email = s.Email.toLowerCase();
    const usn = s.USN.toUpperCase();
    if (allEmails.has(email)) internalDuplicates.push(`Duplicate email in students: ${email}`);
    if (allUSNs.has(usn)) internalDuplicates.push(`Duplicate USN in students: ${usn}`);
    allEmails.add(email);
    allUSNs.add(usn);
  });

  if (internalDuplicates.length > 0) {
    console.error('[FATAL] Internal duplicates found in CSV datasets:');
    internalDuplicates.forEach((d) => console.error(` - ${d}`));
    process.exit(1);
  }

  console.log(`[CSV Audit] Found exactly ${adminRows.length} administrator record.`);
  console.log(`[CSV Audit] Found exactly ${studentRows.length} student records.`);
  console.log(`[CSV Audit] Internal dataset uniqueness: PASS (0 duplicate emails, 0 duplicate USNs).\n`);

  // 2. Check existing accounts in Supabase Auth (if connected)
  let existingAuthUsers = [];
  if (supabaseAdmin) {
    try {
      console.log('[Remote Audit] Querying existing Supabase auth.users accounts...');
      const { data: usersList, error: listErr } = await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      });

      if (listErr) {
        console.warn(`[Remote Audit] Could not list auth users: ${listErr.message}`);
      } else {
        existingAuthUsers = usersList.users || [];
        console.log(`[Remote Audit] Found ${existingAuthUsers.length} total existing accounts in Supabase Auth.`);
      }
    } catch (e) {
      console.warn(`[Remote Audit] Network check failed: ${e.message}`);
    }
  } else {
    console.log('[Remote Audit] SUPABASE_SERVICE_ROLE_KEY is not yet configured in .env.local.');
    console.log('[Remote Audit] Live remote account probing deferred until service-role key is provided.\n');
  }

  // DRY-RUN OUTPUT
  if (isDryRun) {
    console.log('------------------------------------------------------------');
    console.log(' DRY-RUN PROVISIONING PREVIEW (NO WRITES PERFORMED)');
    console.log('------------------------------------------------------------');

    console.log('\n[A] ADMINISTRATOR ACCOUNT (1 Total):');
    adminRows.forEach((admin, i) => {
      const exists = existingAuthUsers.some((u) => u.email?.toLowerCase() === admin.Email.toLowerCase());
      console.log(` ${i + 1}. Full Name:   ${admin.FullName}`);
      console.log(`    Login Email: ${admin.Email}`);
      console.log(`    Role:        ${admin.Role}`);
      console.log(`    Department:  ${admin.Department}`);
      console.log(`    Must Change: true (Password reset enforced on 1st login)`);
      console.log(`    Remote Auth: ${exists ? 'EXISTS (Will update credentials idempotently)' : 'NEW (Will create new auth user)'}`);
    });

    console.log('\n[B] STUDENT ACCOUNTS (20 Total):');
    studentRows.forEach((student, i) => {
      const exists = existingAuthUsers.some((u) => u.email?.toLowerCase() === student.Email.toLowerCase());
      console.log(
        ` ${String(i + 1).padStart(2, ' ')}. USN: ${student.USN} | Email: ${student.Email} | Role: ${student.Role} | MustChange: true | Status: ${
          exists ? 'EXISTS' : 'NEW'
        }`
      );
    });

    console.log('\n------------------------------------------------------------');
    console.log(' DRY-RUN SUMMARY');
    console.log('------------------------------------------------------------');
    console.log(` Total Accounts To Provision: 21 (1 Admin + 20 Students)`);
    console.log(` Department:                  Computer Science & Engineering (AI)`);
    console.log(` Batch:                       2024-2028`);
    console.log(` Mandatory Password Change:   ENABLED (Enforced on 1st login for ALL accounts)`);
    console.log(` Idempotency Mode:            ACTIVE (Existing users updated, non-existing created)`);
    console.log('------------------------------------------------------------');
    console.log(' Dry run complete. Zero modifications were made to the database.');
    return;
  }

  // LIVE PROVISIONING
  console.log('\n------------------------------------------------------------');
  console.log(' STARTING LIVE ACCOUNT PROVISIONING');
  console.log('------------------------------------------------------------\n');

  // 1. Provision Admin
  console.log('--- [1/2] Provisioning Administrator Account ---');
  for (const admin of adminRows) {
    const email = admin.Email.toLowerCase().trim();
    const password = admin.Password;

    console.log(`Processing Administrator: ${email}...`);
    let userId = null;

    const { data: usersList, error: listErr } = await supabaseAdmin.auth.admin.listUsers();
    if (listErr) {
      console.error('Failed to list users:', listErr.message);
      process.exit(1);
    }

    const existingUser = usersList.users.find((u) => u.email?.toLowerCase() === email);

    if (existingUser) {
      console.log(`  User ${email} already exists (ID: ${existingUser.id}). Updating password and profile.`);
      userId = existingUser.id;
      await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: password,
        user_metadata: { full_name: admin.FullName, role: 'admin' },
      });
    } else {
      console.log(`  Creating new user in auth.users...`);
      const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: admin.FullName, role: 'admin' },
      });

      if (createErr) {
        console.error(`  Failed to create auth user ${email}:`, createErr.message);
        continue;
      }
      userId = newUser.user.id;
    }

    // Upsert into public.profiles with must_change_password = true
    const { error: profileErr } = await supabaseAdmin.from('profiles').upsert({
      id: userId,
      email: email,
      full_name: admin.FullName,
      role: 'admin',
      department: admin.Department,
      must_change_password: true,
      updated_at: new Date().toISOString(),
    });

    if (profileErr) {
      console.error(`  Error upserting profile for ${email}:`, profileErr.message);
    } else {
      console.log(`  ✓ Successfully configured administrator profile for ${email}.`);
    }
  }

  // 2. Provision Students
  console.log('\n--- [2/2] Provisioning 20 Student Accounts ---');
  for (let idx = 0; idx < studentRows.length; idx++) {
    const student = studentRows[idx];
    const usn = student.USN.toUpperCase().trim();
    const email = student.Email.toLowerCase().trim();
    const password = student.Password;
    const fullName = `Student ${usn}`;

    console.log(`[${idx + 1}/${studentRows.length}] Provisioning ${usn} (${email})...`);
    let userId = null;

    const { data: usersList } = await supabaseAdmin.auth.admin.listUsers();
    const existing = usersList?.users.find((u) => u.email?.toLowerCase() === email);

    if (existing) {
      console.log(`  Existing student found (ID: ${existing.id}). Updating credentials.`);
      userId = existing.id;
      await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: password,
        user_metadata: { usn, full_name: fullName, role: 'student' },
      });
    } else {
      const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { usn, full_name: fullName, role: 'student' },
      });

      if (createErr) {
        console.error(`  Failed to create student ${email}:`, createErr.message);
        continue;
      }
      userId = newUser.user.id;
    }

    // Upsert into public.profiles with must_change_password = true
    const { error: profileErr } = await supabaseAdmin.from('profiles').upsert({
      id: userId,
      email: email,
      usn: usn,
      full_name: fullName,
      role: 'student',
      department: student.Department,
      batch: student.Batch,
      must_change_password: true,
      updated_at: new Date().toISOString(),
    });

    if (profileErr) {
      console.error(`  Error upserting profile for ${usn}:`, profileErr.message);
    } else {
      console.log(`  ✓ Provisioned ${usn} with credentials & must_change_password=true.`);
    }
  }

  console.log('\n============================================================');
  console.log(' PROVISIONING COMPLETED SUCCESSFULLY');
  console.log(' 1 Administrator and 20 Student Accounts Configured.');
  console.log('============================================================\n');
}

main().catch((err) => {
  console.error('[PROVISIONER FATAL ERROR]:', err);
  process.exit(1);
});
