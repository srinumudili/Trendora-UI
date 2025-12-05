import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductsGrid from "./ProductsGrid";

const dummyProduct = {
  _id: "1",
  name: "Premium Cotton Hoodie",
  description: "Super-soft hoodie designed for everyday comfort and style.",
  price: 69.99,
  originalPrice: 89.99,
  brand: "UrbanWear",
  material: "100% Cotton",
  colors: ["Black", "White", "Beige"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    {
      url: "https://images.pexels.com/photos/7679650/pexels-photo-7679650.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/7679640/pexels-photo-7679640.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/7679625/pexels-photo-7679625.jpeg",
    },
  ],
};

const similarDummy = [
  {
    _id: "2",
    name: "Trendy Oversized Hoodie",
    price: 59.5,
    image: "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg",
  },
  {
    _id: "3",
    name: "Classic Jacket",
    price: 79.9,
    image: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
  },
];
const ProductDetails = ({ product = dummyProduct }) => {
  const [mainImage, setMainImage] = useState(product.images[0].url);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* Thumbnails */}
        <Grid size={{ xs: 12, md: 1.5 }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              gap: 2,
            }}
          >
            {product.images.map((img, i) => (
              <Card
                key={i}
                onClick={() => setMainImage(img.url)}
                sx={{
                  cursor: "pointer",
                  border: mainImage === img.url ? "2px solid" : "1px solid",
                  borderColor:
                    mainImage === img.url ? "primary.main" : "grey.300",
                }}
              >
                <CardMedia
                  component="img"
                  image={img.url}
                  sx={{ height: 90 }}
                />
              </Card>
            ))}
          </Box>
        </Grid>
        {/* Main Image */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardMedia
              component="img"
              image={mainImage}
              sx={{ height: 500, objectFit: "cover" }}
            />
          </Card>
        </Grid>

        {/* Thumbnails - Mobile */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            mt: 2,
            gap: 2,
            overflowX: "auto",
            pb: 1,
          }}
        >
          {product.images.map((img, i) => (
            <Card
              key={i}
              onClick={() => setMainImage(img.url)}
              sx={{
                cursor: "pointer",
                minWidth: 80,
                borderRadius: 2,
                border: mainImage === img.url ? "2px solid" : "1px solid",
                borderColor:
                  mainImage === img.url ? "primary.main" : "grey.300",
              }}
            >
              <CardMedia
                component="img"
                image={img.url}
                sx={{ height: 80, width: 80, objectFit: "cover" }}
              />
            </Card>
          ))}
        </Box>

        {/* Product Info */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography variant="h4" fontWeight={700}>
            {product.name}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {product.originalPrice ? `$${product.originalPrice}` : ""}
          </Typography>
          <Typography
            variant="h4"
            color="error.main"
            fontWeight={700}
            sx={{ mb: 2 }}
          >
            ${product.price}
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          {/* Colors */}
          <Box sx={{ mb: 3 }}>
            <Typography fontWeight={600}>Color:</Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}
            >
              {product.colors.map((color) => (
                <Box
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: color.toLowerCase(),
                    cursor: "pointer",
                    border:
                      selectedColor === color
                        ? "3px solid black"
                        : "1px solid grey",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Sizes */}
          <Box sx={{ mb: 3 }}>
            <Typography fontWeight={600}>Size:</Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 1 }}
            >
              {product.sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  clickable
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    bgcolor: selectedSize === size ? "black" : "grey.200",
                    color: selectedSize === size ? "white" : "black",
                    fontWeight: 600,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Quantity */}
          <Box sx={{ mb: 4 }}>
            <Typography fontWeight={600}>Quantity:</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1,
              }}
            >
              <IconButton
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <RemoveIcon />
              </IconButton>

              <Typography fontSize="1.2rem" fontWeight={700} sx={{ mx: 2 }}>
                {quantity}
              </Typography>

              <IconButton onClick={() => setQuantity(quantity + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Add to Cart */}
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            sx={{ width: "100%", py: 1.5, fontSize: "1.1rem", borderRadius: 2 }}
          >
            Add to Cart
          </Button>

          <Divider sx={{ my: 4 }} />

          {/* Details */}
          <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
            Product Details
          </Typography>

          <Typography>Brand: {product.brand}</Typography>
          <Typography>Material: {product.material}</Typography>
        </Grid>
      </Grid>

      {/* Similar Products */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" fontWeight={700} textAlign="center" mb={3}>
          You May Also Like
        </Typography>

        <ProductsGrid products={similarDummy} />
      </Box>
    </Box>
  );
};

export default ProductDetails;
