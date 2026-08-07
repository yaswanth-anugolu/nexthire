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
} from "@mui/material";

import {
  SmartToy,
  Description,
  TrendingUp,
  Psychology,
  Work,
} from "@mui/icons-material";

const quickActions = [
  {
    title: "Resume Review",
    description: "Get AI feedback on your resume.",
    icon: <Description />,
  },
  {
    title: "Career Roadmap",
    description: "Plan your learning path.",
    icon: <TrendingUp />,
  },
  {
    title: "Interview Tips",
    description: "Prepare for technical interviews.",
    icon: <Psychology />,
  },
  {
    title: "Job Guidance",
    description: "Discover roles that match your skills.",
    icon: <Work />,
  },
];

const CareerAssistant = () => {

  const [messages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm your AI Career Assistant. Ask me anything about resumes, interviews, jobs, or career growth.",
    },
  ]);

  return (

    <DashboardLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        AI Career Assistant
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
        mb={4}
      >
        Your personal AI mentor for career guidance, interview preparation, and resume improvement.
      </Typography>

      <Grid
        container
        spacing={3}
        mb={4}
      >

        {quickActions.map((item) => (

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
                height: "100%",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 8,
                },
              }}
            >

              <CardContent>

                <Avatar
                  sx={{
                    bgcolor: "#EEF2FF",
                    color: "#4F46E5",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                >
                  {item.title}
                </Typography>

                <Typography
                  color="text.secondary"
                  mt={1}
                >
                  {item.description}
                </Typography>

                <Button
                  variant="text"
                  sx={{ mt: 2 }}
                >
                  Start
                </Button>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

      <Card
        sx={{
          borderRadius: 5,
        }}
      >

        <CardContent>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >

            <Avatar
              sx={{
                bgcolor: "#4F46E5",
              }}
            >
              <SmartToy />
            </Avatar>

            <Box>

              <Typography
                variant="h6"
                fontWeight="bold"
              >
                AI Conversation
              </Typography>

              <Typography
                color="text.secondary"
              >
                Ask anything about your career.
              </Typography>

            </Box>

          </Box>
                    <Box
            sx={{
              height: 450,
              overflowY: "auto",
              bgcolor: "#F8FAFC",
              borderRadius: 4,
              p: 3,
              mb: 3,
            }}
          >

            {messages.map((message, index) => (

              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    message.role === "assistant"
                      ? "flex-start"
                      : "flex-end",
                  mb: 3,
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    maxWidth: "80%",
                    flexDirection:
                      message.role === "assistant"
                        ? "row"
                        : "row-reverse",
                  }}
                >

                  <Avatar
                    sx={{
                      bgcolor:
                        message.role === "assistant"
                          ? "#4F46E5"
                          : "#10B981",
                    }}
                  >

                    {message.role === "assistant"
                      ? <SmartToy />
                      : "Y"}

                  </Avatar>

                  <Card
                    sx={{
                      borderRadius: 4,
                      bgcolor:
                        message.role === "assistant"
                          ? "white"
                          : "#4F46E5",
                      color:
                        message.role === "assistant"
                          ? "inherit"
                          : "white",
                      boxShadow: 2,
                    }}
                  >

                    <CardContent>

                      <Typography
                        sx={{
                          whiteSpace: "pre-wrap",
                          lineHeight: 1.8,
                        }}
                      >
                        {message.text}
                      </Typography>

                    </CardContent>

                  </Card>

                </Box>

              </Box>

            ))}

          </Box>

          <Typography
            variant="h6"
            fontWeight="bold"
            mb={2}
          >
            Suggested Questions
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mb: 4,
            }}
          >

            <Button variant="outlined">
              Improve my resume
            </Button>

            <Button variant="outlined">
              Prepare me for interviews
            </Button>

            <Button variant="outlined">
              Create a learning roadmap
            </Button>

            <Button variant="outlined">
              Best projects for AI jobs
            </Button>

          </Box>
                    <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-end",
              flexWrap: {
                xs: "wrap",
                md: "nowrap",
              },
            }}
          >

            <TextField
              fullWidth
              multiline
              minRows={2}
              maxRows={5}
              placeholder="Ask anything about your career..."
            />

            <Button
              variant="contained"
              size="large"
              sx={{
                minWidth: 150,
                height: 56,
                borderRadius: 3,
              }}
            >
              Send
            </Button>

          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 3,
              flexWrap: "wrap",
              gap: 2,
            }}
          >

            <Typography
              variant="body2"
              color="text.secondary"
            >
              AI can help with resumes, interview preparation,
              career planning, salary guidance, roadmaps, and
              project ideas.
            </Typography>

            <Button
              color="error"
              variant="outlined"
            >
              Clear Chat
            </Button>

          </Box>

        </CardContent>

      </Card>
          </DashboardLayout>

  );

};

export default CareerAssistant;