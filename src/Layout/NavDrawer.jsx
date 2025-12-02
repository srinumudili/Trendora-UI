import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const NavDrawer = ({ navDrawerOpen, toggleNavDrawer, menuLinks }) => {
  return (
    <Drawer
      anchor="left"
      open={navDrawerOpen}
      onClose={toggleNavDrawer}
      ModalProps={{
        sx: {
          zIndex: 2000,
        },
      }}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "75%" },
            backgroundColor: "#14213D",
            color: "white",
            p: 2,
          },
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Menu
        </Typography>

        <IconButton onClick={toggleNavDrawer} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 2 }} />

      {/* Navigation Links */}
      <List>
        {menuLinks.map(({ path, label }) => (
          <ListItem disablePadding key={label}>
            <ListItemButton
              component={Link}
              to={path}
              onClick={toggleNavDrawer}
              sx={{
                color: "rgba(255,255,255,0.8)",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              <ListItemText
                slotProps={{
                  primary: {
                    sx: {
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      fontSize: "0.9rem",
                    },
                  },
                }}
                primary={label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
