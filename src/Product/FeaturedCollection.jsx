import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import featuredImg from "../assets/featuredImg.png";

const FeaturedCollection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box component="section" sx={{ py: 8, px: 2 }}>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: theme.palette.mode === "dark" ? "grey.900" : "grey.100",
        }}
      >
        <Grid
          container
          spacing={0}
          direction={isMdUp ? "row" : "column-reverse"}
        >
          {/* Left Section */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              p: { xs: 3, md: 6 },
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                textTransform: "uppercase",
                letterSpacing: 1.5,
                color: "text.secondary",
                fontWeight: 600,
                mb: 1,
              }}
            >
              Comfort & Style
            </Typography>

            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                mb: 3,
                lineHeight: 1.2,
                color: "text.primary",
              }}
            >
              Made for Life, Styled for You
            </Typography>

            <Typography
              variant="body1"
              sx={{ mb: 4, color: "text.secondary", fontSize: "1.1rem" }}
            >
              Experience premium, comfortable clothing that effortlessly blends
              fashion and function—crafted to help you look and feel your best
              every day.
            </Typography>

            <Button
              component={Link}
              to="/collection/all"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                alignSelf: { xs: "center", md: "flex-start" },
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderRadius: 2,
                bgcolor: "secondary.main",
                "&:hover": { bgcolor: "secondary.dark" },
              }}
            >
              Shop Now
            </Button>
          </Grid>
          {/* Right Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={featuredImg}
              alt="Featured Collection"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FeaturedCollection;
