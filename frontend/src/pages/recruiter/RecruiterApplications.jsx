import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Chip,
  Stack,
  Divider,
  LinearProgress,
  InputAdornment,
  MenuItem,
} from "@mui/material";

import {
  Search,
  Description,
  Person,
  CheckCircle,
  Cancel,
  EventAvailable,
  Work,
} from "@mui/icons-material";

const stats = [
  {
    title: "Applications",
    value: 287,
    color: "#2563EB",
  },
  {
    title: "Shortlisted",
    value: 52,
    color: "#F59E0B",
  },
  {
    title: "Interview",
    value: 23,
    color: "#8B5CF6",
  },
  {
    title: "Hired",
    value: 9,
    color: "#10B981",
  },
];

const dummyApplications = [
  {
    id: 1,
    candidate: "Rahul Sharma",
    job: "Python Full Stack Developer",
    score: 96,
    status: "SHORTLISTED",
    applied: "Yesterday",
    experience: "2 Years",
    resume: "Rahul_Sharma_Resume.pdf",
  },
  {
    id: 2,
    candidate: "Priya Reddy",
    job: "React Developer",
    score: 91,
    status: "INTERVIEW",
    applied: "2 Days Ago",
    experience: "3 Years",
    resume: "Priya_Resume.pdf",
  },
  {
    id: 3,
    candidate: "Arjun Kumar",
    job: "AI Engineer",
    score: 88,
    status: "APPLIED",
    applied: "Today",
    experience: "Fresher",
    resume: "Arjun_AI.pdf",
  },
];

const RecruiterApplications = () => {

  const [applications] = useState(dummyApplications);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        Applications
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Review, shortlist and hire candidates.
      </Typography>

      <Grid
        container
        spacing={3}
        mb={4}
      >

        {stats.map((item) => (

          <Grid
            key={item.title}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >

            <Card
              sx={{
                borderRadius: 5,
              }}
            >

              <CardContent>

                <Typography
                  color="text.secondary"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    color: item.color,
                  }}
                >
                  {item.value}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>
            <Grid
        container
        spacing={2}
        sx={{ mb: 4 }}
      >

        <Grid size={{ xs: 12, md: 7 }}>

          <TextField
            fullWidth
            placeholder="Search candidate or job..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>

          <TextField
            fullWidth
            select
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <MenuItem value="">
              All
            </MenuItem>

            <MenuItem value="APPLIED">
              Applied
            </MenuItem>

            <MenuItem value="SHORTLISTED">
              Shortlisted
            </MenuItem>

            <MenuItem value="INTERVIEW">
              Interview
            </MenuItem>

            <MenuItem value="HIRED">
              Hired
            </MenuItem>

            <MenuItem value="REJECTED">
              Rejected
            </MenuItem>

          </TextField>

        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>

          <Button
            fullWidth
            variant="contained"
            sx={{
              height: "56px",
              borderRadius: 3,
            }}
          >
            Export
          </Button>

        </Grid>

      </Grid>

      <Grid
        container
        spacing={3}
      >

        {applications

          .filter((item) => {

            const searchMatch =

              item.candidate
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              item.job
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                );

            const statusMatch =

              status === ""

                ? true

                : item.status === status;

            return (

              searchMatch &&
              statusMatch

            );

          })

          .map((application) => (

            <Grid
              key={application.id}
              size={{ xs: 12 }}
            >              <Card
                sx={{
                  borderRadius: 5,
                  transition: ".25s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-3px)",
                  },
                }}
              >

                <CardContent>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
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
                          bgcolor: "#4F46E5",
                        }}
                      >
                        <Person />
                      </Avatar>

                      <Box>

                        <Typography
                          variant="h5"
                          fontWeight="bold"
                        >
                          {application.candidate}
                        </Typography>

                        <Typography
                          color="text.secondary"
                        >
                          {application.job}
                        </Typography>

                        <Stack
                          direction="row"
                          spacing={1}
                          mt={1}
                        >

                          <Chip
                            label={application.status}
                            color={
                              application.status ===
                              "HIRED"
                                ? "success"
                                : application.status ===
                                  "INTERVIEW"
                                ? "secondary"
                                : application.status ===
                                  "SHORTLISTED"
                                ? "warning"
                                : "primary"
                            }
                          />

                          <Chip
                            label={application.experience}
                            variant="outlined"
                          />

                        </Stack>

                      </Box>

                    </Box>

                    <Box
                      sx={{
                        textAlign: "right",
                      }}
                    >

                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="success.main"
                      >
                        {application.score}%
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        AI Match
                      </Typography>

                    </Box>

                  </Box>

                  <Divider sx={{ my: 3 }} />

                  <Grid
                    container
                    spacing={3}
                  >

                      <Grid
                        size={{
                          xs: 12,
                          md: 8,
                        }}
                      >

                        <Typography
                          fontWeight="bold"
                          mb={1}
                        >
                          Resume
                        </Typography>

                        <Button
                          startIcon={
                            <Description />
                          }
                          variant="outlined"
                        >
                          {application.resume}
                        </Button>

                        <Typography
                          mt={2}
                          color="text.secondary"
                        >
                          Applied :
                          {" "}
                          {application.applied}
                        </Typography>

                      </Grid>

                      <Grid
                        size={{
                          xs: 12,
                          md: 4,
                        }}
                      >

                        <Typography
                          fontWeight="bold"
                          mb={1}
                        >
                          AI Recommendation
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={application.score}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            mb: 1,
                          }}
                        />

                        <Typography>
                          Excellent Match
                        </Typography>

                      </Grid>

                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Stack
                    direction="row"
                    spacing={2}
                    flexWrap="wrap"
                  >                    <Button
                      variant="contained"
                      color="warning"
                      startIcon={<CheckCircle />}
                    >
                      Shortlist
                    </Button>

                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<EventAvailable />}
                    >
                      Interview
                    </Button>

                    <Button
                      variant="contained"
                      color="success"
                      startIcon={<Work />}
                    >
                      Hire
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Cancel />}
                    >
                      Reject
                    </Button>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>

          ))}

      </Grid>

    </DashboardLayout>

  );

};

export default RecruiterApplications;