import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Jobs = () => {
  return (
    <DashboardLayout>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Jobs
      </Typography>

      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6">
            Available Jobs
          </Typography>

          <Typography color="text.secondary" mt={2}>
            Real jobs from the backend will appear here.
          </Typography>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Jobs;