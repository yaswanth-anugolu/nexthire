import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

const StatCard = ({ title, value, icon }) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              color="text.secondary"
              fontSize={15}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

          </Box>

          <Avatar
            sx={{
              bgcolor: "#EEF2FF",
              color: "#4F46E5",
              width: 60,
              height: 60,
            }}
          >
            {icon}
          </Avatar>

        </Box>

      </CardContent>
    </Card>
  );
};

export default StatCard;