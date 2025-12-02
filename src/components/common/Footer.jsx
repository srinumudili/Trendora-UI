import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: "grey.900",
        color: "grey.400",
        py: 8,
        width: "100%",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Subscription Section */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h6" sx={{ color: "common.white", mb: 2 }}>
            Join Our Fashion Family
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Stay ahead in fashion! Get updates on the latest trends, exclusive
            deals, and special events.
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 1, fontWeight: 600, color: "secondary.main" }}
          >
            Subscribe now & enjoy 10% off your first order!
          </Typography>

          <Box component="form" sx={{ display: "flex", mt: 3 }}>
            <TextField
              type="email"
              placeholder="Enter your email"
              size="small"
              fullWidth
              sx={{
                bgcolor: "grey.800",
                borderRadius: "6px 0 0 6px",
                "& input": { color: "grey.200" },
                "& fieldset": { borderColor: "grey.700" },
                "&:hover fieldset": { borderColor: "secondary.main" },
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "0 6px 6px 0",
                px: 3,
              }}
              type="submit"
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Shop Links */}
        <Grid size={{ xs: 6, md: 2 }}>
          <Typography variant="h6" sx={{ color: "common.white", mb: 2 }}>
            Shop
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {[
              "Men's Top Wear",
              "Women's Top Wear",
              "Men's Bottom Wear",
              "Women's Bottom Wear",
            ].map((item) => (
              <Typography
                key={item}
                component={Link}
                to="#"
                sx={{
                  color: "grey.400",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Support Links */}
        <Grid size={{ xs: 6, md: 2 }}>
          <Typography variant="h6" sx={{ color: "common.white", mb: 2 }}>
            Customer Support
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["Contact Us", "About Us", "FAQs", "Why Choose Us?"].map(
              (item) => (
                <Typography
                  key={item}
                  component={Link}
                  to="#"
                  sx={{
                    color: "grey.400",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {item}
                </Typography>
              )
            )}
          </Box>
        </Grid>
        {/* Social Section */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" sx={{ color: "common.white", mb: 2 }}>
            Follow Us
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton
              href="https://facebook.com"
              sx={{ color: "grey.400", "&:hover": { color: "#1877F2" } }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://instagram.com"
              sx={{ color: "grey.400", "&:hover": { color: "#E1306C" } }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              href="https://twitter.com"
              sx={{ color: "grey.400", "&:hover": { color: "#1DA1F2" } }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              href="https://youtube.com"
              sx={{ color: "grey.400", "&:hover": { color: "#FF0000" } }}
            >
              <YouTubeIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <PhoneIcon sx={{ color: "grey.400", mr: 1 }} />
            <Typography
              component="a"
              href="tel:+1234567890"
              sx={{
                textDecoration: "none",
                color: "grey.400",
                fontWeight: 500,
                "&:hover": { color: "success.main" },
              }}
            >
              +1 (234) 567-890
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: 8,
          pt: 4,
          borderTop: "1px solid",
          borderColor: "grey.800",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "grey.500" }}>
          &copy; {new Date().getFullYear()} Trendora. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
