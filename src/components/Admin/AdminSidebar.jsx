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
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  const menu = [
    { id: "users", label: "Users", path: "/admin/users", icon: <PeopleIcon /> },
    {
      id: "products",
      label: "Products",
      path: "/admin/products",
      icon: <Inventory2Icon />,
    },
    {
      id: "orders",
      label: "Orders",
      path: "/admin/orders",
      icon: <ReceiptLongIcon />,
    },
    {
      id: "shop",
      label: "Go to Store",
      path: "/",
      icon: <StorefrontIcon />,
    },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      <Toolbar />
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
        {menu.map((item) => (
          <ListItemButton
            key={item.id}
            component={NavLink}
            to={item.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
            sx={{
              borderRadius: 2,
              mx: 1,
              mb: 1,
              px: 2,
              py: 1.2,
              color: "text.secondary",
              "&.active-link": {
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
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
