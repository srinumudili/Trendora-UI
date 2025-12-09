import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyOrders from "./MyOrders";

const dummyUser = {
  name: "John Doe",
  email: "johndoe@example.com",
};

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("orders");

  useEffect(() => {
    if (!dummyUser) navigate("/login");
  }, [navigate]);

  const handleLogout = () => navigate("/login");

  const menuItems = [
    { id: "orders", label: "My Orders", icon: <ShoppingBagIcon /> },
    { id: "wishlist", label: "Wishlist", icon: <FavoriteIcon /> },
    { id: "address", label: "Addresses", icon: <HomeIcon /> },
    { id: "settings", label: "Settings", icon: <SettingsIcon /> },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        py: 6,
        px: 2,
      }}
    >
      {/* Sidebar */}
      <Paper
        sx={{
          width: { xs: "100%", md: 300 },
          p: 4,
          borderRadius: 3,
          height: "fit-content",
        }}
      >
        <Avatar
          sx={{
            width: 90,
            height: 90,
            mx: "auto",
            bgcolor: "primary.main",
            fontSize: "2.5rem",
          }}
        >
          {dummyUser.name[0]}
        </Avatar>

        <Typography variant="h5" fontWeight={700} textAlign="center" mt={2}>
          {dummyUser.name}
        </Typography>

        <Typography textAlign="center" color="text.secondary">
          {dummyUser.email}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Menu */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  bgcolor:
                    activeTab === item.id ? "primary.light" : "transparent",
                }}
                onClick={() => setActiveTab(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Logout */}
        <Button
          variant="outlined"
          color="error"
          startIcon={<LogoutIcon />}
          fullWidth
          sx={{ mt: 2, borderRadius: 2 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>

      {/* Content Area */}
      <Box flex={1}>
        {activeTab === "orders" && <MyOrders />}
        {activeTab !== "orders" && (
          <Paper sx={{ p: 4, textAlign: "center", borderRadius: 3 }}>
            <Typography variant="h6">
              {menuItems.find((m) => m.id === activeTab)?.label} Coming Soon
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
