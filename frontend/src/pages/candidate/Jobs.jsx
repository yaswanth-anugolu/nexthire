import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  Stack,
} from "@mui/material";

import {
  Search,
  Work,
  LocationOn,
  AttachMoney,
  AccessTime,
} from "@mui/icons-material";

const dummyJobs = [
  {
    id: 1,
    title: "Python Full Stack Developer",
    company: "Google",
    location: "Hyderabad",
    salary: "₹10 - ₹18 LPA",
    type: "Full Time",
    experience: "0-2 Years",
    posted: "2 days ago",
    skills: [
      "Python",
      "React",
      "Django",
      "REST API",
    ],
  },
  {
    id: 2,
    title: "AI / ML Engineer",
    company: "Microsoft",
    location: "Bangalore",
    salary: "₹14 - ₹22 LPA",
    type: "Hybrid",
    experience: "1-3 Years",
    posted: "1 day ago",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Machine Learning",
    ],
  },
  {
    id: 3,
    title: "Backend Django Developer",
    company: "Amazon",
    location: "Remote",
    salary: "₹12 - ₹20 LPA",
    type: "Remote",
    experience: "Fresher",
    posted: "Today",
    skills: [
      "Django",
      "Python",
      "MySQL",
      "REST API",
    ],
  },
];

const Jobs = () => {

  const [jobs] = useState(dummyJobs);

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        Find Your Dream Job
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Browse thousands of AI-selected jobs that match your profile.
      </Typography>

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
            alignItems="center"
          >

            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >

              <TextField
                fullWidth
                placeholder="Search jobs, companies, skills..."
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
                md: 4,
              }}
            >

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  height: "56px",
                  borderRadius: 3,
                }}
              >
                Search Jobs
              </Button>

            </Grid>

          </Grid>

          <Stack
            direction="row"
            spacing={1}
            mt={3}
            flexWrap="wrap"
            useFlexGap
          >

            <Chip label="Remote" clickable />

            <Chip label="Full Time" clickable />

            <Chip label="Hybrid" clickable />

            <Chip label="Fresher" clickable />

            <Chip label="Python" clickable />

            <Chip label="React" clickable />

            <Chip label="AI/ML" clickable />

            <Chip label="Django" clickable />

          </Stack>

        </CardContent>

      </Card>

      <Grid
        container
        spacing={3}
      >        {jobs.map((job) => (

          <Grid
            key={job.id}
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
                        width: 70,
                        height: 70,
                        bgcolor: "#EEF2FF",
                      }}
                    >

                      <Work
                        sx={{
                          color: "#4F46E5",
                          fontSize: 40,
                        }}
                      />

                    </Avatar>

                    <Box>

                      <Typography
                        variant="h5"
                        fontWeight="bold"
                      >
                        {job.title}
                      </Typography>

                      <Typography
                        color="primary"
                        fontWeight="bold"
                        mt={0.5}
                      >
                        {job.company}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={3}
                        mt={2}
                        flexWrap="wrap"
                        useFlexGap
                      >

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >

                          <LocationOn
                            fontSize="small"
                            color="action"
                          />

                          <Typography>
                            {job.location}
                          </Typography>

                        </Stack>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >

                          <AttachMoney
                            fontSize="small"
                            color="success"
                          />

                          <Typography
                            fontWeight="bold"
                            color="success.main"
                          >
                            {job.salary}
                          </Typography>

                        </Stack>

                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                        >

                          <AccessTime
                            fontSize="small"
                            color="action"
                          />

                          <Typography>
                            {job.posted}
                          </Typography>

                        </Stack>

                      </Stack>

                    </Box>

                  </Box>

                  <Chip
                    color="primary"
                    label={job.type}
                  />

                </Box>

                <Box
                  sx={{
                    mt: 3,
                  }}
                >

                  <Typography
                    color="text.secondary"
                    mb={1}
                  >
                    Experience
                  </Typography>

                  <Chip
                    label={job.experience}
                    color="secondary"
                    variant="outlined"
                  />

                </Box>

                <Typography
                  color="text.secondary"
                  mt={3}
                  mb={1}
                >
                  Required Skills
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                >                  {job.skills.map((skill) => (

                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      color="primary"
                    />

                  ))}

                </Stack>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 4,
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >

                  <Typography
                    color="text.secondary"
                  >
                    Apply now to increase your chances of getting shortlisted.
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                  >

                    <Button
                      variant="outlined"
                    >
                      View Details
                    </Button>

                    <Button
                      variant="contained"
                    >
                      Apply Now
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

                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 3,
                    bgcolor: "#EEF2FF",
                  }}
                >

                  <Work
                    sx={{
                      color: "#4F46E5",
                      fontSize: 50,
                    }}
                  />

                </Avatar>

                <Typography
                  variant="h4"
                  fontWeight="bold"
                >
                  No Jobs Found
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                  mb={4}
                >
                  Try changing your search or filters.
                </Typography>

                <Button
                  variant="contained"
                >
                  Clear Filters
                </Button>

              </CardContent>

            </Card>

          </Grid>

        )}      </Grid>

    </DashboardLayout>

  );

};

export default Jobs;