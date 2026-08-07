import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  LinearProgress,
  Chip,
} from "@mui/material";

const hiringFunnel = [
  {
    stage: "Applied",
    value: 287,
    color: "primary",
  },
  {
    stage: "Screened",
    value: 148,
    color: "info",
  },
  {
    stage: "Shortlisted",
    value: 52,
    color: "warning",
  },
  {
    stage: "Interviewed",
    value: 23,
    color: "secondary",
  },
  {
    stage: "Hired",
    value: 9,
    color: "success",
  },
];

const jobs = [
  {
    title: "Python Full Stack Developer",
    applications: 52,
  },
  {
    title: "React Developer",
    applications: 37,
  },
  {
    title: "AI Engineer",
    applications: 29,
  },
  {
    title: "Backend Developer",
    applications: 18,
  },
];

const aiScores = [
  {
    range: "95 - 100%",
    value: 14,
  },
  {
    range: "90 - 94%",
    value: 27,
  },
  {
    range: "80 - 89%",
    value: 53,
  },
  {
    range: "Below 80%",
    value: 193,
  },
];

const topSkills = [
  {
    skill: "Python",
    value: 78,
  },
  {
    skill: "React",
    value: 65,
  },
  {
    skill: "Django",
    value: 58,
  },
  {
    skill: "SQL",
    value: 49,
  },
  {
    skill: "Docker",
    value: 31,
  },
  {
    skill: "AWS",
    value: 28,
  },
];

const monthlyHiring = [
  {
    month: "Jan",
    value: 20,
  },
  {
    month: "Feb",
    value: 35,
  },
  {
    month: "Mar",
    value: 48,
  },
  {
    month: "Apr",
    value: 62,
  },
  {
    month: "May",
    value: 79,
  },
  {
    month: "Jun",
    value: 93,
  },
];

const RecruiterAnalytics = () => {

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        Recruitment Analytics
      </Typography>

      <Typography
        color="text.secondary"
        mb={5}
      >
        AI-powered hiring insights and recruitment performance.
      </Typography>

      <Grid
        container
        spacing={3}
      >        {/* Hiring Funnel */}

        <Grid size={{ xs: 12, md: 5 }}>

          <Card sx={{ borderRadius: 5, height: "100%" }}>

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Hiring Funnel
              </Typography>

              {hiringFunnel.map((item) => (

                <Box
                  key={item.stage}
                  sx={{ mb: 3 }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >

                    <Typography fontWeight="bold">
                      {item.stage}
                    </Typography>

                    <Chip
                      label={item.value}
                      color={item.color}
                    />

                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={(item.value / 287) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                </Box>

              ))}

            </CardContent>

          </Card>

        </Grid>

        {/* Applications by Job */}

        <Grid size={{ xs: 12, md: 7 }}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Applications by Job
              </Typography>

              {jobs.map((job) => (

                <Box
                  key={job.title}
                  sx={{ mb: 3 }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >

                    <Typography fontWeight="bold">
                      {job.title}
                    </Typography>

                    <Typography>
                      {job.applications}
                    </Typography>

                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={(job.applications / 52) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                </Box>

              ))}

            </CardContent>

          </Card>

        </Grid>        {/* AI Resume Screening */}

        <Grid size={{ xs: 12, md: 6 }}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                AI Resume Screening
              </Typography>

              {aiScores.map((item) => (

                <Box
                  key={item.range}
                  sx={{ mb: 3 }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >

                    <Typography fontWeight="bold">
                      {item.range}
                    </Typography>

                    <Typography>
                      {item.value} Candidates
                    </Typography>

                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={(item.value / 193) * 100}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                </Box>

              ))}

            </CardContent>

          </Card>

        </Grid>

        {/* Hiring Performance */}

        <Grid size={{ xs: 12, md: 6 }}>

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
                Hiring Performance
              </Typography>

              <Box sx={{ mb: 4 }}>

                <Typography fontWeight="bold">
                  Average Time to Hire
                </Typography>

                <Typography
                  variant="h4"
                  color="primary"
                  mt={1}
                >
                  16 Days
                </Typography>

              </Box>

              <Box sx={{ mb: 4 }}>

                <Typography fontWeight="bold">
                  Interview Success Rate
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={71}
                  sx={{
                    mt: 1,
                    height: 10,
                    borderRadius: 5,
                  }}
                />

                <Typography mt={1}>
                  71%
                </Typography>

              </Box>

              <Box sx={{ mb: 4 }}>

                <Typography fontWeight="bold">
                  Offer Acceptance Rate
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={82}
                  sx={{
                    mt: 1,
                    height: 10,
                    borderRadius: 5,
                  }}
                />

                <Typography mt={1}>
                  82%
                </Typography>

              </Box>

              <Box>

                <Typography fontWeight="bold">
                  Average AI Match Score
                </Typography>

                <Typography
                  variant="h4"
                  color="success.main"
                  mt={1}
                >
                  89%
                </Typography>

              </Box>

            </CardContent>

          </Card>

        </Grid>        {/* Top Skills */}

        <Grid size={{ xs: 12, md: 6 }}>

          <Card sx={{ borderRadius: 5 }}>

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Top Skills in Demand
              </Typography>

              {topSkills.map((item) => (

                <Box
                  key={item.skill}
                  sx={{ mb: 3 }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >

                    <Typography fontWeight="bold">
                      {item.skill}
                    </Typography>

                    <Typography>
                      {item.value}%
                    </Typography>

                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                </Box>

              ))}

            </CardContent>

          </Card>

        </Grid>

        {/* Monthly Hiring Trend */}

        <Grid size={{ xs: 12, md: 6 }}>

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
                Monthly Hiring Trend
              </Typography>

              {monthlyHiring.map((item) => (

                <Box
                  key={item.month}
                  sx={{ mb: 3 }}
                >

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >

                    <Typography fontWeight="bold">
                      {item.month}
                    </Typography>

                    <Typography>
                      {item.value}
                    </Typography>

                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                </Box>

              ))}

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </DashboardLayout>

  );

};

export default RecruiterAnalytics;