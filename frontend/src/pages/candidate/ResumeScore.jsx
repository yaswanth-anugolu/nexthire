import { useState, useEffect } from "react";
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
  LinearProgress,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

const ResumeScore = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [scoreData, setScoreData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingScore, setFetchingScore] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLatestScore();
  }, []);

  const fetchLatestScore = async () => {
    try {
      setFetchingScore(true);
      const res = await api.get("screening/scores/latest/");
      setScoreData(res.data);
    } catch {
      // No previous score found or first scan
    } finally {
      setFetchingScore(false);
    }
  };

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      setError("Please paste a job description to analyze.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await api.post("screening/analyze-resume/", {
        job_description: jobDescription,
      });

      setScoreData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to analyze resume. Make sure your resume is uploaded in the Resume section."
      );
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "success";
    if (score >= 50) return "warning";
    return "error";
  };

  return (
    <DashboardLayout>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Resume Score
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {/* Left Column: Job Description Input */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Target Job Description
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={8}
                label="Job Description"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                sx={{ mb: 3 }}
              />

              <Button
                variant="contained"
                size="large"
                onClick={handleAnalyze}
                disabled={loading}
                sx={{
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  bgcolor: "#4F46E5",
                  "&:hover": { bgcolor: "#4338CA" },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Analyze Match"
                )}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Score & Keyword Analysis */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                AI Analysis Results
              </Typography>

              {fetchingScore ? (
                <Box textAlign="center" py={4}>
                  <CircularProgress />
                </Box>
              ) : scoreData ? (
                <Box>
                  <Box textAlign="center" my={3}>
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      color={`${getScoreColor(scoreData.overall_score || scoreData.score || 0)}.main`}
                    >
                      {scoreData.overall_score || scoreData.score || 0}%
                    </Typography>
                    <Typography color="text.secondary" mt={1}>
                      Overall ATS Match Score
                    </Typography>
                    <Box mt={2}>
                      <LinearProgress
                        variant="determinate"
                        value={scoreData.overall_score || scoreData.score || 0}
                        color={getScoreColor(scoreData.overall_score || scoreData.score || 0)}
                        sx={{ height: 10, borderRadius: 5 }}
                      />
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {scoreData.matching_keywords && (
                    <Box mb={2}>
                      <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                        Matched Keywords:
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {scoreData.matching_keywords.map((kw, idx) => (
                          <Chip key={idx} label={kw} color="success" size="small" />
                        ))}
                      </Stack>
                    </Box>
                  )}

                  {scoreData.missing_keywords && (
                    <Box mb={2}>
                      <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                        Missing Keywords:
                      </Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {scoreData.missing_keywords.map((kw, idx) => (
                          <Chip key={idx} label={kw} color="warning" size="small" />
                        ))}
                      </Stack>
                    </Box>
                  )}

                  {scoreData.recommendations && (
                    <Box mt={2}>
                      <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                        Suggestions:
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "pre-line" }}>
                        {scoreData.recommendations}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ) : (
                <Typography color="text.secondary" mt={2}>
                  Your AI-generated resume score will appear here after analysis.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default ResumeScore;