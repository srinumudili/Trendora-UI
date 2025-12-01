import { Close } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import CartContent from "../components/Cart/CartContent";

const CartDrawer = ({ cartOpen, toggleCartDrawer }) => {
  return (
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={toggleCartDrawer}
      ModalProps={{
        sx: { zIndex: 2000 },
      }}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "80%", sm: "60%", md: "28rem" },
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "grey.100",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Your Cart
        </Typography>

        <IconButton onClick={toggleCartDrawer}>
          <Close fontSize="large" />
        </IconButton>
      </Box>

      {/* cartContent scrollable area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
        }}
      >
        {/* <Typography color="text.secondary" textAlign="center" mt={4}>
          Your cart is empty 🛍️
        </Typography> */}
        <CartContent />
      </Box>

      {/* STICKY CHECKOUT AREA */}
      <Box
        sx={{
          p: 2,
          borderTop: "1px solid #ddd",
          bgcolor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            p: 1.5,
            backgroundColor: "#2563EB",
            "&:hover": { backgroundColor: "#1D4ED8" },
          }}
        >
          Proceed to Checkout
        </Button>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={1}
        >
          💡 Taxes & shipping calculated at checkout.
        </Typography>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
