import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";

/* Dummy Checkout Data */

const checkout = {
  _id: "ORD123456",
  createdAt: "2025-01-10T10:30:00Z",
  paymentMethod: "Stripe",
  shippingAddress: {
    address: "221B Baker Street",
    city: "London",
    country: "UK",
  },
  checkoutItems: [
    {
      productId: "1",
      name: "Classic Denim Jacket",
      image:
        "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
      color: "Blue",
      size: "M",
      price: 79.99,
      quantity: 1,
    },
    {
      productId: "2",
      name: "Oversized Hoodie",
      image:
        "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg",
      color: "Black",
      size: "L",
      price: 59.5,
      quantity: 1,
    },
  ],
};

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const estimatedDelivery = (date) => {
    const d = new Date(date);
    d.setDate(d.getDate() + 10);
    return d.toLocaleDateString();
  };

  const totalAmount = checkout.checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <Box
      sx={{
        bgcolor: "grey.50",
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Box maxWidth={1000} mx="auto">
        {/* SUCCESS HERO */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            mb: 5,
            borderRadius: 4,
            textAlign: "center",
            bgcolor: "success.50",
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 64, color: "success.main" }} />
          <Typography variant="h4" fontWeight={800} mt={2}>
            Order Confirmed
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Thank you for shopping with <strong>Trendora</strong> 🎉
          </Typography>

          <Chip
            icon={<LocalShippingIcon />}
            label={`Estimated Delivery: ${estimatedDelivery(
              checkout.createdAt
            )}`}
            color="success"
            sx={{ mt: 3, fontWeight: 600 }}
          />
        </Paper>

        {/* ORDER DETAILS CARD */}
        <Card sx={{ borderRadius: 4 }}>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            {/* ORDER META */}
            <Grid container spacing={3} mb={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography fontWeight={700}>
                  Order ID:
                  <Box component="span" color="primary.main" ml={1}>
                    #{checkout._id}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placed on {new Date(checkout.createdAt).toLocaleDateString()}
                </Typography>
              </Grid>

              <Grid
                size={{ xs: 12, md: 6 }}
                textAlign={{ xs: "left", md: "right" }}
              >
                <Typography fontWeight={700}>Total Paid</Typography>
                <Typography variant="h6" color="success.main" fontWeight={800}>
                  ${totalAmount.toFixed(2)}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* ITEMS */}
            <Typography
              variant="h6"
              fontWeight={700}
              mb={2}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <ShoppingBagIcon /> Your Items
            </Typography>

            <Stack spacing={2}>
              {checkout.checkoutItems.map((item) => (
                <Paper
                  key={item.productId}
                  variant="outlined"
                  sx={{ p: 2, borderRadius: 3 }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid>
                      <Avatar
                        src={item.image}
                        variant="rounded"
                        sx={{ width: 72, height: 72 }}
                      />
                    </Grid>

                    <Grid size="grow">
                      <Typography fontWeight={700}>{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.color} • {item.size}
                      </Typography>
                    </Grid>

                    <Grid textAlign="right">
                      <Typography fontWeight={700}>
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Qty {item.quantity}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Stack>

            <Divider sx={{ my: 4 }} />

            {/* PAYMENT + ADDRESS */}
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                  <Typography
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <CreditCardIcon /> Payment Method
                  </Typography>
                  <Typography color="text.secondary" mt={1}>
                    {checkout.paymentMethod}
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                  <Typography
                    fontWeight={700}
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <LocationOnIcon /> Shipping Address
                  </Typography>
                  <Typography color="text.secondary" mt={1}>
                    {checkout.shippingAddress.address}
                  </Typography>
                  <Typography color="text.secondary">
                    {checkout.shippingAddress.city},{" "}
                    {checkout.shippingAddress.country}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* CTA */}
            <Box textAlign="center" mt={6}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: 3,
                  fontWeight: 700,
                }}
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
export default OrderConfirmation;
