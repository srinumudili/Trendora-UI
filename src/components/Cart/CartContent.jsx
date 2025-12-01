import { Add, Delete, Remove } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CartContent = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "p1",
      name: "Classic Cotton Shirt",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      size: "M",
      color: "Blue",
      quantity: 1,
      price: 999,
    },
    {
      id: "p2",
      name: "Slim Fit Jeans",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      size: "32",
      color: "Dark",
      quantity: 2,
      price: 1599,
    },
  ]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{
            display: "flex",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <CardMedia
            component="image"
            image={item.image}
            alt={item.name}
            sx={{
              width: 90,
              height: 110,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: <b>{item.size}</b> &nbsp; | &nbsp; Color:{" "}
              <b>{item.color}</b>
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <IconButton size="small" sx={{ bgcolor: "grey.200", mr: 1 }}>
                <Remove fontSize="small" />
              </IconButton>
              <Typography variant="body1" fontWeight={600}>
                {item.quantity}
              </Typography>
              <IconButton size="small" sx={{ bgcolor: "grey.200", ml: 1 }}>
                <Add fontSize="small" />
              </IconButton>
            </Box>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              ₹{(item.price * item.quantity).toLocaleString()}
            </Typography>
            <IconButton sx={{ mt: 1, color: "red" }}>
              <Delete fontSize="medium" />
            </IconButton>
          </Box>
        </Card>
      ))}

      {cartItems.length === 0 && (
        <Typography textAlign="center" color="text.secondary" sx={{ mt: 3 }}>
          Your cart is empty 🛍️
        </Typography>
      )}
    </Box>
  );
};

export default CartContent;
