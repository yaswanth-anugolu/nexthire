import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

import { useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  const getTitle = () => {

    switch (location.pathname) {

      // Candidate

      case "/candidate":
        return "Candidate Dashboard";

      case "/candidate/profile":
        return "My Profile";

      case "/candidate/education":
        return "Education";

      case "/candidate/resume":
        return "Resume";

      case "/candidate/jobs":
        return "Jobs";

      case "/candidate/applications":
        return "Applications";

      case "/candidate/resume-score":
        return "Resume Score";

      case "/candidate/career-assistant":
        return "Career Assistant";

      case "/candidate/interview":
        return "AI Mock Interview";

      // Recruiter

      case "/recruiter":
        return "Recruiter Dashboard";

      case "/recruiter/profile":
        return "Recruiter Profile";

      case "/recruiter/jobs":
        return "Jobs";

      case "/recruiter/applications":
        return "Applications";

      case "/recruiter/analytics":
        return "Recruitment Analytics";

      default:
        return "NextHire";
    }

  };

  return (

    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "#111827",
      }}
    >

      <Toolbar>

        <Typography
          variant="h5"
          fontWeight="bold"
        >
          {getTitle()}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar>
          Y
        </Avatar>

      </Toolbar>

    </AppBar>

  );

};

export default Navbar;