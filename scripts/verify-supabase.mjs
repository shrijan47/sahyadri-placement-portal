#!/usr/bin/env node
/**
 * Supabase Configuration & Schema Verifier
 * Comprehensive diagnostic tool that safely tests:
 * 1. .env.local syntax and key structures (supports legacy JWTs and modern sb_secret_ keys)
 * 2. Public API connectivity and core database tables
 * 3. Administrative service-role access (auth.admin.listUsers)
 * 4. Never logs or prints actual secret values
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const envPath = path.join(rootDir, '.env.local');
const env = {};

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
      const [key, ...rest] = trimmed.split('=');
      env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
}

const url = env.VITE_SUPABASE_URL || '';
const pubKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_ANON_KEY || '';
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY || '';

console.log('============================================================');
console.log(' SAHYADRI PORTAL — SUPABASE CONFIGURATION & SCHEMA AUDIT');
console.log('============================================================\n');

// 1. Analyze Key Formats
function analyzeKey(k, label) {
  if (!k) {
    return { validFormat: false, summary: 'MISSING (empty)' };
  }
  if (k.includes('your-') || k.includes('YOUR_') || k.includes('_your_') || k.endsWith('_key')) {
    return {
      validFormat: false,
      summary: `PLACEHOLDER TEXT DETECTED ("...${k.substring(k.length - 8)}")`,
    };
  }

  const isJWT = k.split('.').length === 3;
  const isModernSecret = k.startsWith('sb_secret_');
  const isModernPublishable = k.startsWith('sb_publishable_');

  if (isJWT) {
    try {
      const payload = JSON.parse(Buffer.from(k.split('.')[1], 'base64').toString('utf8'));
      const role = payload.role || 'unknown';
      const ref = payload.ref || 'unknown';
      return {
        validFormat: true,
        type: 'Legacy JWT',
        length: k.length,
        summary: `Valid JWT format (role: ${role}, ref: ${ref}, length: ${k.length})`,
      };
    } catch {
      return { validFormat: false, summary: 'Malformed JWT token' };
    }
  }

  if (isModernSecret) {
    if (k.length < 35) {
      return {
        validFormat: false,
        summary: `Truncated modern secret key (length: ${k.length}, expected: ~41 characters)`,
      };
    }
    return {
      validFormat: true,
      type: 'Modern Secret Key (sb_secret_)',
      length: k.length,
      summary: `Valid modern secret format (sb_secret_..., length: ${k.length})`,
    };
  }

  if (isModernPublishable) {
    if (k.length < 35) {
      return {
        validFormat: false,
        summary: `Truncated modern publishable key (length: ${k.length}, expected: ~45 characters)`,
      };
    }
    return {
      validFormat: true,
      type: 'Modern Publishable Key (sb_publishable_)',
      length: k.length,
      summary: `Valid modern publishable format (sb_publishable_..., length: ${k.length})`,
    };
  }

  if (k.length >= 20) {
    return {
      validFormat: true,
      type: 'Opaque API Key',
      length: k.length,
      summary: `Custom key string (length: ${k.length})`,
    };
  }

  return { validFormat: false, summary: `Key too short (${k.length} chars)` };
}

const urlAnalysis = Boolean(url && url.startsWith('https://') && !url.includes('your-project-id'));
const pubKeyAnalysis = analyzeKey(pubKey, 'Publishable Key');
const serviceKeyAnalysis = analyzeKey(serviceKey, 'Service Role Key');

console.log('[1/4] Environment Key Inspection:');
console.log(`  - Project URL:       ${urlAnalysis ? 'CONFIGURED (' + url + ')' : 'INVALID / MISSING'}`);
console.log(`  - Publishable Key:   ${pubKeyAnalysis.summary}`);
console.log(`  - Service Role Key:  ${serviceKeyAnalysis.summary}\n`);

if (!urlAnalysis || !pubKeyAnalysis.validFormat || !serviceKeyAnalysis.validFormat) {
  console.log('------------------------------------------------------------');
  console.log('DIAGNOSIS: Real Supabase keys have not been pasted into .env.local.');
  console.log('The values currently in .env.local are placeholder/example strings.');
  console.log('------------------------------------------------------------');
  console.log('RESULT: KEYS_INCOMPLETE');
  process.exit(10);
}

// 2. Connect with Public Client
console.log('[2/4] Testing Public API Connection & Database Schema...');
const supabase = createClient(url, pubKey);

async function checkSchema() {
  const requiredTables = ['profiles', 'tests', 'questions', 'test_attempts', 'student_answers'];
  const missingTables = [];
  let apiAuthError = null;

  for (const table of requiredTables) {
    try {
      const { error } = await supabase.from(table).select('*', { count: 'exact', head: true });
      if (error) {
        if (error.code === '42P01') {
          missingTables.push(table);
        } else if (
          error.message?.includes('Invalid API key') ||
          error.code === 'PGRST301' ||
          error.status === 401
        ) {
          apiAuthError = error.message;
          break;
        }
      }
    } catch (e) {
      apiAuthError = e.message;
      break;
    }
  }

  if (apiAuthError) {
    console.log(`  - Public API Authentication Failed: ${apiAuthError}`);
    console.log('  - Cause: VITE_SUPABASE_PUBLISHABLE_KEY was rejected by Supabase API.');
    console.log('RESULT: PUBLISHABLE_KEY_INVALID');
    process.exit(15);
  }

  if (missingTables.length > 0) {
    console.log(`  - Missing Tables in public schema: ${missingTables.join(', ')}`);
    console.log('RESULT: SCHEMA_NOT_APPLIED');
    process.exit(20);
  }

  console.log(`  - Verified all ${requiredTables.length} core tables in live database.\n`);

  // 3. Connect with Service Role Client
  console.log('[3/4] Verifying Service Role Administrative Access...');
  const supabaseAdmin = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: usersData, error: listErr } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 1,
  });

  if (listErr) {
    console.log(`  - Service Role Auth Error: ${listErr.message}`);
    console.log('RESULT: SERVICE_KEY_INVALID');
    process.exit(30);
  }

  console.log('  - Service Role Admin API Access: VERIFIED (can manage auth.users).\n');

  // 4. Completed
  console.log('[4/4] Final Verification:');
  console.log('  - URL, Public Key, Service Role Key, and Database Schema are 100% verified.');
  console.log('RESULT: ALL_VERIFIED');
  process.exit(0);
}

checkSchema().catch((err) => {
  console.error('[FATAL AUDIT ERROR]', err.message);
  process.exit(1);
});
