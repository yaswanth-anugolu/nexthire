import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  color,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
        },
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
              variant="body2"
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

            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
            >
              {subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatCard;