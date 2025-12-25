import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

{
  /* Dummy Orders */
}
const dummyOrders = [
  {
    id: "ORD1001",
    customer: "John Doe",
    total: 149.99,
    status: "Processing",
  },
  {
    id: "ORD1002",
    customer: "Sarah Smith",
    total: 89.5,
    status: "Shipped",
  },
  {
    id: "ORD1003",
    customer: "Alex Johnson",
    total: 230,
    status: "Delivered",
  },
];

const statusColorMap = {
  Processing: "warning",
  Shipped: "info",
  Delivered: "success",
  Cancelled: "error",
};

const OrderManagement = () => {
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (id, status) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <ReceiptLongIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            Order Management
          </Typography>
        </Stack>
      </Stack>

      {/* Orders Grid */}
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={order.id}>
            <Card
              sx={{
                borderRadius: 3,
                transition: "0.3s",
                boxShadow: 3,
                "&:hover": {
                  boxShadow: 8,
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardContent>
                {/* Header */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={700}>#{order.id}</Typography>
                  <Chip
                    label={order.status}
                    color={statusColorMap[order.status]}
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Stack>

                <Divider sx={{ my: 2 }} />

                {/* Customer */}
                <Typography fontWeight={600}>{order.customer}</Typography>
                <Typography color="text.secondary" mb={1}>
                  Total: ${order.total.toFixed(2)}
                </Typography>

                {/* Status Selector */}
                <Select
                  fullWidth
                  size="small"
                  value={order.status}
                  sx={{ mb: 2 }}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <MenuItem value="Processing">Processing</MenuItem>
                  <MenuItem value="Shipped">Shipped</MenuItem>
                  <MenuItem value="Delivered">Delivered</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>

                {/* Actions */}
                <Stack direction="row" spacing={1}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="info"
                    startIcon={<LocalShippingIcon />}
                    onClick={() => handleStatusChange(order.id, "Shipped")}
                  >
                    Ship
                  </Button>

                  <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    startIcon={<CheckCircleIcon />}
                    onClick={() => handleStatusChange(order.id, "Delivered")}
                  >
                    Deliver
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Empty State */}
      {orders.length === 0 && (
        <Box textAlign="center" mt={6}>
          <Typography color="text.secondary">No orders available</Typography>
        </Box>
      )}
    </Box>
  );
};

export default OrderManagement;
