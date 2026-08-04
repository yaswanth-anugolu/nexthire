import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

const applications = [
  {
    company: "Google",
    role: "AI Engineer",
    status: "Shortlisted",
  },
  {
    company: "Amazon",
    role: "Python Developer",
    status: "Under Review",
  },
  {
    company: "Microsoft",
    role: "Backend Engineer",
    status: "Applied",
  },
];

const RecentApplications = () => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Recent Applications
        </Typography>

        <Stack spacing={2}>
          {applications.map((app, index) => (
            <div key={index}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <div>
                  <Typography fontWeight="bold">
                    {app.role}
                  </Typography>

                  <Typography color="text.secondary">
                    {app.company}
                  </Typography>
                </div>

                <Chip
                  label={app.status}
                  color="primary"
                />
              </Stack>

              {index !== applications.length - 1 && (
                <Divider sx={{ mt: 2 }} />
              )}
            </div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RecentApplications;