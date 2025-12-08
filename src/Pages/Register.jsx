import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import registerImg from "../assets/Register.png";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const strongPasswordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // NAME VALIDATION
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    // EMAIL VALIDATION
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    // PASSWORD VALIDATION
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!strongPasswordRegex.test(formData.password.trim())) {
      newErrors.password =
        "Password must be at least 6 characters and include at least one letter, one number, and one special character (@$!%*?&).";
    }

    // CONFIRM PASSWORD VALIDATION
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm your password.";
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Passwords do not match.";
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
    <Grid container sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
      {/* LEFT SECTION – FORM */}
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
            my: 1,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            sx={{ mb: 1 }}
          >
            Join <span style={{ color: "#E91E63" }}>Trendora</span> Today
          </Typography>

          <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            Create an account to start shopping.
          </Typography>

          {/* FORM */}
          <Box component="form" onSubmit={handleSubmit}>
            {/* NAME */}
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              margin="normal"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              error={Boolean(errors.name)}
              helperText={errors.name}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                },
              }}
            />

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

            {/* PASSWORD */}
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

            {/* CONFIRM PASSWORD */}
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              margin="normal"
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
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
              Sign Up
            </Button>
          </Box>

          {/* LOGIN LINK */}
          <Typography
            textAlign="center"
            sx={{ mt: 3, whiteSpace: "nowrap" }}
            color="text.secondary"
          >
            Already have an account?
            <Box
              component={Link}
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
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
              Login Here
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
          src={registerImg}
          alt="Register Illustration"
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

export default Register;
