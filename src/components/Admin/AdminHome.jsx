import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

/* Dummy Data */
const stats = {
  totalRevenue: 4250.75,
  totalOrders: 18,
  totalProducts: 42,
};

const recentOrders = [
  { id: "ORD1001", customer: "John Doe", total: 299.99, status: "Delivered" },
  {
    id: "ORD1002",
    customer: "Sarah Smith",
    total: 159.5,
    status: "Processing",
  },
  {
    id: "ORD1003",
    customer: "Alex Johnson",
    total: 89.99,
    status: "Cancelled",
  },
];

const statusColor = {
  Delivered: "success",
  Processing: "warning",
  Cancelled: "error",
};

/* Styles */
const cardStyle = {
  p: 3,
  borderRadius: 3,
  background: "linear-gradient(135deg, #ffffff, #f9fafb)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
};

const orderCardStyle = {
  p: 3,
  borderRadius: 3,
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  transition: "0.3s",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
  },
};

const AdminHome = () => {
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Typography variant="h4" fontWeight={800} mb={4}>
        Admin Dashboard
      </Typography>

      {/* KPI CARDS */}
      <Grid container spacing={3}>
        {/* Revenue */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={cardStyle}>
            <Stack direction="row" spacing={2} alignItems="center">
              <PaidIcon sx={{ fontSize: 40, color: "success.main" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Revenue
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  ${stats.totalRevenue}
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* Orders */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={cardStyle}>
            <Stack direction="row" spacing={2} alignItems="center">
              <ShoppingCartIcon sx={{ fontSize: 40, color: "primary.main" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Orders
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {stats.totalOrders}
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>

        {/* Products */}
        <Grid item xs={12} md={4}>
          <Card sx={cardStyle}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Inventory2Icon sx={{ fontSize: 40, color: "warning.main" }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Products
                </Typography>
                <Typography variant="h5" fontWeight={700}>
                  {stats.totalProducts}
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Orders */}
      <Box mt={6}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Recent Orders
        </Typography>
        <Stack spacing={3}>
          {recentOrders.map((order) => (
            <Card key={order.id} sx={orderCardStyle}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent="space-between"
                spacing={2}
              >
                {/* Left */}
                <Box>
                  <Typography fontWeight={600}>Order ID: {order.id}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Customer: {order.customer}
                  </Typography>
                  <Typography fontWeight={600} mt={0.5}>
                    ${order.total}
                  </Typography>

                  {/* Status */}
                  <Chip
                    label={order.status}
                    color={statusColor[order.status]}
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
                <Divider sx={{ my: 2 }} />

                <Button
                  component={Link}
                  to="/admin/orders"
                  endIcon={<ArrowForwardIcon />}
                  size="small"
                  sx={{ alignSelf: "flex-end" }}
                >
                  View Order
                </Button>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminHome;
