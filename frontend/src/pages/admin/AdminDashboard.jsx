import AdminLayout from "../../layouts/AdminLayout";

import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";

import StatCard from "../../components/admin/StatCard";

const AdminDashboard = () => {

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Admin Dashboard
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
        mb={4}
      >
        Welcome back, Administrator. Monitor and manage the entire NextHire platform from one place.
      </Typography>

      <Grid
        container
        spacing={3}
      >

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <StatCard
            title="Total Users"
            value="1,248"
            icon={<PeopleIcon />}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <StatCard
            title="Companies"
            value="84"
            icon={<BusinessCenterIcon />}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <StatCard
            title="Jobs"
            value="462"
            icon={<WorkIcon />}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 3,
          }}
        >
          <StatCard
            title="Applications"
            value="3,846"
            icon={<AssignmentIcon />}
          />
        </Grid>
                <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >

          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Platform Overview
              </Typography>

              <Grid
                container
                spacing={3}
              >

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>

                      <Typography color="text.secondary">
                        Active Recruiters
                      </Typography>

                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mt={1}
                      >
                        72
                      </Typography>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>

                      <Typography color="text.secondary">
                        Active Companies
                      </Typography>

                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mt={1}
                      >
                        81
                      </Typography>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>

                      <Typography color="text.secondary">
                        Open Jobs
                      </Typography>

                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mt={1}
                      >
                        436
                      </Typography>

                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>

                      <Typography color="text.secondary">
                        Pending Reviews
                      </Typography>

                      <Typography
                        variant="h4"
                        fontWeight="bold"
                        mt={1}
                      >
                        39
                      </Typography>

                    </CardContent>
                  </Card>
                </Grid>

              </Grid>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >

          <Card
            sx={{
              borderRadius: 4,
            }}
          >

            <CardContent>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={3}
              >
                System Status
              </Typography>

              <Typography mb={2}>
                🟢 Server Status: Online
              </Typography>

              <Typography mb={2}>
                🟢 Database: Connected
              </Typography>

              <Typography mb={2}>
                🟢 AI Services: Running
              </Typography>

              <Typography>
                🟢 Storage: Healthy
              </Typography>

            </CardContent>

          </Card>

        </Grid>
                <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >

          <Card
            sx={{
              borderRadius: 4,
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Recent Companies
              </Typography>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography fontWeight="bold">
                  TechNova Solutions
                </Typography>

                <Typography color="success.main">
                  Active
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography fontWeight="bold">
                  CloudSphere Pvt Ltd
                </Typography>

                <Typography color="success.main">
                  Active
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                mb={2}
              >
                <Typography fontWeight="bold">
                  VisionAI Labs
                </Typography>

                <Typography color="warning.main">
                  Pending
                </Typography>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Typography fontWeight="bold">
                  FutureSoft Technologies
                </Typography>

                <Typography color="success.main">
                  Active
                </Typography>
              </Box>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >

          <Card
            sx={{
              borderRadius: 4,
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

              <Typography mb={2}>
                🏢 New company registered: TechNova Solutions
              </Typography>

              <Typography mb={2}>
                👤 Recruiter account created successfully.
              </Typography>

              <Typography mb={2}>
                💼 New Software Engineer job posted.
              </Typography>

              <Typography mb={2}>
                📄 18 new applications received today.
              </Typography>

              <Typography>
                🤖 AI Interview completed by 12 candidates.
              </Typography>

            </CardContent>

          </Card>

        </Grid>
              </Grid>

    </AdminLayout>

  );

};

export default AdminDashboard;