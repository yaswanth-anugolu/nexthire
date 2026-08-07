import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  MenuItem,
  LinearProgress,
} from "@mui/material";

import {
  SmartToy,
  Timer,
  Work,
  Psychology,
  PlayArrow,
} from "@mui/icons-material";

const roles = [
  "Python Full Stack Developer",
  "React Developer",
  "Django Developer",
  "AI Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Backend Developer",
];

const difficulties = [
  "Easy",
  "Medium",
  "Hard",
];

const AIMockInterview = () => {

  const [role, setRole] = useState("Python Full Stack Developer");

  const [difficulty, setDifficulty] = useState("Medium");

  const [started] = useState(false);

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        AI Mock Interview
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
        mb={4}
      >
        Practice technical interviews with AI and receive instant feedback.
      </Typography>

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
            }}
          >

            <CardContent>

              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mb={3}
              >

                <Avatar
                  sx={{
                    bgcolor: "#EEF2FF",
                    color: "#4F46E5",
                  }}
                >
                  <Work />
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  Interview Setup
                </Typography>

              </Box>
                            <TextField
                select
                fullWidth
                label="Job Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                sx={{ mb: 3 }}
              >
                {roles.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                label="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                sx={{ mb: 3 }}
              >
                {difficulties.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  mb: 3,
                }}
              >
                <CardContent>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >
                    <Timer color="primary" />

                    <Typography fontWeight="bold">
                      Interview Details
                    </Typography>
                  </Box>

                  <Typography>
                    • 10 Technical Questions
                  </Typography>

                  <Typography>
                    • Duration: 30 Minutes
                  </Typography>

                  <Typography>
                    • AI Evaluation & Feedback
                  </Typography>

                  <Typography>
                    • Final Performance Report
                  </Typography>

                </CardContent>

              </Card>

              <Button
                fullWidth
                size="large"
                variant="contained"
                startIcon={<PlayArrow />}
                sx={{
                  borderRadius: 3,
                  py: 1.5,
                }}
              >
                Start Interview
              </Button>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >

          <Card
            sx={{
              borderRadius: 5,
              minHeight: 650,
            }}
          >

            <CardContent>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >

                <Box>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    Interview Progress
                  </Typography>

                  <Typography color="text.secondary">
                    Question 1 of 10
                  </Typography>

                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#EEF2FF",
                    color: "#4F46E5",
                    width: 56,
                    height: 56,
                  }}
                >
                  <Psychology />
                </Avatar>

              </Box>

              <LinearProgress
                variant="determinate"
                value={10}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  mb: 4,
                }}
              />
                            <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  bgcolor: "#F8FAFC",
                  mb: 4,
                }}
              >

                <CardContent>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    mb={2}
                  >

                    <Avatar
                      sx={{
                        bgcolor: "#4F46E5",
                      }}
                    >
                      <SmartToy />
                    </Avatar>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                    >
                      AI Interviewer
                    </Typography>

                  </Box>

                  <Typography
                    sx={{
                      lineHeight: 2,
                    }}
                  >
                    Explain the difference between REST API and GraphQL.
                    When would you choose one over the other in a real-world
                    project?
                  </Typography>

                </CardContent>

              </Card>

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                Your Answer
              </Typography>

              <TextField
                fullWidth
                multiline
                minRows={8}
                placeholder="Type your answer here..."
              />

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

                <Button
                  variant="outlined"
                  color="error"
                >
                  End Interview
                </Button>

                <Button
                  variant="contained"
                  size="large"
                >
                  Submit Answer
                </Button>

              </Box>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  mt: 5,
                }}
              >

                <CardContent>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mb={2}
                  >
                    Interview Tips
                  </Typography>

                  <Typography>
                    ✓ Answer with clear explanations and real-world examples.
                  </Typography>

                  <Typography mt={1}>
                    ✓ Mention projects where you've used the technology.
                  </Typography>

                  <Typography mt={1}>
                    ✓ Keep your answers structured and concise.
                  </Typography>

                  <Typography mt={1}>
                    ✓ Explain why you chose a particular approach instead of only describing what it does.
                  </Typography>

                </CardContent>

              </Card>
                            <Card
                sx={{
                  mt: 5,
                  borderRadius: 5,
                  bgcolor: "#F8FAFC",
                }}
              >

                <CardContent>

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    Interview Report Preview
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

                      <Card
                        variant="outlined"
                        sx={{
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >

                        <CardContent>

                          <Typography
                            color="text.secondary"
                          >
                            Overall Score
                          </Typography>

                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="primary"
                          >
                            91%
                          </Typography>

                        </CardContent>

                      </Card>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Card
                        variant="outlined"
                        sx={{
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >

                        <CardContent>

                          <Typography
                            color="text.secondary"
                          >
                            Technical
                          </Typography>

                          <Typography
                            variant="h4"
                            fontWeight="bold"
                          >
                            93%
                          </Typography>

                        </CardContent>

                      </Card>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Card
                        variant="outlined"
                        sx={{
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >

                        <CardContent>

                          <Typography
                            color="text.secondary"
                          >
                            Communication
                          </Typography>

                          <Typography
                            variant="h4"
                            fontWeight="bold"
                          >
                            88%
                          </Typography>

                        </CardContent>

                      </Card>

                    </Grid>

                    <Grid
                      size={{
                        xs: 12,
                        md: 3,
                      }}
                    >

                      <Card
                        variant="outlined"
                        sx={{
                          borderRadius: 4,
                          textAlign: "center",
                        }}
                      >

                        <CardContent>

                          <Typography
                            color="text.secondary"
                          >
                            Confidence
                          </Typography>

                          <Typography
                            variant="h4"
                            fontWeight="bold"
                          >
                            90%
                          </Typography>

                        </CardContent>

                      </Card>

                    </Grid>

                  </Grid>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    mt={5}
                    mb={2}
                  >
                    AI Feedback
                  </Typography>

                  <Typography>
                    ✅ Strong understanding of backend development concepts.
                  </Typography>

                  <Typography mt={1}>
                    ✅ Good explanation of REST APIs with practical examples.
                  </Typography>

                  <Typography mt={1}>
                    💡 Improve your explanation of GraphQL by discussing caching, subscriptions, and performance trade-offs.
                  </Typography>

                  <Typography mt={1}>
                    💡 Include examples from your own projects whenever possible to strengthen your answers.
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 4,
                    }}
                  >

                    <Button
                      variant="contained"
                    >
                      Download Report
                    </Button>

                  </Box>

                </CardContent>

              </Card>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </DashboardLayout>

  );

};

export default AIMockInterview;