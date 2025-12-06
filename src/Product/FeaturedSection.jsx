import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
const FeaturedSection = () => {
  const theme = useTheme();
  const features = [
    {
      icon: (
        <LocalShippingIcon sx={{ fontSize: 40, color: "secondary.main" }} />
      ),
      title: "Free International Shipping",
      description: "On all orders over $100.00",
    },
    {
      icon: <ReplayIcon sx={{ fontSize: 40, color: "success.main" }} />,
      title: "45-Day Return Policy",
      description: "Money-back guarantee",
    },
    {
      icon: <CreditCardIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Secure Checkout",
      description: "100% secure checkout process",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        px: 2,
        bgcolor: theme.palette.mode === "dark" ? "grey.900" : "grey.100",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
        }}
      >
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 2,
                    borderRadius: "50%",
                    bgcolor:
                      theme.palette.mode === "dark" ? "grey.800" : "grey.200",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  sx={{ mb: 1 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "0.95rem" }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeaturedSection;
