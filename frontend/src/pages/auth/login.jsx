import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

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

import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("accounts/login/", {
        username_or_email: formData.username_or_email,
        password: formData.password,
        remember_me: false,
      });

      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      const user = response.data.user;

      if (accessToken && user) {
        login(accessToken, refreshToken, user);

        if (user.role === "RECRUITER") {
          navigate("/recruiter");
        } else {
          navigate("/candidate");
        }
      } else {
        setError("Login response missing required session data.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.detail ||
        "Invalid username/email or password."
      );
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

        <Typography variant="h2" fontWeight={800} sx={{ zIndex: 2 }}>
          NextHire
        </Typography>

        <Typography variant="h5" mt={2} sx={{ zIndex: 2 }}>
          AI-Powered Hiring Platform
        </Typography>

        <Typography
          mt={5}
          sx={{
            maxWidth: 430,
            lineHeight: 1.8,
            opacity: 0.9,
            zIndex: 2,
            textAlign: "center",
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
            maxWidth: 480,
            p: 5,
            borderRadius: 5,
            boxShadow: "0 15px 40px rgba(15,23,42,.08)",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Log In
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Welcome back, login to continue.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username or Email"
              name="username_or_email"
              value={formData.username_or_email}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                mt: 4,
                py: 1.6,
                borderRadius: 3,
                background: "linear-gradient(90deg,#6366F1,#8B5CF6)",
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Log In "
              )}
            </Button>
          </form>

          <Typography mt={3} sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register" underline="hover">
              Create Account
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;