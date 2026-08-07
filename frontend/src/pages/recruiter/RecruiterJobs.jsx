import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Chip,
  Stack,
  Divider,
  Avatar,
  MenuItem,
  InputAdornment,
} from "@mui/material";

import {
  Search,
  Add,
  Work,
  LocationOn,
  AttachMoney,
  People,
  CalendarMonth,
  Star,
} from "@mui/icons-material";

const stats = [
  {
    title: "Total Jobs",
    value: 12,
    color: "#2563EB",
  },
  {
    title: "Open Jobs",
    value: 8,
    color: "#10B981",
  },
  {
    title: "Draft Jobs",
    value: 2,
    color: "#F59E0B",
  },
  {
    title: "Closed Jobs",
    value: 2,
    color: "#EF4444",
  },
];

const dummyJobs = [
  {
    id: 1,
    title: "Python Full Stack Developer",
    salary: "₹8L - ₹12L",
    location: "Remote",
    employment: "Full Time",
    experience: "2+ Years",
    applicants: 42,
    deadline: "25 Aug 2026",
    featured: true,
    status: "OPEN",
    skills: [
      "Python",
      "React",
      "Django",
      "REST API",
      "MySQL",
    ],
  },
  {
    id: 2,
    title: "React Developer",
    salary: "₹6L - ₹10L",
    location: "Hybrid",
    employment: "Full Time",
    experience: "1+ Years",
    applicants: 31,
    deadline: "30 Aug 2026",
    featured: false,
    status: "OPEN",
    skills: [
      "React",
      "JavaScript",
      "Redux",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 3,
    title: "AI Engineer",
    salary: "₹12L - ₹18L",
    location: "Onsite",
    employment: "Full Time",
    experience: "3+ Years",
    applicants: 18,
    deadline: "5 Sep 2026",
    featured: true,
    status: "DRAFT",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
    ],
  },
];

const RecruiterJobs = () => {

  const navigate = useNavigate();

  const [jobs] = useState(dummyJobs);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [sort, setSort] = useState("latest");

  return (

    <DashboardLayout>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >

        <Box>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Recruiter Jobs
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Manage, edit and track all your job postings.
          </Typography>

        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          size="large"
          onClick={() => navigate("/recruiter/jobs/new")}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Post New Job
        </Button>

      </Box>

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
            <Card
        sx={{
          borderRadius: 5,
          mb: 4,
        }}
      >

        <CardContent>

          <Grid
            container
            spacing={2}
          >

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <TextField
                fullWidth
                placeholder="Search jobs..."
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

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

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
                  All Jobs
                </MenuItem>

                <MenuItem value="OPEN">
                  Open
                </MenuItem>

                <MenuItem value="DRAFT">
                  Draft
                </MenuItem>

                <MenuItem value="CLOSED">
                  Closed
                </MenuItem>

              </TextField>

            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 3,
              }}
            >

              <TextField
                fullWidth
                select
                label="Sort By"
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
              >

                <MenuItem value="latest">
                  Latest
                </MenuItem>

                <MenuItem value="title">
                  Job Title
                </MenuItem>

                <MenuItem value="applicants">
                  Applicants
                </MenuItem>

                <MenuItem value="deadline">
                  Deadline
                </MenuItem>

              </TextField>

            </Grid>

          </Grid>

        </CardContent>

      </Card>

      <Grid
        container
        spacing={3}
      >

        {jobs

          .filter((job) => {

            const searchMatch =

              job.title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              job.location
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                );

            const statusMatch =

              status === ""

                ? true

                : job.status === status;

            return (

              searchMatch &&
              statusMatch

            );

          })

          .sort((a, b) => {

            if (sort === "title") {

              return a.title.localeCompare(
                b.title
              );

            }

            if (sort === "applicants") {

              return (
                b.applicants -
                a.applicants
              );

            }

            return 0;

          })

          .map((job) => (

            <Grid
              key={job.id}
              size={{ xs: 12 }}
            >              <Card
                sx={{
                  borderRadius: 5,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 8,
                    transform: "translateY(-4px)",
                  },
                }}
              >

                <CardContent>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 3,
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
                          bgcolor: "#4F46E5",
                          width: 60,
                          height: 60,
                        }}
                      >
                        <Work />
                      </Avatar>

                      <Box>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mb={1}
                        >

                          <Typography
                            variant="h5"
                            fontWeight="bold"
                          >
                            {job.title}
                          </Typography>

                          {job.featured && (

                            <Chip
                              icon={<Star />}
                              label="Featured"
                              color="warning"
                              size="small"
                            />

                          )}

                        </Stack>

                        <Stack
                          direction="row"
                          spacing={1}
                        >

                          <Chip
                            label={job.status}
                            color={
                              job.status === "OPEN"
                                ? "success"
                                : job.status === "DRAFT"
                                ? "warning"
                                : "default"
                            }
                          />

                          <Chip
                            label={job.employment}
                            variant="outlined"
                          />

                        </Stack>

                      </Box>

                    </Box>

                    <Typography
                      variant="h6"
                      color="primary"
                      fontWeight="bold"
                    >
                      {job.salary}
                    </Typography>

                  </Box>

                  <Grid
                    container
                    spacing={3}
                    sx={{ mb: 3 }}
                  >

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >

                        <LocationOn
                          color="action"
                        />

                        <Typography>
                          {job.location}
                        </Typography>

                      </Stack>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >

                        <People
                          color="action"
                        />

                        <Typography>
                          {job.applicants}
                          {" "}
                          Applicants
                        </Typography>

                      </Stack>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >

                        <CalendarMonth
                          color="action"
                        />

                        <Typography>
                          {job.deadline}
                        </Typography>

                      </Stack>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >

                        <AttachMoney
                          color="action"
                        />

                        <Typography>
                          {job.experience}
                        </Typography>

                      </Stack>

                    </Grid>

                  </Grid>

                  <Divider sx={{ mb: 3 }} />

                  <Typography
                    fontWeight="bold"
                    mb={2}
                  >
                    Required Skills
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                  >

                    {job.skills.map((skill) => (

                      <Chip
                        key={skill}
                        label={skill}
                        color="primary"
                        variant="outlined"
                      />

                    ))}

                  </Stack>

                  <Divider sx={{ my: 3 }} />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >                    <Stack
                      direction="row"
                      spacing={2}
                      flexWrap="wrap"
                      useFlexGap
                    >

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          navigate("/recruiter/applications")
                        }
                      >
                        View Applicants
                      </Button>

                      <Button
                        variant="outlined"
                      >
                        Edit
                      </Button>

                      <Button
                        variant="outlined"
                      >
                        Duplicate
                      </Button>

                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      flexWrap="wrap"
                      useFlexGap
                    >

                      <Button
                        color="warning"
                        variant="contained"
                      >
                        Close Job
                      </Button>

                      <Button
                        color="error"
                        variant="contained"
                      >
                        Delete
                      </Button>

                    </Stack>

                  </Box>

                </CardContent>

              </Card>

            </Grid>

          ))}

          {jobs.length === 0 && (

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

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    gutterBottom
                  >
                    No Jobs Found
                  </Typography>

                  <Typography
                    color="text.secondary"
                    mb={4}
                  >
                    You haven't posted any jobs yet.
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<Add />}
                    onClick={() =>
                      navigate("/recruiter/jobs/new")
                    }
                  >
                    Create Your First Job
                  </Button>

                </CardContent>

              </Card>

            </Grid>

          )}

      </Grid>

    </DashboardLayout>

  );

};

export default RecruiterJobs;