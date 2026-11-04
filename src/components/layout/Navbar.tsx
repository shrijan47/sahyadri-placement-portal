import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, User, Menu, X, LogOut, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRAND_ASSETS, COLLEGE_INFO, NAV_LINKS } from '../../constants/tokens';
import { useAuth } from '../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut, isDemoMode } = useAuth();

  const isPublicPage = !user;
  const isAdmin = profile?.role === 'admin' || profile?.role === 'faculty';

  // Navigation items depending on auth state
  const publicNavLinks = [
    { label: 'About Portal', hash: '' },
    { label: 'Facilities', hash: 'facilities' },
    { label: 'Student Guidelines', hash: 'guidelines' },
    { label: 'Contact', hash: 'contact' },
  ];

  const adminNavLinks = [
    { label: 'Admin Console', path: '/admin' },
    { label: 'Study Repository', path: '/study-materials' },
    { label: 'Newsletters', path: '/newsletters' },
    { label: 'Job Drives', path: '/jobs' },
  ];

  const studentNavLinks = NAV_LINKS.filter((link) => link.path !== '/');

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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Sahyadri Primary Brand Identity */}
          <Link
            to={user ? (isAdmin ? '/admin' : '/dashboard') : '/'}
            className="flex items-center gap-3.5 group select-none"
          >
            <img
              src={BRAND_ASSETS.sahyadriLogoSvg}
              alt="Sahyadri Shield Emblem"
              className="h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xs"
            />
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-[#205A40] uppercase leading-none group-hover:text-[#17422E] transition-colors">
                {COLLEGE_INFO.portalName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
                {COLLEGE_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 pl-6">
            {isPublicPage ? (
              // Public Landing Page Navigation
              publicNavLinks.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handlePublicScroll(item.hash)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#205A40] hover:bg-emerald-50/60 rounded-lg transition-colors cursor-pointer"
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
                      px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors
                      ${
                        isActive
                          ? 'text-[#205A40] bg-emerald-50 font-bold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }
                    `}
                  >
                    {link.label}
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
                      px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors
                      ${
                        isActive
                          ? 'text-[#205A40] bg-emerald-50 font-bold'
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
              // Authenticated Controls
              <>
                {isDemoMode && (
                  <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-900 border border-amber-500/30 items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-950 animate-pulse" />
                    <span>DEMO ACTIVE</span>
                  </span>
                )}

                <button
                  type="button"
                  className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#205A40] rounded-full ring-2 ring-white" />
                </button>

                <div className="flex items-center gap-2">
                  <Link
                    to={isAdmin ? '/admin' : '/dashboard'}
                    className="flex items-center gap-2 p-1 pl-2 text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition-colors"
                    title={isAdmin ? 'Administrator Console' : 'Student Dashboard'}
                  >
                    <span className="hidden sm:inline text-xs font-bold text-slate-800 max-w-[130px] truncate">
                      {profile?.full_name?.split(' ')[0] || (isAdmin ? 'Admin' : 'Student')}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full text-white flex items-center justify-center font-bold text-xs shadow-xs ${
                        isAdmin ? 'bg-amber-600' : 'bg-[#205A40]'
                      }`}
                    >
                      {isAdmin ? (
                        <ShieldCheck className="w-3.5 h-3.5" />
                      ) : (
                        <User className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
                    title="Sign Out"
                    aria-label="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </>
            ) : (
              // Public Visitor Controls (NO demo badges, NO internal links, NO notification bell)
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#205A40] hover:bg-[#17422E] rounded-full transition-all shadow-sm hover:shadow"
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="px-3 py-2 mb-2 bg-emerald-50 rounded-xl border border-emerald-100">
            <p className="text-xs font-bold text-[#205A40]">{COLLEGE_INFO.portalName}</p>
            <p className="text-[10px] text-emerald-800">{COLLEGE_INFO.tagline}</p>
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-white bg-[#205A40] hover:bg-[#17422E] rounded-xl shadow-sm"
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
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-3">
                <span className="text-xs font-bold text-amber-700">Administrator Console</span>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            // Student Mobile Links
            <>
              {studentNavLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50"
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
                  className="text-xs font-semibold text-rose-600 hover:underline flex items-center gap-1"
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
