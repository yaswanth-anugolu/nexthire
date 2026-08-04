import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "#111827",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          fontWeight="bold"
        >
          Candidate Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Avatar>
          Y
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;