import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";

const CandidateDashboard = () => {
  return (
    <DashboardLayout>
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
      >
        Welcome Back 👋
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
      >
        Welcome to NextHire. Complete your profile and upload your resume
        to unlock AI-powered resume analysis, job recommendations,
        interview preparation, and much more.
      </Typography>

      <Grid container spacing={3}>
        {/* Profile Status */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mb={2}
              >
                <PersonIcon
                  sx={{
                    fontSize: 40,
                    color: "#6366F1",
                  }}
                />

                <Typography
                  variant="h5"
                  fontWeight={600}
                >
                  Profile Status
                </Typography>
              </Box>

              <Typography color="text.secondary">
                Your profile has not been completed yet.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Complete Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Resume Status */}

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              height: "100%",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mb={2}
              >
                <DescriptionIcon
                  sx={{
                    fontSize: 40,
                    color: "#06B6D4",
                  }}
                />

                <Typography
                  variant="h5"
                  fontWeight={600}
                >
                  Resume Status
                </Typography>
              </Box>

              <Typography color="text.secondary">
                No resume uploaded yet.
              </Typography>

              <Button
                variant="outlined"
                sx={{
                  mt: 3,
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Upload Resume
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Latest Activity */}

        <Grid size={{ xs: 12 }}>
          <Card
            sx={{
              borderRadius: 4,
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                fontWeight={600}
                mb={2}
              >
                Latest Activity
              </Typography>

              <Typography color="text.secondary">
                No activity available yet. Once you complete your profile,
                upload your resume, and start applying for jobs, your recent
                activity will appear here.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default CandidateDashboard;