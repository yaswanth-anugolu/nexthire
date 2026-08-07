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

const Users = () => {

  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "Yaswanth Anugolu",
      email: "yaswanth@gmail.com",
      score: 92,
      applications: 14,
      status: "Active",
    },
    {
      id: 2,
      name: "Akash Kumar",
      email: "akash@gmail.com",
      score: 85,
      applications: 9,
      status: "Disabled",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      score: 95,
      applications: 21,
      status: "Active",
    },
    {
      id: 4,
      name: "Rohit Reddy",
      email: "rohit@gmail.com",
      score: 88,
      applications: 12,
      status: "Active",
    },
  ];

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Users
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage all candidate accounts.
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
              label="Search User"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                minWidth: 320,
              }}
            />

            <Button
              variant="contained"
            >
              Add User
            </Button>

          </Box>

          <TableContainer>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>
                    Candidate
                  </TableCell>

                  <TableCell>
                    Email
                  </TableCell>

                  <TableCell>
                    Resume Score
                  </TableCell>

                  <TableCell>
                    Applications
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                  <TableCell align="center">
                    Actions
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>                {users
                  .filter((user) =>
                    user.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((user) => (

                    <TableRow
                      key={user.id}
                    >

                      <TableCell>
                        {user.name}
                      </TableCell>

                      <TableCell>
                        {user.email}
                      </TableCell>

                      <TableCell>
                        {user.score}%
                      </TableCell>

                      <TableCell>
                        {user.applications}
                      </TableCell>

                      <TableCell>

                        <Chip
                          label={user.status}
                          color={
                            user.status === "Active"
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

                        {user.status === "Disabled" ? (

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
              Showing {users.length} users
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

export default Users;