import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

const interviews = [
  {
    company: "Google",
    date: "Tomorrow • 10:00 AM",
  },
  {
    company: "Microsoft",
    date: "Friday • 2:30 PM",
  },
];

const UpcomingInterviews = () => {
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
          Upcoming Interviews
        </Typography>

        <Stack spacing={2}>
          {interviews.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography fontWeight="bold">
                  {item.company}
                </Typography>

                <Typography color="text.secondary">
                  {item.date}
                </Typography>
              </div>

              <Button variant="outlined">
                View
              </Button>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UpcomingInterviews;