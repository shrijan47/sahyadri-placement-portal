import React, { useState } from 'react';
import {
  User,
  Mail,
  GraduationCap,
  Building2,
  ShieldCheck,
  ArrowLeft,
  LogOut,
  Copy,
  Check,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { BRAND_ASSETS, COLLEGE_INFO } from '../../constants/tokens';
import { DEMO_STUDENTS } from '../../data/demoAccounts';
import { Button } from '../../components/common/Button';

export const ProfilePage: React.FC = () => {
  const { user, profile, isConfigured, signOut } = useAuth();
  const [copiedUsn, setCopiedUsn] = useState(false);

  const isRealAuth = Boolean(user && profile && isConfigured);
  const demoStudent = profile?.usn ? DEMO_STUDENTS[profile.usn.toUpperCase()] : null;

  const student = demoStudent
    ? {
        name: demoStudent.name,
        email: demoStudent.email,
        usn: demoStudent.usn,
        department: demoStudent.department,
        semester: `Semester ${demoStudent.semester}`,
        batch: demoStudent.batch,
      }
    : profile
    ? {
        name: profile.full_name || user?.email?.split('@')[0] || 'Student',
        email: profile.email || user?.email || '',
        usn: profile.usn || '4SF-PENDING',
        department: profile.department || 'Computer Science & Engineering',
        semester: 'Semester 5',
        batch: profile.batch || '2024-2028',
      }
    : {
        name: 'Student',
        email: 'student@sahyadri.edu.in',
        usn: '4SF24CI000',
        department: 'Computer Science & Engineering',
        semester: 'Semester 5',
        batch: '2024-2028',
      };

  const handleCopyUsn = () => {
    if (student.usn) {
      navigator.clipboard.writeText(student.usn);
      setCopiedUsn(true);
      setTimeout(() => setCopiedUsn(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fadeIn">
      {/* Navigation & Action Header */}
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#205A40] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
        {user && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => signOut()}
            className="text-xs text-rose-600 border-rose-200 hover:bg-rose-50 hover:border-rose-300"
          >
            <LogOut className="w-3.5 h-3.5 mr-1.5" />
            <span>Sign Out</span>
          </Button>
        )}
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xs border border-slate-200/80 card-hover-lift">
        {/* Banner with Subtle Doodle Overlay */}
        <div
          className="h-36 sm:h-44 w-full bg-cover bg-center relative transition-transform duration-700 hover:scale-102"
          style={{ backgroundImage: `url(${BRAND_ASSETS.profileDoodleBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
        </div>

        <div className="px-6 sm:px-8 pb-8 pt-0 relative">
          {/* Avatar and Badges */}
          <div className="-mt-14 sm:-mt-16 mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex items-end gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1F2937] text-white flex items-center justify-center border-4 border-white shadow-lg shrink-0">
                <User className="w-12 h-12 sm:w-14 sm:h-14" />
              </div>

              <div className="space-y-1 mb-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {student.name}
                  </h1>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-slate-700 font-semibold">{student.department}</span>
                  <span>&bull;</span>
                  <span className="text-slate-600">{student.semester} ({student.batch})</span>
                </div>
              </div>
            </div>

            {/* Verification Status Badge */}
            <div className="flex items-center gap-2">
              {demoStudent ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-black rounded-full border border-amber-500/30 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-950 animate-pulse" />
                  DEMO STUDENT &bull; {student.usn}
                </span>
              ) : isRealAuth ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-[#205A40] text-xs font-bold rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-[#205A40] animate-pulse" />
                  Verified Student Session
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200">
                  Student Candidate
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Academic Credentials */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#205A40] flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Academic Information</h2>
              <p className="text-xs text-slate-500 font-medium">Official university enrollment & branch details</p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {/* USN with Copy Button */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  University Seat Number (USN)
                </span>
                <span className="text-sm font-mono font-black text-slate-900">{student.usn}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyUsn}
                className="p-2 text-slate-500 hover:text-[#205A40] hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all"
                title="Copy USN"
              >
                {copiedUsn ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Department */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Department / Branch
                </span>
                <span className="text-sm font-bold text-slate-800">{student.department}</span>
              </div>
            </div>

            {/* Academic Cohort & Batch */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Current Semester
                </span>
                <span className="text-sm font-bold text-slate-800">{student.semester}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Graduation Batch
                </span>
                <span className="text-sm font-bold text-slate-800">{student.batch}</span>
              </div>
            </div>

            {/* Institution */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                College Affiliation
              </span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">{COLLEGE_INFO.name}</p>
              <p className="text-[11px] text-slate-500 font-medium">Autonomous &bull; Affiliated to VTU Belagavi &bull; NAAC &apos;A&apos; Grade</p>
            </div>
          </div>
        </div>

        {/* Card 2: Portal Credentials & Security */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xs space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Placement Portal Credentials</h2>
              <p className="text-xs text-slate-500 font-medium">Digital authentication & assessment access</p>
            </div>
          </div>

          <div className="space-y-4 text-xs">
            {/* Institutional Email */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Institutional Email
                </span>
                <span className="text-sm font-semibold text-slate-800 truncate block font-mono">
                  {student.email}
                </span>
              </div>
            </div>

            {/* User Role */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Assigned System Role
                </span>
                <span className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Candidate (Student)
                </span>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-bold bg-[#EBF7F0] text-[#205A40] rounded-full border border-emerald-200">
                Active Access
              </span>
            </div>

            {/* Assessment Status */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Assessment Status
              </span>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">
                  20 Aptitude Practice Exams Unlocked
                </span>
                <span className="text-[11px] font-bold text-[#205A40]">Eligible</span>
              </div>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <Link to="/test-board" className="flex-1">
                <Button variant="primary-blue" size="sm" fullWidth className="text-xs">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  <span>Take Aptitude Test</span>
                </Button>
              </Link>
              <Link to="/study-materials" className="flex-1">
                <Button variant="outline" size="sm" fullWidth className="text-xs">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
                  <span>Study Repository</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
