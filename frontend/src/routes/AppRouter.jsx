import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RecruiterProfile from "../pages/recruiter/RecruiterProfile";
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import RecruiterJobs from "../pages/recruiter/RecruiterJobs";
import RecruiterApplications from "../pages/recruiter/RecruiterApplications";
import RecruiterAnalytics from "../pages/recruiter/RecruiterAnalytics";
// Candidate Pages
import Profile from "../pages/candidate/Profile";
import Education from "../pages/candidate/Education";
import Resume from "../pages/candidate/Resume";
import Jobs from "../pages/candidate/Jobs";
import Applications from "../pages/candidate/Applications";
import ResumeScore from "../pages/candidate/ResumeScore";
import CareerAssistant from "../pages/ai/CareerAssistant";
import AIMockInterview from "../pages/ai/AIMockInterview";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Companies from "../pages/admin/Companies";
import Recruiters from "../pages/admin/Recruiters";
import Users from "../pages/admin/Users";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Candidate */}
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/candidate/profile" element={<Profile />} />
        <Route path="/candidate/education" element={<Education />} />
        <Route path="/candidate/resume" element={<Resume />} />
        <Route path="/candidate/jobs" element={<Jobs />} />
        <Route path="/candidate/applications" element={<Applications />} />
        <Route path="/candidate/resume-score" element={<ResumeScore />} />
        <Route
          path="/candidate/career-assistant"
          element={<CareerAssistant />}
        />
        <Route
            path="/candidate/interview"
            element={<AIMockInterview />}
          />

        {/* Recruiter */}
        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />
        <Route
          path="/recruiter/profile"
          element={<RecruiterProfile />}
        />
        <Route
            path="/recruiter/jobs"
            element={<RecruiterJobs />}
        />
        <Route
            path="/recruiter/applications"
            element={<RecruiterApplications />}
        />
        <Route
            path="/recruiter/analytics"
            element={<RecruiterAnalytics />}
        />
        {/* Admin */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/companies"
          element={<Companies />}
        />

        <Route
          path="/admin/recruiters"
          element={<Recruiters />}
        />

        <Route
          path="/admin/users"
          element={<Users />}
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />

        <Route
          path="/admin/settings"
          element={<Settings />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;