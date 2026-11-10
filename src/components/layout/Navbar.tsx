import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Bell,
  User,
  Menu,
  X,
  LogOut,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  LayoutDashboard,
  BookOpen,
  FileText,
  Briefcase,
} from 'lucide-react';
import { BRAND_ASSETS, COLLEGE_INFO, NAV_LINKS } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

  const isPublicPage = !user;
  const isAdmin = profile?.role === 'admin' || profile?.role === 'faculty';

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items depending on auth state
  const publicNavLinks = [
    { label: 'About Portal', hash: '' },
    { label: 'Facilities', hash: 'facilities' },
    { label: 'Student Guidelines', hash: 'guidelines' },
    { label: 'Contact', hash: 'contact' },
  ];

  const adminNavLinks = [
    { label: 'Admin Console', path: '/admin', icon: ShieldCheck },
    { label: 'Study Repository', path: '/study-materials', icon: FileText },
    { label: 'Newsletters', path: '/newsletters', icon: BookOpen },
    { label: 'Job Drives', path: '/jobs', icon: Briefcase },
  ];

  const studentNavLinks = NAV_LINKS.filter((link) => link.path !== '/' && link.path !== '/profile');

  const handlePublicScroll = (hash: string) => {
    setMobileMenuOpen(false);
    if (!hash) {
      if (location.pathname === '/' || location.pathname === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (location.pathname === '/' || location.pathname === '/about') {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${hash}`);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sahyadri Primary Brand Identity */}
          <Link
            to={user ? (isAdmin ? '/admin' : '/dashboard') : '/'}
            className="flex items-center gap-3 group select-none shrink-0"
          >
            <img
              src={BRAND_ASSETS.sahyadriLogoSvg}
              alt="Sahyadri Shield Emblem"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-[#205A40] uppercase leading-none group-hover:text-[#174B36] transition-colors">
                {COLLEGE_INFO.portalName}
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wide mt-0.5">
                Sahyadri College of Engineering & Management &bull; Placement Cell
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 pl-4">
            {isPublicPage ? (
              // Public Landing Page Navigation
              publicNavLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handlePublicScroll(item.hash)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#205A40] hover:bg-[#F0F5F2] rounded-lg nav-pill-transition active:scale-95 cursor-pointer"
                >
                  {item.label}
                </button>
              ))
            ) : isAdmin ? (
              // Admin Navigation
              adminNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      px-3 py-1.5 text-xs font-semibold rounded-lg nav-pill-transition flex items-center gap-1.5 active:scale-95
                      ${
                        isActive
                          ? 'text-[#205A40] bg-[#EBF3EF] font-bold shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })
            ) : (
              // Student Navigation
              studentNavLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      px-3 py-1.5 text-xs font-semibold rounded-lg nav-pill-transition active:scale-95
                      ${
                        isActive
                          ? 'text-[#205A40] bg-[#EBF3EF] font-bold shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })
            )}
          </nav>

          {/* Right Action Icons & Auth Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {user ? (
              // Authenticated Controls with Profile Dropdown
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#205A40] rounded-full" />
                </button>

                {/* Profile Menu Trigger */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center gap-2 p-1 pl-2.5 text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200 transition-all shadow-2xs cursor-pointer"
                    aria-expanded={profileDropdownOpen}
                    aria-haspopup="true"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-slate-900 max-w-[120px] truncate leading-tight">
                        {profile?.full_name?.split(' ')[0] || (isAdmin ? 'Admin' : 'Student')}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono leading-none">
                        {profile?.usn || (isAdmin ? 'Administrator' : 'Candidate')}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg text-white flex items-center justify-center font-bold text-xs shadow-2xs ${
                        isAdmin ? 'bg-[#A3542E]' : 'bg-[#205A40]'
                      }`}
                    >
                      {isAdmin ? (
                        <ShieldCheck className="w-3.5 h-3.5" />
                      ) : (
                        <User className="w-3.5 h-3.5" />
                      )}
                    </div>

                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Profile Dropdown Menu */}
                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-1.5 w-60 bg-white rounded-2xl shadow-lg border border-slate-200 py-1 z-50 animate-fadeIn">
                      <div className="px-3.5 py-2.5 border-b border-slate-100 bg-[#F7F9F7] rounded-t-2xl">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {profile?.full_name || (isAdmin ? 'Administrator' : 'Student')}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono truncate">
                          {profile?.email || ''}
                        </p>
                        {profile?.department && (
                          <p className="text-[10px] text-[#205A40] font-semibold mt-0.5 truncate">
                            {profile.department}
                          </p>
                        )}
                      </div>

                      <div className="py-1 text-xs text-slate-700 font-medium">
                        <Link
                          to={isAdmin ? '/admin' : '/dashboard'}
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors"
                        >
                          <LayoutDashboard className="w-4 h-4 text-slate-400" />
                          <span>{isAdmin ? 'Admin Dashboard' : 'Student Dashboard'}</span>
                        </Link>

                        {!isAdmin && (
                          <Link
                            to="/profile"
                            onClick={() => setProfileDropdownOpen(false)}
                            className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors"
                          >
                            <User className="w-4 h-4 text-slate-400" />
                            <span>My Student Profile</span>
                          </Link>
                        )}

                        <Link
                          to="/test-board"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors"
                        >
                          <BookOpen className="w-4 h-4 text-slate-400" />
                          <span>Aptitude Test Board</span>
                        </Link>

                        <Link
                          to="/study-materials"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3.5 py-2 hover:bg-slate-50 transition-colors"
                        >
                          <FileText className="w-4 h-4 text-slate-400" />
                          <span>Study Materials</span>
                        </Link>
                      </div>

                      <div className="border-t border-slate-100 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setProfileDropdownOpen(false);
                            signOut();
                          }}
                          className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer text-left"
                        >
                          <LogOut className="w-4 h-4 text-rose-500" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Public Visitor Controls
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#205A40] hover:bg-[#174B36] rounded-xl transition-all shadow-xs"
                >
                  <span>Student & Faculty Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="px-3 py-2 mb-2 bg-[#F0F5F2] rounded-xl border border-emerald-100">
            <p className="text-xs font-bold text-[#205A40]">{COLLEGE_INFO.portalName}</p>
            <p className="text-[10px] text-slate-500">Autonomous Institution &bull; Affiliated to VTU</p>
          </div>

          {isPublicPage ? (
            // Public Mobile Links
            <>
              {publicNavLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handlePublicScroll(item.hash)}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-100">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#205A40] hover:bg-[#174B36] rounded-xl shadow-xs"
                >
                  <span>Student & Faculty Login</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          ) : isAdmin ? (
            // Admin Mobile Links
            <>
              {adminNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-3">
                <span className="text-xs font-bold text-slate-800">Administrator Console</span>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            // Student Mobile Links
            <>
              {NAV_LINKS.filter((l) => l.path !== '/').map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-3">
                <span className="text-xs font-bold text-[#205A40]">
                  {profile?.full_name || 'Student'} ({profile?.usn || ''})
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
};
