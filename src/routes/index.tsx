import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { AuthLayout } from '../components/layout/AuthLayout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardPage } from '../pages/dashboard/DashboardPage';
import { AdminDashboardPage } from '../pages/admin/AdminDashboardPage';
import { TestBoardPage } from '../pages/assessment/TestBoardPage';
import { ExamInstructionsPage } from '../pages/assessment/ExamInstructionsPage';
import { ExamInterfacePage } from '../pages/assessment/ExamInterfacePage';
import { ExamResultsPage } from '../pages/assessment/ExamResultsPage';
import { ProfilePage } from '../pages/profile/ProfilePage';
import { AboutPage } from '../pages/about/AboutPage';
import { StudyMaterialsPage } from '../pages/study/StudyMaterialsPage';
import { NewslettersPage } from '../pages/newsletters/NewslettersPage';
import { JobOpportunitiesPage } from '../pages/jobs/JobOpportunitiesPage';
import { ComingSoonPage } from '../pages/common/ComingSoonPage';
import { NotFound } from '../pages/NotFound';
import { useAuth } from '../hooks/useAuth';

const RoleAwareDashboard: React.FC = () => {
  const { user, profile, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#205A40] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Strict route protection: unauthenticated visitors must go to /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Administrators and faculty route to Admin Console
  if (profile?.role === 'admin' || profile?.role === 'faculty') {
    return <AdminDashboardPage />;
  }

  return <DashboardPage />;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Standalone Authentication Layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Standalone Distraction-Free Proctored Exam Interface (Protected) */}
      <Route
        path="/exam/:testId/session"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <ExamInterfacePage />
          </ProtectedRoute>
        }
      />

      {/* Main Portal Application Layout */}
      <Route element={<AppLayout />}>
        {/* Root and About URLs render the Public Institutional Landing Page */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<RoleAwareDashboard />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin', 'faculty']}>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Protected Assessment Routes */}
        <Route
          path="/test-board"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <TestBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tests"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <TestBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/platform"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <TestBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Examination Pre-test & Post-test Routes (Protected) */}
        <Route
          path="/exam/:testId"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <ExamInstructionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exam/:testId/instructions"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <ExamInstructionsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/exam/:testId/results"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <ExamResultsPage />
            </ProtectedRoute>
          }
        />

        {/* Learning Hub & Placement Resources (Protected) */}
        <Route
          path="/study-materials"
          element={
            <ProtectedRoute>
              <StudyMaterialsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/company-papers"
          element={
            <ProtectedRoute>
              <StudyMaterialsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/newsletters"
          element={
            <ProtectedRoute>
              <NewslettersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <JobOpportunitiesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/programmes"
          element={
            <ProtectedRoute>
              <ComingSoonPage
                title="Placement Training Programmes"
                description="Intensive aptitude training, mock technical interviews, and soft skills bootcamps organized by SCEM."
                category="study"
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <ComingSoonPage
                title="Placement Preparation Roadmap"
                description="Step-by-step 4-year career preparation milestones from foundational programming to final recruitment."
                category="study"
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/faqs"
          element={
            <ProtectedRoute>
              <ComingSoonPage
                title="Placement FAQs"
                description="Frequently asked questions about eligibility cutoffs, assessment rules, backlog policies, and offer letters."
                category="news"
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ComingSoonPage
                title="Contact Placement Cell"
                description="Reach the Department of Placement & Training at Sahyadri Campus, Adyar, Mangaluru."
                category="profile"
              />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
