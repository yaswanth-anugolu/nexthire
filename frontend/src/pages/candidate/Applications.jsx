import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  Button,
} from "@mui/material";

import {
  Search,
  Work,
  AssignmentTurnedIn,
  Schedule,
  CheckCircle,
} from "@mui/icons-material";

const dummyApplications = [
  {
    id: 1,
    company: "Google",
    jobTitle: "Python Full Stack Developer",
    status: "Screening",
    appliedDate: "05 Aug 2026",
    aiScore: 91,
  },
  {
    id: 2,
    company: "Microsoft",
    jobTitle: "AI Engineer",
    status: "Interview",
    appliedDate: "03 Aug 2026",
    aiScore: 95,
  },
];

const Applications = () => {

  const [applications] = useState(dummyApplications);

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        My Applications
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
        mb={4}
      >
        Track every job you've applied for in one place.
      </Typography>

      <TextField
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />

      <Grid
        container
        spacing={3}
        mb={4}
      >

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
        >

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#EEF2FF",
                  color: "#4F46E5",
                  mb: 2,
                }}
              >
                <Work />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                {applications.length}
              </Typography>

              <Typography color="text.secondary">
                Total Applications
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
        >

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#FEF3C7",
                  color: "#D97706",
                  mb: 2,
                }}
              >
                <Schedule />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                1
              </Typography>

              <Typography color="text.secondary">
                Under Review
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
        >

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#DBEAFE",
                  color: "#2563EB",
                  mb: 2,
                }}
              >
                <AssignmentTurnedIn />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                1
              </Typography>

              <Typography color="text.secondary">
                Interview
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3,
          }}
        >

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Avatar
                sx={{
                  bgcolor: "#DCFCE7",
                  color: "#16A34A",
                  mb: 2,
                }}
              >
                <CheckCircle />
              </Avatar>

              <Typography
                variant="h4"
                fontWeight="bold"
              >
                0
              </Typography>

              <Typography color="text.secondary">
                Selected
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      <Grid
        container
        spacing={3}
      >        {applications.map((application) => (

          <Grid
            key={application.id}
            size={{ xs: 12 }}
          >

            <Card
              sx={{
                borderRadius: 5,
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 8,
                },
              }}
            >

              <CardContent>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                    }}
                  >

                    <Avatar
                      sx={{
                        width: 65,
                        height: 65,
                        bgcolor: "#EEF2FF",
                        color: "#4F46E5",
                      }}
                    >

                      <Work />

                    </Avatar>

                    <Box>

                      <Typography
                        variant="h5"
                        fontWeight="bold"
                      >
                        {application.jobTitle}
                      </Typography>

                      <Typography
                        color="primary"
                        fontWeight="bold"
                        mt={0.5}
                      >
                        {application.company}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        mt={1}
                      >
                        Applied on {application.appliedDate}
                      </Typography>

                    </Box>

                  </Box>

                  <Chip
                    label={application.status}
                    color={
                      application.status === "Interview"
                        ? "success"
                        : "warning"
                    }
                  />

                </Box>

                <Grid
                  container
                  spacing={3}
                  sx={{ mt: 3 }}
                >

                  <Grid
                    size={{
                      xs: 12,
                      md: 6,
                    }}
                  >

                    <Typography
                      color="text.secondary"
                    >
                      Resume Used
                    </Typography>

                    <Typography
                      fontWeight="bold"
                    >
                      Yaswanth_Resume.pdf
                    </Typography>

                  </Grid>

                  <Grid
                    size={{
                      xs: 12,
                      md: 6,
                    }}
                  >

                    <Typography
                      color="text.secondary"
                    >
                      AI Resume Match
                    </Typography>

                    <Typography
                      fontWeight="bold"
                      color="success.main"
                    >
                      {application.aiScore}%
                    </Typography>

                  </Grid>

                </Grid>

                <Typography
                  fontWeight="bold"
                  mt={4}
                  mb={2}
                >
                  Application Progress
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >

                  <Chip
                    label="Applied"
                    color="success"
                  />

                  <Chip
                    label="Screening"
                    color={
                      application.status === "Screening"
                        ? "primary"
                        : "success"
                    }
                  />

                  <Chip
                    label="Interview"
                    color={
                      application.status === "Interview"
                        ? "primary"
                        : "default"
                    }
                  />

                  <Chip
                    label="Hired"
                    color="default"
                  />

                </Box>                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 4,
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >

                  <Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Latest Update
                    </Typography>

                    <Typography
                      fontWeight="bold"
                    >
                      {application.status === "Interview"
                        ? "Interview scheduled"
                        : "Application under review"}
                    </Typography>

                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                    }}
                  >

                    <Button
                      variant="outlined"
                    >
                      View Job
                    </Button>

                    <Button
                      color="error"
                      variant="outlined"
                    >
                      Withdraw
                    </Button>

                  </Box>

                </Box>

              </CardContent>

            </Card>

          </Grid>

        ))}

        {applications.length === 0 && (

          <Grid
            size={{ xs: 12 }}
          >

            <Card
              sx={{
                borderRadius: 5,
                py: 8,
                textAlign: "center",
              }}
            >

              <CardContent>

                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 3,
                    bgcolor: "#EEF2FF",
                    color: "#4F46E5",
                  }}
                >

                  <Work
                    fontSize="large"
                  />

                </Avatar>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  No Applications Yet
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                  mb={4}
                >
                  Start applying for jobs to track your application progress here.
                </Typography>

                <Button
                  variant="contained"
                >
                  Browse Jobs
                </Button>

              </CardContent>

            </Card>

          </Grid>

        )}      </Grid>

    </DashboardLayout>

  );

};

export default Applications;