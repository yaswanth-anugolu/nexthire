import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import api from "../../api/axios";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Box,
  Stack,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";

const CareerAssistant = () => {
  const [tabValue, setTabValue] = useState(0);

  // Chat Assistant State
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatLoading, setChatLoading] = useState(false);

  // Mock Interview State
  const [targetRole, setTargetRole] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [interviewLoading, setInterviewLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const [error, setError] = useState("");

  // Handle Career Assistant Prompt
  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMsg = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    const currentPrompt = prompt;
    setPrompt("");
    setChatLoading(true);

    try {
      const response = await api.post("ai/career-advice/", {
        prompt: currentPrompt,
      });

      const aiMsg = {
        sender: "ai",
        text: response.data.response || response.data.message || "Advice generated successfully.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setError("Unable to get advice from Career Assistant.");
    } finally {
      setChatLoading(false);
    }
  };

  // Start AI Mock Interview
  const handleStartInterview = async () => {
    if (!targetRole.trim()) {
      setError("Please specify a target role for the interview.");
      return;
    }

    try {
      setInterviewLoading(true);
      setError("");

      const res = await api.post("interviews/generate-questions/", {
        target_role: targetRole,
      });

      setQuestions(res.data.questions || []);
      setInterviewStarted(true);
    } catch {
      setError("Unable to generate interview questions.");
    } finally {
      setInterviewLoading(false);
    }
  };

  // Submit Mock Interview Answers
  const handleSubmitInterview = async () => {
    try {
      setInterviewLoading(true);
      setError("");

      const res = await api.post("interviews/evaluate/", {
        role: targetRole,
        responses: questions.map((q, idx) => ({
          question: q,
          answer: userAnswers[idx] || "",
        })),
      });

      setFeedback(res.data);
    } catch {
      setError("Unable to evaluate interview answers.");
    } finally {
      setInterviewLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Career Assistant & AI Interview
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, val) => setTabValue(val)}>
          <Tab label="Career Guidance Chat" />
          <Tab label="AI Mock Interview" />
        </Tabs>
      </Box>

      {/* TAB 1: AI Career Chat */}
      {tabValue === 0 && (
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Ask Career Questions
            </Typography>

            <Box
              sx={{
                minHeight: 300,
                maxHeight: 450,
                overflowY: "auto",
                mb: 3,
                p: 2,
                bgcolor: "#F9FAFB",
                borderRadius: 2,
              }}
            >
              {messages.length === 0 ? (
                <Typography color="text.secondary">
                  Ask career questions, get interview tips, and receive AI guidance here.
                </Typography>
              ) : (
                <Stack spacing={2}>
                  {messages.map((msg, index) => (
                    <Box
                      key={index}
                      sx={{
                        alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                        maxWidth: "80%",
                      }}
                    >
                      <Paper
                        sx={{
                          p: 2,
                          bgcolor: msg.sender === "user" ? "#4F46E5" : "#E5E7EB",
                          color: msg.sender === "user" ? "#FFF" : "#000",
                          borderRadius: 3,
                        }}
                      >
                        <Typography variant="body2">{msg.text}</Typography>
                      </Paper>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>

            <Grid container spacing={2}>
              <Grid size={{ xs: 10 }}>
                <TextField
                  fullWidth
                  placeholder="e.g. How do I transition from Frontend to Full Stack?"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendPrompt()}
                />
              </Grid>
              <Grid size={{ xs: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSendPrompt}
                  disabled={chatLoading}
                  sx={{ height: "100%", borderRadius: 3, bgcolor: "#4F46E5" }}
                >
                  {chatLoading ? <CircularProgress size={24} color="inherit" /> : "Send"}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {/* TAB 2: AI Mock Interview */}
      {tabValue === 1 && (
        <Card sx={{ borderRadius: 4 }}>
          <CardContent>
            {!interviewStarted ? (
              <Box>
                <Typography variant="h6" mb={2}>
                  Configure AI Mock Interview
                </Typography>
                <TextField
                  fullWidth
                  label="Target Job Role"
                  placeholder="e.g. Python Django Developer"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  sx={{ mb: 3 }}
                />
                <Button
                  variant="contained"
                  onClick={handleStartInterview}
                  disabled={interviewLoading}
                  sx={{ borderRadius: 3, px: 4, py: 1.5, bgcolor: "#4F46E5" }}
                >
                  {interviewLoading ? <CircularProgress size={24} color="inherit" /> : "Start Mock Interview"}
                </Button>
              </Box>
            ) : feedback ? (
              <Box>
                <Typography variant="h6" color="primary" mb={2}>
                  Interview Evaluation Feedback
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }} mb={3}>
                  {feedback.review || feedback.evaluation || "Feedback generated."}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setInterviewStarted(false);
                    setFeedback(null);
                  }}
                >
                  Start Another Session
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography variant="h6" mb={3}>
                  Mock Interview: {targetRole}
                </Typography>
                <Stack spacing={3} mb={3}>
                  {questions.map((q, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                        {idx + 1}. {q}
                      </Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Type your response..."
                        value={userAnswers[idx] || ""}
                        onChange={(e) =>
                          setUserAnswers({ ...userAnswers, [idx]: e.target.value })
                        }
                      />
                    </Box>
                  ))}
                </Stack>
                <Button
                  variant="contained"
                  onClick={handleSubmitInterview}
                  disabled={interviewLoading}
                  sx={{ borderRadius: 3, px: 4, py: 1.5, bgcolor: "#4F46E5" }}
                >
                  {interviewLoading ? <CircularProgress size={24} color="inherit" /> : "Submit Answers"}
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      )}
    </DashboardLayout>
  );
};

export default CareerAssistant;