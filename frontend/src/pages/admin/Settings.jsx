import AdminLayout from "../../layouts/AdminLayout";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const Settings = () => {

  return (

    <AdminLayout>

      <Typography
        variant="h3"
        fontWeight="bold"
      >
        Settings
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        Manage administrator account and platform settings.
      </Typography>

      <Grid
        container
        spacing={3}
      >

        <Grid
          size={{
            xs:12,
            md:6,
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
                Admin Profile
              </Typography>

              <TextField
                fullWidth
                label="Full Name"
                defaultValue="Administrator"
                sx={{ mb:3 }}
              />

              <TextField
                fullWidth
                label="Email"
                defaultValue="admin@nexthire.com"
                sx={{ mb:3 }}
              />

              <Button
                variant="contained"
              >
                Save Changes
              </Button>

            </CardContent>

          </Card>

        </Grid>

        <Grid
          size={{
            xs:12,
            md:6,
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
                Security
              </Typography>

              <TextField
                fullWidth
                type="password"
                label="New Password"
                sx={{ mb:3 }}
              />

              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                sx={{ mb:3 }}
              />

              <Button
                variant="contained"
                color="error"
              >
                Update Password
              </Button>

            </CardContent>

          </Card>

        </Grid>        <Grid
          size={{
            xs: 12,
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
                Platform Information
              </Typography>

              <Typography mb={2}>
                <strong>Platform:</strong> NextHire
              </Typography>

              <Typography mb={2}>
                <strong>Version:</strong> 1.0.0
              </Typography>

              <Typography mb={2}>
                <strong>Framework:</strong> React + Django REST Framework
              </Typography>

              <Typography mb={2}>
                <strong>Database:</strong> MySQL
              </Typography>

              <Typography mb={2}>
                <strong>AI:</strong> Gemini API
              </Typography>

              <Typography>
                <strong>Status:</strong> 🟢 Operational
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </AdminLayout>

  );

};

export default Settings;