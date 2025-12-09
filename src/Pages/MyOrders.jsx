import { Avatar, Box, Chip, Paper, Typography, Button } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingIcon from "@mui/icons-material/Pending";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";

const dummyOrders = [
  {
    _id: "ORDER123",
    createdAt: "2024-11-22",
    shippingAddress: { city: "New York", country: "USA" },
    image: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
    totalPrice: 149.99,
    isPaid: true,
  },
];

const MyOrders = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        My Orders
      </Typography>

      {dummyOrders.map((order) => (
        <Paper
          key={order._id}
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 3,
            alignItems: "center",
          }}
        >
          {/* Product Image */}
          <Avatar
            variant="rounded"
            src={order.image}
            sx={{ width: 90, height: 90, boxShadow: 2 }}
          />

          {/* Order Info */}
          <Box flex={1}>
            <Typography fontWeight={700}>Order #{order._id}</Typography>
            <Typography color="text.secondary">
              {new Date(order.createdAt).toLocaleDateString()}
            </Typography>

            <Typography sx={{ mt: 1, display: "flex", gap: 1 }}>
              <LocalShippingIcon fontSize="small" color="primary" />
              {order.shippingAddress.city}, {order.shippingAddress.country}
            </Typography>

            <Typography fontWeight={700} mt={1}>
              Total: ${order.totalPrice}
            </Typography>

            {/* Status */}
            <Chip
              label={order.isPaid ? "Paid" : "Pending"}
              color={order.isPaid ? "success" : "warning"}
              icon={order.isPaid ? <CheckCircleIcon /> : <PendingIcon />}
              sx={{ mt: 1, fontWeight: 600 }}
            />
          </Box>

          {/* Details Button */}
          <Button
            variant="contained"
            sx={{ borderRadius: 2, px: 4 }}
            onClick={() => navigate(`/order/${order._id}`)}
          >
            View Details
          </Button>
        </Paper>
      ))}
    </Box>
  );
};

export default MyOrders;
