import PeopleIcon from "@mui/icons-material/People";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const navStyle = ({ isActive }) => ({
    borderRadius: 2,
    mx: 1,
    mb: 1,
    px: 2,
    py: 1.2,
    bgcolor: isActive ? "primary.main" : "transparent",
    color: isActive ? "primary.contrastText" : "text.secondary",
    "&:hover": {
      bgcolor: isActive ? "primary.dark" : "action.hover",
    },
  });

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
        my: 6,
      }}
    >
      {/* BRAND */}
      <Typography
        component={Link}
        to="/admin"
        variant="h5"
        fontWeight={800}
        sx={{
          textDecoration: "none",
          color: "text.primary",
          mb: 1,
        }}
      >
        Trendora
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        Admin Dashboard
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* NAVIGATION */}
      <List disablePadding>
        <ListItemButton component={NavLink} to="/admin/users" sx={navStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/products" sx={navStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <Inventory2Icon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/admin/orders" sx={navStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <ReceiptLongIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/" sx={navStyle}>
          <ListItemIcon sx={{ color: "inherit" }}>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Go to Store" />
        </ListItemButton>
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ my: 2 }} />

      {/* LOGOUT */}
      <Button
        fullWidth
        variant="contained"
        color="error"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
        sx={{
          borderRadius: 2,
          py: 1.2,
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default AdminSidebar;
