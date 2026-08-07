import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  LinearProgress,
  Chip,
} from "@mui/material";

import {
  AutoAwesome,
  Description,
  TrendingUp,
} from "@mui/icons-material";

const dummyScore = {
  overall: 92,
  match: "Excellent",
};

const ResumeScore = () => {

  const [score] = useState(dummyScore);

  return (

    <DashboardLayout>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
        }}
      >

        <Box>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            AI Resume Score
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Analyze your resume against a job description and receive AI-powered recommendations.
          </Typography>

        </Box>

        <Button
          variant="contained"
          startIcon={<Description />}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Analyze New Resume
        </Button>

      </Box>

      <Grid
        container
        spacing={3}
      >

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >

          <Card
            sx={{
              borderRadius: 5,
              textAlign: "center",
              height: "100%",
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

                <AutoAwesome
                  sx={{
                    fontSize: 50,
                    color: "#4F46E5",
                  }}
                />

              </Avatar>

              <Typography
                variant="h6"
                color="text.secondary"
              >
                Overall ATS Score
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color="primary"
                mt={2}
              >
                {score.overall}%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={score.overall}
                sx={{
                  mt: 3,
                  height: 12,
                  borderRadius: 6,
                }}
              />

              <Typography
                color="success.main"
                fontWeight="bold"
                mt={3}
              >
                {score.match}
              </Typography>

              <Typography
                color="text.secondary"
                mt={1}
              >
                Your resume is highly compatible with modern ATS systems.
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >          <Card
            sx={{
              borderRadius: 5,
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={4}
              >
                Section-wise Analysis
              </Typography>

              <Box mb={4}>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >

                  <Typography fontWeight="bold">
                    Skills
                  </Typography>

                  <Typography color="primary">
                    95%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={95}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />

              </Box>

              <Box mb={4}>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >

                  <Typography fontWeight="bold">
                    Projects
                  </Typography>

                  <Typography color="primary">
                    90%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={90}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />

              </Box>

              <Box mb={4}>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >

                  <Typography fontWeight="bold">
                    Experience
                  </Typography>

                  <Typography color="primary">
                    88%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={88}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />

              </Box>

              <Box mb={4}>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >

                  <Typography fontWeight="bold">
                    Education
                  </Typography>

                  <Typography color="primary">
                    92%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={92}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />

              </Box>

              <Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >

                  <Typography fontWeight="bold">
                    Resume Formatting
                  </Typography>

                  <Typography color="primary">
                    94%
                  </Typography>

                </Box>

                <LinearProgress
                  variant="determinate"
                  value={94}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                  }}
                />

              </Box>

              <Box
                sx={{
                  mt: 5,
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "#F8FAFC",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >

                <Avatar
                  sx={{
                    bgcolor: "#DCFCE7",
                  }}
                >

                  <TrendingUp
                    sx={{
                      color: "#16A34A",
                    }}
                  />

                </Avatar>

                <Box>

                  <Typography
                    fontWeight="bold"
                  >
                    Resume Performance
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Your resume performs better than approximately 88% of resumes analyzed for similar roles.
                  </Typography>

                </Box>

              </Box>              <Typography
                variant="h5"
                fontWeight="bold"
                mt={5}
                mb={3}
              >
                Missing Keywords
              </Typography>

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

                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 4,
                      height: "100%",
                    }}
                  >

                    <CardContent>

                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="error"
                        mb={2}
                      >
                        Missing Skills
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                        }}
                      >

                        <Chip
                          label="Docker"
                          color="error"
                        />

                        <Chip
                          label="AWS"
                          color="error"
                        />

                        <Chip
                          label="Redis"
                          color="error"
                        />

                        <Chip
                          label="CI/CD"
                          color="error"
                        />

                        <Chip
                          label="Kubernetes"
                          color="error"
                        />

                      </Box>

                      <Typography
                        color="text.secondary"
                        mt={3}
                      >
                        Adding these keywords can improve your ATS score for
                        most Python Full Stack roles.
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
                    variant="outlined"
                    sx={{
                      borderRadius: 4,
                      height: "100%",
                    }}
                  >

                    <CardContent>

                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="success.main"
                        mb={2}
                      >
                        Strong Skills Found
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                        }}
                      >

                        <Chip
                          label="Python"
                          color="success"
                        />

                        <Chip
                          label="React"
                          color="success"
                        />

                        <Chip
                          label="Django"
                          color="success"
                        />

                        <Chip
                          label="REST API"
                          color="success"
                        />

                        <Chip
                          label="MySQL"
                          color="success"
                        />

                        <Chip
                          label="JavaScript"
                          color="success"
                        />

                      </Box>

                      <Typography
                        color="text.secondary"
                        mt={3}
                      >
                        These keywords are well matched with the selected job
                        description.
                      </Typography>

                    </CardContent>

                  </Card>

                </Grid>

              </Grid>

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={5}
                mb={3}
              >
                Resume Strengths
              </Typography>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
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

                      <Typography>
                        ✅ Strong technical skill section
                      </Typography>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 6,
                      }}
                    >

                      <Typography>
                        ✅ Good ATS-compatible formatting
                      </Typography>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 6,
                      }}
                    >

                      <Typography>
                        ✅ Relevant academic background
                      </Typography>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 6,
                      }}
                    >

                      <Typography>
                        ✅ Well-structured project descriptions
                      </Typography>

                    </Grid>

                  </Grid>

                </CardContent>

              </Card>              <Typography
                variant="h5"
                fontWeight="bold"
                mt={5}
                mb={3}
              >
                AI Suggestions
              </Typography>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
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
                      }}
                    >
                      <Typography>
                        💡 Add more quantified achievements to your projects (for example, "Improved API response time by 35%").
                      </Typography>
                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                      }}
                    >
                      <Typography>
                        💡 Include cloud technologies such as AWS or Azure if you've worked with them.
                      </Typography>
                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                      }}
                    >
                      <Typography>
                        💡 Mention Docker, CI/CD, and GitHub Actions to improve ATS keyword matching.
                      </Typography>
                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                      }}
                    >
                      <Typography>
                        💡 Add certifications, internships, or hackathon achievements to strengthen your profile.
                      </Typography>
                    </Grid>

                  </Grid>

                </CardContent>

              </Card>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </DashboardLayout>

  );

};

export default ResumeScore;