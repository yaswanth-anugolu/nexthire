import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LogoutIcon from "@mui/icons-material/Logout";

const menus = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/candidate/dashboard",
  },
  {
    title: "My Profile",
    icon: <PersonIcon />,
    path: "/candidate/profile",
  },
  {
    title: "Education",
    icon: <SchoolIcon />,
    path: "/candidate/education",
  },
  {
    title: "Resume",
    icon: <DescriptionIcon />,
    path: "/candidate/resume",
  },
  {
    title: "Jobs",
    icon: <WorkIcon />,
    path: "/candidate/jobs",
  },
  {
    title: "Applications",
    icon: <AssignmentIcon />,
    path: "/candidate/applications",
  },
  {
    title: "Resume Score",
    icon: <AutoAwesomeIcon />,
    path: "/candidate/resume-score",
  },
  {
    title: "Career Assistant",
    icon: <SmartToyIcon />,
    path: "/candidate/career-assistant",
  },
  {
    title: "AI Mock Interview",
    icon: <RecordVoiceOverIcon />,
    path: "/candidate/interview",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    path: "/login",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 260,
        bgcolor: "#111827",
        color: "#fff",
        p: 3,
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        NextHire
      </Typography>

      <List>
        {menus.map((menu) => (
          <ListItemButton
            key={menu.title}
            selected={location.pathname === menu.path}
            onClick={() => navigate(menu.path)}
            sx={{
              borderRadius: 2,
              mb: 1,
              color: "white",

              "&.Mui-selected": {
                bgcolor: "#4F46E5",
              },

              "&.Mui-selected:hover": {
                bgcolor: "#4338CA",
              },

              "&:hover": {
                bgcolor: "#374151",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              {menu.icon}
            </ListItemIcon>

            <ListItemText
              primary={menu.title}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;