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

const Companies = () => {

  const [search, setSearch] = useState("");

  const companies = [
    {
      id: 1,
      company: "TechNova Solutions",
      recruiter: "Rahul Sharma",
      jobs: 18,
      status: "Active",
    },
    {
      id: 2,
      company: "VisionAI Labs",
      recruiter: "Ananya Gupta",
      jobs: 12,
      status: "Pending",
    },
    {
      id: 3,
      company: "CloudSphere Pvt Ltd",
      recruiter: "Rakesh Kumar",
      jobs: 27,
      status: "Active",
    },
    {
      id: 4,
      company: "NextGen Technologies",
      recruiter: "Sanjay Patel",
      jobs: 9,
      status: "Disabled",
    },
  ];

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Companies
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage all registered companies.
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
            mb={3}
            gap={2}
            flexWrap="wrap"
          >

            <TextField
              label="Search Company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                minWidth: 300,
              }}
            />

            <Button
              variant="contained"
            >
              Add Company
            </Button>

          </Box>

          <TableContainer>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>
                    Company
                  </TableCell>

                  <TableCell>
                    Recruiter
                  </TableCell>

                  <TableCell>
                    Jobs
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                  <TableCell align="center">
                    Actions
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>                {companies
                  .filter((company) =>
                    company.company
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((company) => (

                    <TableRow
                      key={company.id}
                    >

                      <TableCell>
                        {company.company}
                      </TableCell>

                      <TableCell>
                        {company.recruiter}
                      </TableCell>

                      <TableCell>
                        {company.jobs}
                      </TableCell>

                      <TableCell>

                        <Chip
                          label={company.status}
                          color={
                            company.status === "Active"
                              ? "success"
                              : company.status === "Pending"
                              ? "warning"
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

                        {company.status === "Disabled" ? (

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
              Showing {companies.length} companies
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

export default Companies;