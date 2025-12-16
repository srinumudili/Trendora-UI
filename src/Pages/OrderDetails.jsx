import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

/* Dummy Order Data */
const order = {
  _id: "ORD123456",
  createdAt: "2025-01-10",
  isPaid: true,
  isDelivered: false,
  paymentMethod: "Stripe",
  shippingAddress: {
    address: "123 MG Road",
    city: "Bangalore",
    country: "India",
  },
  orderItems: [
    {
      productId: "1",
      name: "Classic Denim Jacket",
      image:
        "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
      price: 79.99,
      quantity: 1,
    },
    {
      productId: "2",
      name: "Oversized Hoodie",
      image:
        "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg",
      price: 59.5,
      quantity: 2,
    },
  ],
};
const OrderDetails = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", py: { xs: 4, md: 6 }, px: 2 }}>
      {/* HEADER */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          borderRadius: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Order #{order._id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Placed on {new Date(order.createdAt).toLocaleDateString()}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Chip
            icon={order.isPaid ? <CheckCircleIcon /> : <ScheduleIcon />}
            label={order.isPaid ? "Paid" : "Payment Pending"}
            color={order.isPaid ? "success" : "warning"}
          />
          <Chip
            icon={<LocalShippingIcon />}
            label={order.isDelivered ? "Delivered" : "Processing"}
            color={order.isDelivered ? "success" : "info"}
            variant="outlined"
          />
        </Stack>
      </Paper>

      {/* INFO CARDS */}
      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }} variant="outlined">
            <Typography
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap={1}
              mb={1}
            >
              <CreditCardIcon color="primary" /> Payment Method
            </Typography>
            <Typography color="text.secondary">
              {order.paymentMethod}
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 3, borderRadius: 3 }} variant="outlined">
            <Typography
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap={1}
              mb={1}
            >
              <LocalShippingIcon color="primary" /> Shipping Address
            </Typography>
            <Typography color="text.secondary">
              {order.shippingAddress.address}
            </Typography>
            <Typography color="text.secondary">
              {order.shippingAddress.city}, {order.shippingAddress.country}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* PRODUCTS */}
      <Typography
        variant="h6"
        fontWeight={700}
        mb={2}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <ShoppingBagIcon /> Items in this Order
      </Typography>

      <Stack spacing={2}>
        {order.orderItems.map((item) => (
          <Paper
            key={item.productId}
            variant="outlined"
            sx={{
              p: 2,
              borderRadius: 3,
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Avatar
              src={item.image}
              variant="rounded"
              sx={{ width: 72, height: 72 }}
            />

            <Box sx={{ flexGrow: 1 }}>
              <Typography fontWeight={600}>{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                Qty: {item.quantity}
              </Typography>
            </Box>

            <Typography fontWeight={700}>
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* CTA */}
      <Box textAlign="center" mt={5}>
        <Button
          component={Link}
          to="/my-orders"
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          size="large"
        >
          Back to My Orders
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetails;
