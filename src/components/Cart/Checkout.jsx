import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import StripePaymentButton from "./StripePaymentButton";

{
  /* Dummy Cart Data */
}
const dummyCart = {
  userEmail: "user@trendora.com",
  products: [
    {
      name: "Classic Denim Jacket",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
      size: "M",
      color: "Blue",
    },
    {
      name: "Oversized Hoodie",
      price: 59.5,
      image:
        "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg",
      size: "L",
      color: "Black",
    },
  ],
};

const totalPrice = dummyCart.products.reduce((sum, p) => sum + p.price, 0);

const Checkout = () => {
  const [shipping, setShipping] = useState({});
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };
  return (
    <Box
      sx={{ maxWidth: 1300, mx: "auto", my: 6, px: 2, py: { xs: 3, md: 6 } }}
    >
      <Grid container spacing={4}>
        {/* Left: Shipping */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              Checkout
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Complete your purchase securely
            </Typography>

            <Divider sx={{ mb: 3 }} />

            <TextField
              label="Email"
              value={dummyCart.userEmail}
              fullWidth
              disabled
              sx={{ mb: 3 }}
            />

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <LocalShippingIcon color="primary" />
              <Typography fontWeight={700}>Shipping Information</Typography>
            </Stack>

            <Grid container spacing={2}>
              {[
                ["First Name", "firstName"],
                ["Last Name", "lastName"],
                ["City", "city"],
                ["Postal Code", "postalCode"],
              ].map(([label, name]) => (
                <Grid size={{ xs: 12, sm: 6 }} key={name}>
                  <TextField
                    label={label}
                    name={name}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
              ))}

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Address"
                  name="address"
                  fullWidth
                  required
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Country"
                  name="country"
                  fullWidth
                  required
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  required
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            {!showPayment && (
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{ mt: 4, py: 1.5 }}
                onClick={() => setShowPayment(true)}
              >
                Continue to Payment
              </Button>
            )}
            {showPayment && (
              <Box sx={{ mt: 4 }}>
                <StripePaymentButton amount={totalPrice} />
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Right:Order Summary */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              position: { md: "sticky" },
              top: 100,
            }}
          >
            <Typography variant="h6" fontWeight={800} gutterBottom>
              Order Summary
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {dummyCart.products.map((p, i) => (
              <Stack
                key={i}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Avatar
                  src={p.image}
                  variant="rounded"
                  sx={{ width: 64, height: 64 }}
                />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={600}>{p.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.size} · {p.color}
                  </Typography>
                </Box>

                <Typography fontWeight={700}>${p.price.toFixed(2)}</Typography>
              </Stack>
            ))}

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={800}>Total</Typography>
              <Typography fontWeight={800} color="primary">
                ${totalPrice.toFixed(2)}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mt: 3 }}
            >
              <LockIcon fontSize="small" color="success" />
              <Typography variant="caption" color="text.secondary">
                Secure SSL encrypted checkout
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;
