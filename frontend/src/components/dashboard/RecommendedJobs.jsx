import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";

const jobs = [
  {
    company: "Google",
    role: "AI Engineer",
  },
  {
    company: "Amazon",
    role: "Python Developer",
  },
  {
    company: "Microsoft",
    role: "Backend Engineer",
  },
];

const RecommendedJobs = () => {
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
          Recommended Jobs
        </Typography>

        <Stack spacing={2}>
          {jobs.map((job, index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography fontWeight="bold">
                  {job.role}
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  {job.company}
                </Typography>
              </div>

              <Button
                variant="contained"
              >
                Apply
              </Button>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default RecommendedJobs;