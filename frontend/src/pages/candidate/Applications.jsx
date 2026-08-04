import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Applications = () => {
  return (
    <DashboardLayout>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Applications
      </Typography>

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6">
            Job Applications
          </Typography>

          <Typography color="text.secondary" mt={2}>
            Your applications will be loaded from the backend.
          </Typography>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Applications;