import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PersonOutline, ShoppingCartOutlined } from "@mui/icons-material";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const menuLinks = [
    { path: "/collection/all?gender=Men", label: "Men" },
    { path: "/collection/all?gender=Women", label: "Women" },
    { path: "/collection/all?category=Top Wear", label: "Tops" },
    { path: "/collection/all?category=Bottom Wear", label: "Bottoms" },
  ];
  return (
    <>
      {/* Left Logo */}
      <Typography
        variant="h6"
        component={Link}
        to={"/"}
        sx={{
          textDecoration: "none",
          color: "white",
          fontWeight: 700,
          fontSize: "1.3 rem",
          flexShrink: 0,
        }}
      >
        Trendora
      </Typography>

      {/* Centet Menu Links */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 4,
          ml: 48,
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

      {/* Right Section - Icons */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          marginLeft: "auto",
        }}
      >
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={"/admin"}
          sx={{
            backgroundColor: "#FCA311",
            "&:hover": { backgroundColor: "#FB8C00" },
          }}
        >
          Admin
        </Button>
        <IconButton
          component={Link}
          to={"/profile"}
          sx={{ color: "#E5E7EB", "&:hover": { color: "#fff" } }}
        >
          <PersonOutline sx={{ fontSize: 26 }} />
        </IconButton>

        <IconButton sx={{ color: "#E5E7EB", "&:hover": { color: "#fff" } }}>
          <Badge badgeContent={3} color="error">
            <ShoppingCartOutlined sx={{ fontSize: 26 }} />
          </Badge>
        </IconButton>
        <Searchbar />
      </Box>
    </>
  );
};

export default Navbar;
