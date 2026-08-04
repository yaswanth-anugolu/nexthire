import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import api from "../../api/axios";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Alert,
  CircularProgress,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";

const Resume = () => {
  const [resume, setResume] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await api.get("resumes/");
      setResume(response.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setResume(null);
      } else {
        setError("Unable to load resume.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a PDF or DOCX file.");
      return;
    }

    try {
      setUploading(true);
      setError("");
      setSuccess("");

      const formData = new FormData();
      formData.append("resume_file", selectedFile);

      let response;

      if (resume) {
        response = await api.patch("resumes/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await api.post("resumes/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      setResume(response.data);
      setSelectedFile(null);
      setSuccess(
        resume ? "Resume replaced successfully." : "Resume uploaded successfully."
      );

      fetchResume();
    } catch (err) {
      console.log(err);
      setError("Resume upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete your resume?")) {
      return;
    }

    try {
      await api.delete("resumes/");
      setResume(null);
      setSelectedFile(null);
      setSuccess("Resume deleted successfully.");
    } catch {
      setError("Unable to delete resume.");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <CircularProgress />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Resume
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          {success}
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              {resume ? (
                <Stack spacing={3}>
                  <Typography variant="h5" fontWeight="bold">
                    Current Resume
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <DescriptionIcon color="primary" />
                    <Button href={resume.resume_file} target="_blank">
                      View Resume
                    </Button>
                  </Stack>

                  <Divider />

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography fontWeight="bold">Version</Typography>
                      <Typography>{resume.version}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography fontWeight="bold">ATS Score</Typography>
                      <Typography>{resume.ats_score}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography fontWeight="bold">Parsing Status</Typography>
                      <Chip
                        label={resume.parsing_status}
                        color={
                          resume.parsing_status === "COMPLETED"
                            ? "success"
                            : resume.parsing_status === "FAILED"
                            ? "error"
                            : "warning"
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>
                      <Typography fontWeight="bold">Uploaded</Typography>
                      <Typography>
                        {new Date(resume.uploaded_at).toLocaleString()}
                      </Typography>
                    </Grid>
                  </Grid>

                  {resume.extracted_text && (
                    <>
                      <Divider />

                      <Typography variant="h6" fontWeight="bold">
                        Extracted Resume Text
                      </Typography>

                      <Card variant="outlined">
                        <CardContent>
                          <Typography whiteSpace="pre-wrap">
                            {resume.extracted_text}
                          </Typography>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </Stack>
              ) : (
                <Typography color="text.secondary">
                  No resume uploaded yet.
                </Typography>
              )}
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadFileIcon />}
              >
                Choose Resume
                <input
                  hidden
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </Button>

              {selectedFile && (
                <Typography mt={2}>{selectedFile.name}</Typography>
              )}
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : resume ? (
                    "Replace Resume"
                  ) : (
                    "Upload Resume"
                  )}
                </Button>

                {resume && (
                  <Button
                    color="error"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={handleDelete}
                  >
                    Delete Resume
                  </Button>
                )}
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Resume;