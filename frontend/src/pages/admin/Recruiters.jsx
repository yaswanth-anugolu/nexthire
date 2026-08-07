import { useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Recruiters = () => {

  const [search, setSearch] = useState("");

  const recruiters = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechNova Solutions",
      email: "rahul@technova.com",
      jobs: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      company: "VisionAI Labs",
      email: "ananya@visionai.com",
      jobs: 12,
      status: "Active",
    },
    {
      id: 3,
      name: "Rakesh Kumar",
      company: "CloudSphere Pvt Ltd",
      email: "rakesh@cloudsphere.com",
      jobs: 25,
      status: "Disabled",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      company: "NextHire Technologies",
      email: "sneha@nexthire.com",
      jobs: 8,
      status: "Active",
    },
  ];

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Recruiters
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage all recruiters on the platform.
      </Typography>

      <Card
        sx={{
          borderRadius: 4,
        }}
      >

        <CardContent>

          <Box
            display="flex"
            justifyContent="space-between"
            gap={2}
            mb={3}
            flexWrap="wrap"
          >

            <TextField
              label="Search Recruiter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                minWidth: 320,
              }}
            />

            <Button variant="contained">
              Add Recruiter
            </Button>

          </Box>

          <TableContainer>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>Recruiter</TableCell>

                  <TableCell>Company</TableCell>

                  <TableCell>Email</TableCell>

                  <TableCell>Jobs Posted</TableCell>

                  <TableCell>Status</TableCell>

                  <TableCell align="center">
                    Actions
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>                {recruiters
                  .filter((recruiter) =>
                    recruiter.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((recruiter) => (

                    <TableRow
                      key={recruiter.id}
                    >

                      <TableCell>
                        {recruiter.name}
                      </TableCell>

                      <TableCell>
                        {recruiter.company}
                      </TableCell>

                      <TableCell>
                        {recruiter.email}
                      </TableCell>

                      <TableCell>
                        {recruiter.jobs}
                      </TableCell>

                      <TableCell>

                        <Chip
                          label={recruiter.status}
                          color={
                            recruiter.status === "Active"
                              ? "success"
                              : "error"
                          }
                        />

                      </TableCell>

                      <TableCell
                        align="center"
                      >

                        <Button
                          size="small"
                          variant="outlined"
                          sx={{
                            mr: 1,
                          }}
                        >
                          View
                        </Button>

                        {recruiter.status === "Disabled" ? (

                          <Button
                            size="small"
                            color="success"
                            variant="contained"
                          >
                            Enable
                          </Button>

                        ) : (

                          <Button
                            size="small"
                            color="error"
                            variant="contained"
                          >
                            Disable
                          </Button>

                        )}

                      </TableCell>

                    </TableRow>

                  ))}              </TableBody>

            </Table>

          </TableContainer>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={3}
            flexWrap="wrap"
            gap={2}
          >

            <Typography
              color="text.secondary"
            >
              Showing {recruiters.length} recruiters
            </Typography>

            <Box
              display="flex"
              gap={2}
            >

              <Button
                variant="outlined"
                disabled
              >
                Previous
              </Button>

              <Button
                variant="contained"
              >
                Next
              </Button>

            </Box>

          </Box>

        </CardContent>

      </Card>      </AdminLayout>

  );

};

export default Recruiters;