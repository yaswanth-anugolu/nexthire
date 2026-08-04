import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";

const ResumeProgress = () => {
  const progress = 78;

  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
        boxShadow: "0 8px 24px rgba(0,0,0,.08)",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
        >
          Resume Completion
        </Typography>

        <Typography
          color="text.secondary"
          mb={2}
        >
          Your profile is {progress}% complete
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 12,
            borderRadius: 10,
          }}
        />

        <Box mt={3}>
          <Typography color="text.secondary">
            ✔ Personal Information
          </Typography>

          <Typography color="text.secondary">
            ✔ Education
          </Typography>

          <Typography color="text.secondary">
            ✔ Skills
          </Typography>

          <Typography color="error">
            ✖ Experience
          </Typography>

          <Typography color="error">
            ✖ Certifications
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResumeProgress;