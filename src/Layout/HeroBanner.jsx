import { Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/HeroBanner.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 500, md: 600, lg: 900 },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={heroImg}
        alt="Trendora Hero"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          px: { xs: 4, md: 10, lg: 16 },
          background:
            "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent)",
        }}
      >
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              color: "common.white",
              mb: 2,
              fontSize: { xs: "2rem", sm: "4rem" },
              textShadow: "0 3px 10px rgba(0,0,0,0.6)",
              letterSpacing: 1,
            }}
          >
            Trendora Unlock Your Style Journey
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "grey.200",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.3rem" },
              maxWidth: "32rem",
            }}
          >
            Discover the latest trends and refresh your wardrobe with
            fashion-forward styles.
          </Typography>

          <Button
            component={Link}
            to="/collection/all"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "error.main",
              color: "common.white",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: { xs: "1rem", md: "1.2rem" },
              borderRadius: 2,
              boxShadow: 3,
              textTransform: "none",
              "&:hover": {
                bgcolor: "error.dark",
                boxShadow: 4,
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
