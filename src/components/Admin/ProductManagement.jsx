import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

{
  /* Dummy Products */
}
const dummyProducts = [
  {
    id: "1",
    name: "Classic Denim Jacket",
    sku: "DJ-001",
    price: 79.99,
    image: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
  },
  {
    id: "2",
    name: "Oversized Hoodie",
    sku: "HD-021",
    price: 59.5,
    image: "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg",
  },
  {
    id: "3",
    name: "Streetwear Shirt",
    sku: "ST-009",
    price: 45,
    image: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg",
  },
];

const ProductManagement = () => {
  const [products, setProducts] = useState(dummyProducts);
  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={2}
        mb={4}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Inventory2Icon color="primary" fontSize="large" />
          <Typography variant="h5" fontWeight={700}>
            Product Management
          </Typography>
        </Stack>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2 }}
        >
          Add Product
        </Button>
      </Stack>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                height="220"
                image={product.image}
                alt={product.name}
              />

              {/* Content */}
              <CardContent>
                <Stack spacing={1}>
                  <Typography fontWeight={600}>{product.name}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    SKU: {product.sku}
                  </Typography>
                </Stack>
                <Chip
                  label={`$${product.price}`}
                  color="primary"
                  sx={{ width: "fit-content", fontWeight: 600 }}
                />
                <Divider sx={{ my: 1 }} />

                {/* Actions */}
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                >
                  <Button
                    component={Link}
                    to={`/admin/products/${product.id}/edit`}
                    startIcon={<EditIcon />}
                    size="small"
                    variant="outlined"
                    fullWidth
                  >
                    Edit
                  </Button>
                  <Button
                    startIcon={<DeleteIcon />}
                    size="small"
                    color="error"
                    variant="outlined"
                    fullWidth
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* EMPTY STATE */}
      {products.length === 0 && (
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" color="text.secondary">
            No products found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start by adding a new product to your store.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductManagement;
