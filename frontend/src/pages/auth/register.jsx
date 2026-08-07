import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";

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
  Alert,
  CircularProgress,
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone_number: "",
    role: "candidate",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("accounts/register/", {
        ...formData,
        role: formData.role.toUpperCase(),
      });

      const access =
        response.data.access ||
        response.data.token ||
        response.data.tokens?.access;

      const refresh =
        response.data.refresh ||
        response.data.tokens?.refresh;

      if (access) {
        localStorage.setItem("access", access);
        localStorage.setItem("token", access);
      }

      if (refresh) {
        localStorage.setItem("refresh", refresh);
      }

      localStorage.setItem("user_role", formData.role.toUpperCase());

      navigate(
        formData.role === "candidate" ? "/candidate" : "/recruiter"
      );
    } catch (err) {
      setError(
        err.response?.data?.detail || "Registration failed."
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
        bgcolor: "#F8FAFC",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
          background:
            "linear-gradient(135deg,#4F46E5,#8B5CF6,#06B6D4)",
          p: 8,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          NextHire
        </Typography>

        <Typography variant="h5" mt={3}>
          AI Powered Hiring Platform
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 470,
            p: 4,
            borderRadius: 4,
            maxHeight: "95vh",
            overflowY: "auto",
            boxShadow: "0 15px 40px rgba(0,0,0,.08)",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>

          <Typography color="text.secondary" mb={2}>
            Join NextHire today.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="dense"
              required
            />

            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="dense"
              required
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="dense"
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              margin="dense"
              required
            />

            <TextField
              fullWidth
              select
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              margin="dense"
            >
              <MenuItem value="candidate">Candidate</MenuItem>
              <MenuItem value="recruiter">Recruiter</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              margin="dense"
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirm_password}
              onChange={handleChange}
              margin="dense"
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="toggle confirm password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 3,
                background: "linear-gradient(90deg,#4F46E5,#8B5CF6)",
              }}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                "Create Account test"
              )}
            </Button>
          </form>

          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" component="span">
              Already have an account?{" "}
            </Typography>

            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Login
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;