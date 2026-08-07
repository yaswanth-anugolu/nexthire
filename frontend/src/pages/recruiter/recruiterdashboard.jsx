import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LogoutIcon from "@mui/icons-material/Logout";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddIcon from "@mui/icons-material/Add";

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    path: "/recruiter",
  },
  {
    text: "My Profile",
    icon: <PersonIcon />,
    path: "/recruiter/profile",
  },
  {
    text: "Jobs",
    icon: <WorkIcon />,
    path: "/recruiter/jobs",
  },
  {
    text: "Applications",
    icon: <AssignmentIcon />,
    path: "/recruiter/applications",
  },
  {
    text: "Analytics",
    icon: <AnalyticsIcon />,
    path: "/recruiter/analytics",
  },
  {
    text: "Logout",
    icon: <LogoutIcon />,
    path: "/login",
  },
];

const stats = [
  {
    title: "Active Jobs",
    value: 8,
    color: "#2563EB",
    icon: <BusinessCenterIcon fontSize="large" />,
  },
  {
    title: "Applications",
    value: 127,
    color: "#10B981",
    icon: <PeopleAltIcon fontSize="large" />,
  },
  {
    title: "Interviews",
    value: 12,
    color: "#F59E0B",
    icon: <EventAvailableIcon fontSize="large" />,
  },
  {
    title: "Successful Hires",
    value: 4,
    color: "#8B5CF6",
    icon: <EmojiEventsIcon fontSize="large" />,
  },
];

const recentJobs = [
  {
    title: "Python Full Stack Developer",
    applicants: 42,
    status: "Open",
    deadline: "25 Aug 2026",
  },
  {
    title: "React Developer",
    applicants: 31,
    status: "Open",
    deadline: "28 Aug 2026",
  },
  {
    title: "AI Engineer",
    applicants: 18,
    status: "Draft",
    deadline: "30 Aug 2026",
  },
];

const recentApplicants = [
  {
    name: "Rahul Sharma",
    role: "Python Developer",
    score: 96,
  },
  {
    name: "Priya Reddy",
    role: "React Developer",
    score: 91,
  },
  {
    name: "Arjun Kumar",
    role: "AI Engineer",
    score: 88,
  },
];

const RecruiterDashboard = () => {
  const navigate = useNavigate();
  return (
  <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#F8FAFC" }}>

    {/* Sidebar */}

    <Box
      sx={{
        width: 280,
        bgcolor: "#111827",
        color: "#fff",
        p: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={5}>
        NextHire
      </Typography>

      {menuItems.map((item) => (
        <Button
          key={item.text}
          fullWidth
          startIcon={item.icon}
          onClick={() => navigate(item.path)}
          sx={{
            justifyContent: "flex-start",
            color: "white",
            mb: 1.5,
            py: 1.5,
            borderRadius: 3,
            textTransform: "none",
            fontSize: 17,

            "&:hover": {
              bgcolor: "#4F46E5",
            },
          }}
        >
          {item.text}
        </Button>
      ))}
    </Box>

    {/* Main */}

    <Box sx={{ flex: 1 }}>

      <Box
        sx={{
          bgcolor: "white",
          px: 5,
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Recruiter Dashboard
        </Typography>

        <Avatar
          sx={{
            bgcolor: "#CBD5E1",
            width: 56,
            height: 56,
          }}
        >
          R
        </Avatar>
      </Box>

      <Box sx={{ p: 5 }}>

        <Typography variant="h2" fontWeight="bold">
          Good Morning 👋
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: 5 }}
        >
          Welcome back to NextHire.
          Here's your hiring overview today.
        </Typography>

        <Grid container spacing={3}>

          {stats.map((card) => (

            <Grid
              key={card.title}
              size={{ xs: 12, sm: 6, lg: 3 }}
            >

              <Card
                sx={{
                  borderRadius: 5,
                  height: "100%",
                }}
              >

                <CardContent>

                  <Avatar
                    sx={{
                      bgcolor: card.color,
                      mb: 2,
                    }}
                  >
                    {card.icon}
                  </Avatar>

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                  >
                    {card.value}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    {card.title}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

        <Grid
          container
          spacing={3}
          sx={{ mt: 2 }}
        >

          <Grid size={{ xs: 12, lg: 7 }}>

            <Card sx={{ borderRadius: 5 }}>

              <CardContent>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                >
                  Recent Jobs
                </Typography>

                {recentJobs.map((job) => (

                  <Box
                    key={job.title}
                    sx={{
                      py: 2,
                      borderBottom: "1px solid #eee",
                    }}
                  >

                    <Typography
                      fontWeight="bold"
                    >
                      {job.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {job.applicants} Applicants
                    </Typography>

                    <Chip
                      label={job.status}
                      color={
                        job.status === "Open"
                          ? "success"
                          : "warning"
                      }
                      sx={{ mt: 1 }}
                    />

                  </Box>

                ))}

              </CardContent>

            </Card>

          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>

            <Card sx={{ borderRadius: 5 }}>

              <CardContent>

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={3}
                >
                  Latest Applicants
                </Typography>

                {recentApplicants.map((user) => (

                  <Box
                    key={user.name}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      py: 2,
                      borderBottom:
                        "1px solid #eee",
                    }}
                  >

                    <Box>

                      <Typography
                        fontWeight="bold"
                      >
                        {user.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {user.role}
                      </Typography>

                    </Box>

                    <Chip
                      color="primary"
                      label={`${user.score}%`}
                    />

                  </Box>

                ))}

              </CardContent>

            </Card>

          </Grid>

        </Grid>

        <Button
          startIcon={<AddIcon />}
          variant="contained"
          size="large"
          sx={{
            mt: 5,
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Post New Job
        </Button>

      </Box>

    </Box>

  </Box>
);
};

export default RecruiterDashboard;