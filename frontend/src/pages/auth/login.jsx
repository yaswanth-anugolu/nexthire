import { useState } from "react";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Alert,
  CircularProgress,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import api from "../../api/axios";

import { useAuth } from "../../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async () => {
    
    setError("");

    if (!username || !password) {

      setError(
        "Please enter username and password."
      );

      return;

    }

   try {

    

    setLoading(true);

    const payload = {
        username_or_email: username,
        password,
        remember_me: false,
    };

    

    

    const response = await api.post(
        "accounts/login/",
        payload
    );

      const {
        access,
        refresh,
        user,
      } = response.data;

      login(
        access,
        refresh,
        user,
      );

      if (
        user.role === "RECRUITER"
      ) {

        navigate("/recruiter");

      } else {

        navigate("/candidate");

      }

    } catch (error) {

      if (
        error.response?.data?.detail
      ) {

        setError(
          error.response.data.detail
        );

      } else if (
        error.response?.data?.message
      ) {

        setError(
          error.response.data.message
        );

      } else {

        setError(
          "Login failed."
        );

      }

    } finally {

      setLoading(false);

    }

  };
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
            "linear-gradient(135deg, #6366F1 0%, #8B5CF6 45%, #22D3EE 100%)",
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
            bgcolor: "rgba(255,255,255,0.12)",
            top: -80,
            left: -80,
            filter: "blur(10px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.10)",
            bottom: -70,
            right: -70,
            filter: "blur(10px)",
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
          mt={2}
          variant="h5"
          sx={{ zIndex: 2 }}
        >
          AI-Powered Hiring Platform
        </Typography>

        <Typography
          mt={5}
          textAlign="center"
          sx={{
            maxWidth: 450,
            opacity: 0.92,
            fontSize: 18,
            lineHeight: 1.8,
            zIndex: 2,
          }}
        >
          Smart Resume Screening
          <br />
          AI Mock Interviews
          <br />
          Intelligent Candidate Ranking
          <br />
          AI Career Assistant
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
            maxWidth: 430,
            p: 5,
            borderRadius: 5,
            boxShadow:
              "0 15px 40px rgba(15,23,42,0.08)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Welcome Back 👋
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Sign in to continue to NextHire.
          </Typography>

          {error && (
            <Alert
              severity="error"
              sx={{ mb: 2 }}
            >
              {error}
            </Alert>
          )}

          <TextField
            label="Username"
            margin="normal"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

          <TextField
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
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
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            onClick={handleLogin}
            sx={{
              mt: 4,
              py: 1.6,
              borderRadius: 3,
              background:
                "linear-gradient(90deg,#6366F1,#8B5CF6)",
            }}
          >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Sign In"
            )}
          </Button>

          <Typography
            mt={3}
            textAlign="center"
          >
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/register"
              underline="hover"
            >
              Register
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;