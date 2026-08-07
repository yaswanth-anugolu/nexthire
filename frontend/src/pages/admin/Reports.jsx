import { useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";

const Reports = () => {

  const [reportType, setReportType] = useState("Daily");

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Reports Center
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Generate, preview and export reports for the NextHire platform.
      </Typography>

      <Grid
        container
        spacing={3}
      >

        <Grid
          size={{
            xs:12,
            md:8,
          }}
        >

          <Card
            sx={{
              borderRadius:4,
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Generate Report
              </Typography>

              <TextField
                select
                fullWidth
                label="Report Type"
                value={reportType}
                onChange={(e)=>setReportType(e.target.value)}
                sx={{mb:3}}
              >

                <MenuItem value="Daily">
                  Daily Report
                </MenuItem>

                <MenuItem value="Weekly">
                  Weekly Report
                </MenuItem>

                <MenuItem value="Monthly">
                  Monthly Report
                </MenuItem>

                <MenuItem value="AI">
                  AI Analytics Report
                </MenuItem>

              </TextField>

              <Grid
                container
                spacing={2}
              >

                <Grid
                  size={{
                    xs:12,
                    md:6,
                  }}
                >

                  <TextField
                    fullWidth
                    type="date"
                    label="From"
                    InputLabelProps={{
                      shrink:true,
                    }}
                  />

                </Grid>

                <Grid
                  size={{
                    xs:12,
                    md:6,
                  }}
                >

                  <TextField
                    fullWidth
                    type="date"
                    label="To"
                    InputLabelProps={{
                      shrink:true,
                    }}
                  />

                </Grid>

              </Grid>

              <Box
                display="flex"
                gap={2}
                mt={4}
                flexWrap="wrap"
              >

                <Button
                  variant="contained"
                >
                  Generate Report
                </Button>

                <Button
                  variant="outlined"
                >
                  Export PDF
                </Button>

                <Button
                  variant="outlined"
                >
                  Export CSV
                </Button>

              </Box>

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
              height: "100%",
            }}
          >

            <CardContent>

              <Typography
                variant="h5"
                fontWeight="bold"
                mb={3}
              >
                Recent Reports
              </Typography>

              <Typography mb={2}>
                📄 Daily Report - Today
              </Typography>

              <Typography mb={2}>
                📊 Weekly Report
              </Typography>

              <Typography mb={2}>
                📈 Monthly Report
              </Typography>

              <Typography>
                🤖 AI Analytics Report
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 7,
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
                Report Preview
              </Typography>

              <Typography mb={2}>
                👥 Total Users : <strong>1,248</strong>
              </Typography>

              <Typography mb={2}>
                🏢 Active Companies : <strong>84</strong>
              </Typography>

              <Typography mb={2}>
                💼 Active Jobs : <strong>462</strong>
              </Typography>

              <Typography mb={2}>
                📄 Applications : <strong>3,846</strong>
              </Typography>

              <Typography mb={2}>
                🤖 AI Interviews : <strong>517</strong>
              </Typography>

              <Typography>
                ⭐ Average Resume Score : <strong>86%</strong>
              </Typography>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 5,
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
                Activity Log
              </Typography>

              <Typography mb={2}>
                ✅ Admin generated Daily Report
              </Typography>

              <Typography mb={2}>
                📤 Monthly Report exported as PDF
              </Typography>

              <Typography mb={2}>
                📊 Weekly Report downloaded
              </Typography>

              <Typography>
                🤖 AI Analytics generated successfully
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </AdminLayout>

  );

};

export default Reports;