import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Searchbar from "./Searchbar";
import { useState } from "react";
import CartDrawer from "../../Layout/CartDrawer";
import NavDrawer from "../../Layout/NavDrawer";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => setCartOpen(!cartOpen);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  const menuLinks = [
    { path: "/collection/all?gender=Men", label: "Men" },
    { path: "/collection/all?gender=Women", label: "Women" },
    { path: "/collection/all?category=Top Wear", label: "Tops" },
    { path: "/collection/all?category=Bottom Wear", label: "Bottoms" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          Trendora
        </Typography>

        {/* Center Menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            gap: 3,
          }}
        >
          {menuLinks.map(({ path, label }) => (
            <Button
              key={label}
              component={Link}
              to={path}
              sx={{
                color: "#E5E7EB",
                fontSize: "0.9rem",
                letterSpacing: 1,
                "&:hover": {
                  color: "#fff",
                  borderBottom: "2px solid #fff",
                  borderRadius: 0,
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            component={Link}
            to="/admin"
            sx={{
              backgroundColor: "#FCA311",
              "&:hover": { backgroundColor: "#FB8C00" },
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            Admin
          </Button>

          <IconButton
            component={Link}
            to="/profile"
            sx={{ color: "#E5E7EB", "&:hover": { color: "#fff" } }}
          >
            <PersonOutline sx={{ fontSize: 26 }} />
          </IconButton>

          <IconButton
            sx={{ color: "#E5E7EB", "&:hover": { color: "#fff" } }}
            onClick={toggleCartDrawer}
          >
            <Badge badgeContent={3} color="error">
              <ShoppingCartOutlined sx={{ fontSize: 26 }} />
            </Badge>
          </IconButton>

          <Searchbar />
          <IconButton
            sx={{
              display: { xs: "block", sm: "none" },
              color: "#E5E7EB",
              mt: 1,
            }}
            onClick={toggleNavDrawer}
          >
            <MenuIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>
      </Box>

      <CartDrawer cartOpen={cartOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <NavDrawer
        navDrawerOpen={navDrawerOpen}
        toggleNavDrawer={toggleNavDrawer}
        menuLinks={menuLinks}
      />
    </>
  );
};

export default Navbar;
