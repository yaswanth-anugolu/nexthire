import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "background.default",
      }}
    >
      {/* Left Side */}

      <Box
        sx={{
          flex: 1,
          background:
            "linear-gradient(135deg,#6366F1 0%,#8B5CF6 45%,#22D3EE 100%)",
          color: "white",
          display: {
            xs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,.12)",
            top: -80,
            left: -80,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,.08)",
            bottom: -70,
            right: -70,
          }}
        />

        <Typography
          variant="h2"
          fontWeight={800}
          sx={{ zIndex: 2 }}
        >
          NextHire
        </Typography>

        <Typography
          variant="h5"
          mt={2}
          sx={{ zIndex: 2 }}
        >
          AI-Powered Hiring Platform
        </Typography>

        <Typography
          mt={5}
          textAlign="center"
          sx={{
            maxWidth: 430,
            lineHeight: 1.8,
            opacity: .9,
            zIndex: 2,
          }}
        >
          Join the next generation of AI-powered recruitment.
          <br />
          Smart Resume Screening
          <br />
          AI Mock Interviews
          <br />
          Intelligent Candidate Ranking
          <br />
          Career Assistant
        </Typography>
      </Box>

      {/* Right Side */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 480,
            p: 5,
            borderRadius: 5,
            boxShadow:
              "0 15px 40px rgba(15,23,42,.08)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Create Account
          </Typography>

          <Typography
            color="text.secondary"
            mb={3}
          >
            Join NextHire today.
          </Typography>

          <TextField
            label="Full Name"
            margin="normal"
          />

          <TextField
            label="Username"
            margin="normal"
          />

          <TextField
            label="Email"
            type="email"
            margin="normal"
          />

          <TextField
            select
            label="Role"
            margin="normal"
            defaultValue="candidate"
          >
            <MenuItem value="candidate">
              Candidate
            </MenuItem>

            <MenuItem value="recruiter">
              Recruiter
            </MenuItem>
          </TextField>

          <TextField
            label="Password"
            margin="normal"
            type={
              showPassword
                ? "text"
                : "password"
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                  >
                    {showPassword
                      ? <VisibilityOff />
                      : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Confirm Password"
            margin="normal"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    {showConfirmPassword
                      ? <VisibilityOff />
                      : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              mt: 4,
              py: 1.6,
              borderRadius: 3,
              background:
                "linear-gradient(90deg,#6366F1,#8B5CF6)",
            }}
          >
            Create Account
          </Button>

          <Typography
            mt={3}
            textAlign="center"
          >
            Already have an account?{" "}

            <Link
              component={RouterLink}
              to="/"
              underline="hover"
            >
              Sign In
            </Link>

          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;