#!/usr/bin/env node
/**
 * Cryptographically Secure Temporary Password Generator
 * Generates high-entropy passwords satisfying:
 * - Minimum 14 characters (22 for administrator)
 * - Uppercase, lowercase, numeric digits, and special symbols
 * - Unambiguous characters (avoiding 0/O, 1/l/I)
 * - Cryptographic randomness using crypto.randomInt
 * - Blacklists all previously displayed passwords
 * - Sets must_change_password = true for all accounts including administrator
 */

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Previously displayed or compromised credentials that MUST NEVER be reused
const COMPROMISED_PASSWORDS = new Set([
  'Adm!nPass#2026a',
  'bSQxK-q8*EySha3Cu%Bw',
  'ZR%#t5%#S8ptcP',
  'CJH%M-Z4p%mZi=',
  '=78mGu@@5FYA4A',
  'WS8=j7P*vctYeT',
  'e45XExYCRt-786',
  'M2Y+=%+gifpRkD',
  'FW62sT6^^3J!Fz',
  'CX=t&S7g4nUcPv',
  'mEa-_c!Yc2&W9f',
  'UH8WUdPT$ut=Dw',
  'WKd3W#vay7p#kS',
  'h&pGP*9H_d*9Nz',
  '63-2Suq+_+Nvip',
  'tD3Qjjw=S$kQMY',
  'Ntf2i4f$B#@nKp',
  'Y@+gGfLD6n95h7',
  'Q!y^ZtvBe4d$4J',
  'Uf2t8fD@#Ekz3U',
  'rxSFH$k_4f@2xY',
  '5Yz&#G+dkZznEh',
]);

// Add predictable sequential range
for (let i = 1; i <= 20; i++) {
  COMPROMISED_PASSWORDS.add(`98451234${i < 10 ? '0' + i : i}`);
}

export function generateSecurePassword(length = 14) {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const lower = 'abcdefghijkmnpqrstuvwxyz';
  const digits = '23456789';
  const symbols = '!@#$%^&*_-+=';
  const all = upper + lower + digits + symbols;

  let pwd = '';
  let attempts = 0;

  do {
    const chars = [
      upper[crypto.randomInt(upper.length)],
      lower[crypto.randomInt(lower.length)],
      digits[crypto.randomInt(digits.length)],
      symbols[crypto.randomInt(symbols.length)],
    ];

    for (let i = 4; i < length; i++) {
      chars.push(all[crypto.randomInt(all.length)]);
    }

    // Fisher-Yates cryptographically secure shuffle
    for (let i = chars.length - 1; i > 0; i--) {
      const j = crypto.randomInt(i + 1);
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }

    pwd = chars.join('');
    attempts++;
  } while (COMPROMISED_PASSWORDS.has(pwd) && attempts < 100);

  return pwd;
}

export function generateDataset() {
  const adminCsvPath = path.join(rootDir, 'data', 'admin.csv');
  const studentsCsvPath = path.join(rootDir, 'data', 'students.csv');

  // Generate Admin Password (22 chars, ultra-high entropy) with must_change_password = true
  const adminPassword = generateSecurePassword(22);
  const adminCsvContent = `FullName,Email,Password,Role,Department,MustChangePassword\nPlacement Examination Administrator,admin1.exam@gmail.com,${adminPassword},admin,Placement & Examination Cell,true\n`;
  fs.writeFileSync(adminCsvPath, adminCsvContent, { mode: 0o600, encoding: 'utf8' });

  // Generate 20 Unique Student Passwords (14 chars each) with must_change_password = true
  const studentRows = ['USN,FullName,Email,Password,Department,Batch,Role,MustChangePassword'];
  const generatedPasswords = new Set();

  for (let i = 160; i <= 179; i++) {
    const usn = `4SF24CI${i}`;
    const email = `${usn.toLowerCase()}@sahyadri.edu.in`;
    let tempPass = generateSecurePassword(14);
    while (generatedPasswords.has(tempPass) || COMPROMISED_PASSWORDS.has(tempPass)) {
      tempPass = generateSecurePassword(14);
    }
    generatedPasswords.add(tempPass);

    studentRows.push(
      `${usn},Student ${usn},${email},${tempPass},Computer Science & Engineering (AI),2024-2028,student,true`
    );
  }

  fs.writeFileSync(studentsCsvPath, studentRows.join('\n') + '\n', { mode: 0o600, encoding: 'utf8' });
  console.log('Successfully regenerated datasets with fresh cryptographically secure credentials.');
  console.log('All compromised and previously displayed credentials were blacklisted.');
  console.log('must_change_password flag set to true for all 21 accounts (1 admin + 20 students).');
}

if (process.argv.includes('--run')) {
  generateDataset();
}
