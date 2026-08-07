import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  CloudUpload,
  Business,
  Work,
  People,
  EventAvailable,
  EmojiEvents,
} from "@mui/icons-material";

const profileStats = [
  {
    title: "Jobs Posted",
    value: 12,
    color: "#2563EB",
    icon: <Work />,
  },
  {
    title: "Applications",
    value: 287,
    color: "#10B981",
    icon: <People />,
  },
  {
    title: "Interviews",
    value: 36,
    color: "#F59E0B",
    icon: <EventAvailable />,
  },
  {
    title: "Hires",
    value: 9,
    color: "#8B5CF6",
    icon: <EmojiEvents />,
  },
];

const RecruiterProfile = () => {

  const [profile, setProfile] = useState({

    company: "",

    designation: "",

    official_email: "",

    linkedin: "",

    about: "",

  });

  const handleChange = (e) => {

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        Recruiter Profile
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage your recruiter profile and company information.
      </Typography>

      <Grid
        container
        spacing={3}
      >

        <Grid
          size={{
            xs: 12,
            lg: 4,
          }}
        >

          <Card
            sx={{
              borderRadius: 5,
              textAlign: "center",
            }}
          >

            <CardContent>

              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: "auto",
                  mb: 2,
                  bgcolor: "#CBD5E1",
                }}
              >
                <Business
                  sx={{
                    fontSize: 70,
                  }}
                />
              </Avatar>

              <Button
                variant="outlined"
                startIcon={<CloudUpload />}
              >
                Upload Logo
              </Button>

              <Typography
                mt={4}
                fontWeight="bold"
              >
                Profile Completion
              </Typography>

              <LinearProgress
                variant="determinate"
                value={82}
                sx={{
                  mt: 2,
                  height: 10,
                  borderRadius: 5,
                }}
              />

              <Typography
                mt={1}
                color="text.secondary"
              >
                82% Completed
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            lg: 8,
          }}
        >

          <Grid
            container
            spacing={2}
          >

            {profileStats.map((item) => (

              <Grid
                key={item.title}
                size={{
                  xs: 12,
                  sm: 6,
                }}
              >

                <Card
                  sx={{
                    borderRadius: 5,
                  }}
                >

                  <CardContent>

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >

                      <Avatar
                        sx={{
                          bgcolor: item.color,
                        }}
                      >
                        {item.icon}
                      </Avatar>

                      <Box>

                        <Typography
                          color="text.secondary"
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="h4"
                          fontWeight="bold"
                        >
                          {item.value}
                        </Typography>

                      </Box>

                    </Stack>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>
                    <Card
            sx={{
              mt: 3,
              borderRadius: 5,
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Company Information
              </Typography>

              <Grid
                container
                spacing={3}
              >

                <Grid
                  size={{
                    xs: 12,
                  }}
                >

                  <TextField
                    fullWidth
                    label="Company Name"
                    name="company"
                    value={profile.company}
                    onChange={handleChange}
                  />

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >

                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={profile.designation}
                    onChange={handleChange}
                  />

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    md: 6,
                  }}
                >

                  <TextField
                    fullWidth
                    label="Official Email"
                    name="official_email"
                    value={profile.official_email}
                    onChange={handleChange}
                  />

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                  }}
                >

                  <TextField
                    fullWidth
                    label="LinkedIn Profile"
                    name="linkedin"
                    value={profile.linkedin}
                    onChange={handleChange}
                  />

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                  }}
                >

                  <TextField
                    fullWidth
                    multiline
                    minRows={5}
                    label="About Company"
                    name="about"
                    value={profile.about}
                    onChange={handleChange}
                    placeholder="Write a short description about your company..."
                  />

                </Grid>

              </Grid>

            </CardContent>

          </Card>
                    <Grid
            container
            spacing={3}
            sx={{ mt: 1 }}
          >

            
            {/* Recent Activity */}

            <Grid
              size={{
                xs: 12,
                md: 6,
              }}
            >

              <Card
                sx={{
                  borderRadius: 5,
                  height: "100%",
                }}
              >

                <CardContent>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    Recent Activity
                  </Typography>

                  <Stack spacing={3}>

                    <Box>

                      <Typography
                        fontWeight="bold"
                      >
                        Posted Python Full Stack Developer
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Today • 10:30 AM
                      </Typography>

                    </Box>

                    <Box>

                      <Typography
                        fontWeight="bold"
                      >
                        42 New Applications Received
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Yesterday
                      </Typography>

                    </Box>

                    <Box>

                      <Typography
                        fontWeight="bold"
                      >
                        Rahul Sharma Shortlisted
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        2 Days Ago
                      </Typography>

                    </Box>

                    <Box>

                      <Typography
                        fontWeight="bold"
                      >
                        AI Engineer Job Published
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        4 Days Ago
                      </Typography>

                    </Box>

                  </Stack>

                </CardContent>

              </Card>

            </Grid>

          </Grid>
                    <Card
            sx={{
              mt: 3,
              borderRadius: 5,
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Account & Company Overview
              </Typography>

              <Grid
                container
                spacing={3}
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
                    Recruiter ID
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    REC-2026-00124
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Account Created
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    12 January 2026
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Last Login
                  </Typography>

                  <Typography
                    fontWeight="bold"
                  >
                    Today • 09:45 AM
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
                    Active Job Posts
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    8 Jobs
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Company Size
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    250–500 Employees
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Hiring Status
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    color="success.main"
                  >
                    Actively Hiring
                  </Typography>

                </Grid>

              </Grid>

            </CardContent>

          </Card>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >

            <Button
              variant="outlined"
              size="large"
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
              }}
            >
              Save Changes
            </Button>

          </Box>

        </Grid>

      </Grid>

    </DashboardLayout>

  );

};

export default RecruiterProfile;