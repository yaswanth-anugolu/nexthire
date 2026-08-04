import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";

// Candidate Pages
import Profile from "../pages/candidate/Profile";
import Education from "../pages/candidate/Education";
import Resume from "../pages/candidate/Resume";
import Jobs from "../pages/candidate/Jobs";
import Applications from "../pages/candidate/Applications";
import ResumeScore from "../pages/candidate/ResumeScore";
import CareerAssistant from "../pages/candidate/CareerAssistant";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Candidate */}

        <Route
          path="/candidate"
          element={<CandidateDashboard />}
        />

        <Route
          path="/candidate/profile"
          element={<Profile />}
        />

        <Route
          path="/candidate/education"
          element={<Education />}
        />

        <Route
          path="/candidate/resume"
          element={<Resume />}
        />

        <Route
          path="/candidate/jobs"
          element={<Jobs />}
        />

        <Route
          path="/candidate/applications"
          element={<Applications />}
        />

        <Route
          path="/candidate/resume-score"
          element={<ResumeScore />}
        />

        <Route
          path="/candidate/career-assistant"
          element={<CareerAssistant />}
        />

        <Route
          path="/candidate/interview"
          element={<CareerAssistant />}
        />

        {/* Recruiter */}

        <Route
          path="/recruiter"
          element={<RecruiterDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;