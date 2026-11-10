import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { COLLEGE_INFO, BRAND_ASSETS } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';
import { MustChangePasswordModal } from '../common/MustChangePasswordModal';
import { PlacementChatbot } from '../chat/PlacementChatbot';

export const AppLayout: React.FC = () => {
  const { profile } = useAuth();
  const location = useLocation();
  const isExamSession = location.pathname.includes('/session');

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F7] text-slate-800 relative">
      {/* Mandatory Password Change Blocking Modal for First-Time Logins */}
      {profile?.must_change_password && <MustChangePasswordModal />}

      <Navbar />

      <main
        key={location.pathname}
        className={`flex-1 ${!isExamSession ? 'animate-page-enter' : ''}`}
      >
        <Outlet />
      </main>

      {/* Floating Placement Preparation Chatbot */}
      <PlacementChatbot />

      <footer className="bg-white border-t border-slate-200/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={BRAND_ASSETS.sahyadriLogoSvg}
              alt="Sahyadri Emblem"
              className="w-6 h-6 object-contain"
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-bold text-[#205A40]">
                {COLLEGE_INFO.portalName}
              </span>
              <span className="hidden sm:inline text-slate-300">&bull;</span>
              <span className="text-slate-500">Autonomous Institution &bull; Affiliated to VTU Belagavi</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>&copy; {new Date().getFullYear()} {COLLEGE_INFO.name}</span>
            <span>&bull;</span>
            <a
              href={`mailto:${COLLEGE_INFO.supportEmail}`}
              className="text-[#205A40] hover:underline font-medium"
            >
              {COLLEGE_INFO.supportEmail}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
