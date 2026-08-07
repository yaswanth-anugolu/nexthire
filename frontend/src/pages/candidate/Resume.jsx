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
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material";

import {
  Description,
  CloudUpload,
  CheckCircle,
} from "@mui/icons-material";

const dummyResume = {
  fileName: "Yaswanth_Resume.pdf",
  uploadedOn: "06 Aug 2026",
  score: 87,
  uploaded: true,
};

const Resume = () => {

  const [resume] = useState(dummyResume);

  return (

    <DashboardLayout>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >

        <Box>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Resume
          </Typography>

          <Typography
            color="text.secondary"
            mt={1}
          >
            Upload, manage and improve your resume for better job matches.
          </Typography>

        </Box>

        <Button
          variant="contained"
          size="large"
          startIcon={<CloudUpload />}
          sx={{
            borderRadius: 3,
            px: 4,
            py: 1.5,
          }}
        >
          Upload Resume
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
                  mb: 2,
                  bgcolor: "#EEF2FF",
                }}
              >
                <Description
                  sx={{
                    color: "#4F46E5",
                    fontSize: 50,
                  }}
                />
              </Avatar>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                Resume Status
              </Typography>

              <Chip
                color="success"
                icon={<CheckCircle />}
                label="Resume Uploaded"
                sx={{ mt: 2 }}
              />

              <Typography
                mt={4}
                color="text.secondary"
              >
                ATS Resume Score
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
              >
                {resume.score}%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={resume.score}
                sx={{
                  mt: 2,
                  height: 10,
                  borderRadius: 5,
                }}
              />

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
                mb={3}
              >
                Resume Information
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
                    File Name
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    {resume.fileName}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Uploaded On
                  </Typography>

                  <Typography
                    fontWeight="bold"
                    mb={3}
                  >
                    {resume.uploadedOn}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    Resume Status
                  </Typography>

                  <Chip
                    color="success"
                    label="Ready for Applications"
                    sx={{ mt: 1 }}
                  />

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
                    AI Resume Analysis
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="success.main"
                    mt={1}
                  >
                    Excellent
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={resume.score}
                    sx={{
                      mt: 2,
                      height: 10,
                      borderRadius: 5,
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    mt={2}
                  >
                    Your resume is ATS friendly and ready to apply for jobs. Improve keywords and quantified achievements to reach a higher score.
                  </Typography>

                </Grid>

              </Grid>

              <Typography
                variant="h5"
                fontWeight="bold"
                mt={5}
                mb={3}
              >
                Resume Preview
              </Typography>

              <Card
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  p: 4,
                  bgcolor: "#F8FAFC",
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                  }}
                >

                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "#EEF2FF",
                    }}
                  >

                    <Description
                      sx={{
                        color: "#4F46E5",
                        fontSize: 45,
                      }}
                    />

                  </Avatar>

                  <Box>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                    >
                      {resume.fileName}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      mt={1}
                    >
                      PDF Document
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      Uploaded on {resume.uploadedOn}
                    </Typography>

                  </Box>

                </Box>

              </Card>              <Typography
                variant="h5"
                fontWeight="bold"
                mt={5}
                mb={3}
              >
                Quick Actions
              </Typography>

              <Grid
                container
                spacing={2}
              >

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                >

                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<Description />}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                    }}
                  >
                    View Resume
                  </Button>

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                >

                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                    }}
                  >
                    Download
                  </Button>

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                >

                  <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<CloudUpload />}
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                    }}
                  >
                    Replace Resume
                  </Button>

                </Grid>

                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                >

                  <Button
                    fullWidth
                    color="error"
                    variant="contained"
                    sx={{
                      py: 1.5,
                      borderRadius: 3,
                    }}
                  >
                    Delete
                  </Button>

                </Grid>

              </Grid>

              <Grid
                container
                spacing={3}
                sx={{ mt: 4 }}
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
                        mb={2}
                      >
                        Supported Formats
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={1}
                        mb={3}
                      >

                        <Chip
                          label="PDF"
                          color="primary"
                        />

                        <Chip
                          label="DOCX"
                          color="success"
                        />

                      </Stack>

                      <Typography
                        color="text.secondary"
                      >
                        Maximum File Size
                      </Typography>

                      <Typography
                        fontWeight="bold"
                      >
                        5 MB
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
                        mb={2}
                      >
                        ATS Resume Tips
                      </Typography>

                      <Stack spacing={1.5}>

                        <Typography>
                          ✓ Use an ATS-friendly resume format.
                        </Typography>

                        <Typography>
                          ✓ Keep your resume concise (1–2 pages).
                        </Typography>

                        <Typography>
                          ✓ Add measurable achievements.
                        </Typography>

                        <Typography>
                          ✓ Include relevant technical skills.
                        </Typography>

                        <Typography>
                          ✓ Update your resume regularly.
                        </Typography>

                      </Stack>

                    </CardContent>

                  </Card>

                </Grid>

              </Grid>
                          </CardContent>

          </Card>

        </Grid>

      </Grid>

    </DashboardLayout>

  );

};

export default Resume;