import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginImg from "../assets/Login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password.trim())) {
      newErrors.password =
        "Password must be at least 6 characters and include at least one letter, one number, and one special character (@$!%*?&).";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setTimeout(() => {
      navigate(redirect);
    }, 800);
  };

  return (
    <Grid
      container
      sx={{
        minHeight: "100vh",
        bgcolor: "grey.100",
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            width: "100%",
            maxWidth: 450,
            p: 4,
            borderRadius: 3,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            sx={{ mb: 1 }}
          >
            Welcome to <span style={{ color: "#E91E63" }}>Trendora</span>
          </Typography>

          <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            Sign in to continue shopping
          </Typography>

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* EMAIL */}
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              margin="normal"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={Boolean(errors.email)}
              helperText={errors.email}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="primary" />
                    </InputAdornment>
                  ),
                },
              }}
            />
            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              error={Boolean(errors.password)}
              helperText={errors.password}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.5,
                fontWeight: 700,
                borderRadius: 2,
                background: "linear-gradient(45deg, #E91E63, #F44336)",
              }}
            >
              Sign In
            </Button>
          </Box>

          {/* REGISTER LINK */}
          <Typography
            textAlign="center"
            sx={{ mt: 3, whiteSpace: "nowrap" }}
            color="text.secondary"
          >
            Don't have an account?{" "}
            <Box
              component={Link}
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              sx={{
                display: "inline",
                color: "primary.main",
                fontWeight: 700,
                ml: 1,
                px: 1,
                py: 0.3,
                borderRadius: 1,
                textDecoration: "none",
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  boxShadow: 2,
                },
              }}
            >
              Register Here
            </Box>
          </Typography>
        </Paper>
      </Grid>

      {/* RIGHT IMAGE SECTION */}
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src={loginImg}
          alt="Login Illustration"
          sx={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            borderRadius: "0 0 0 20px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
