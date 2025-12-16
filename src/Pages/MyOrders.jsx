import {
  Avatar,
  Box,
  Chip,
  Paper,
  Typography,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PendingIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

/* DUMMY DATA  */
const dummyOrders = [
  {
    _id: "ORDER123",
    createdAt: "2024-11-22",
    shippingAddress: { city: "New York", country: "USA" },
    image: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
    totalPrice: 149.99,
    isPaid: true,
  },
  {
    _id: "ORDER124",
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
    <Box sx={{ py: 3, px: 2 }}>
      {/* SECTION HEADER */}
      <Typography variant="h5" fontWeight={700} mb={3}>
        My Orders
      </Typography>

      <Stack spacing={3}>
        {dummyOrders.map((order) => (
          <Paper
            key={order._id}
            elevation={3}
            sx={{
              p: { xs: 2.5, sm: 3 },
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            {/* TOP SECTION */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ sm: "center" }}
            >
              {/* PRODUCT IMAGE */}
              <Avatar
                variant="rounded"
                src={order.image}
                sx={{
                  width: 96,
                  height: 96,
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />

              {/* ORDER INFO */}
              <Box flex={1}>
                <Typography fontWeight={700} fontSize={16}>
                  Order #{order._id}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                  <LocalShippingIcon fontSize="small" color="primary" />
                  <Typography variant="body2">
                    {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country}
                  </Typography>
                </Stack>
              </Box>

              {/* PRICE + STATUS */}
              <Box textAlign={{ xs: "left", sm: "right" }} minWidth={140}>
                <Typography fontWeight={700} fontSize={16}>
                  ${order.totalPrice.toFixed(2)}
                </Typography>

                <Chip
                  size="small"
                  sx={{ mt: 1, fontWeight: 600 }}
                  label={order.isPaid ? "Paid" : "Pending"}
                  color={order.isPaid ? "success" : "warning"}
                  icon={order.isPaid ? <CheckCircleIcon /> : <PendingIcon />}
                />
              </Box>
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* ACTION AREA */}
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                sx={{
                  borderRadius: 2,
                  px: 3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
                onClick={() => navigate(`/order/${order._id}`)}
              >
                View Order Details
              </Button>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default MyOrders;
