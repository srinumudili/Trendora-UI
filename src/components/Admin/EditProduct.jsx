import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: "Classic Denim Jacket",
    description: "Premium denim jacket with modern fit",
    price: 79.99,
    stock: 25,
    sku: "DNM-001",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Black"],
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setUploading(true);

    setTimeout(() => {
      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, preview],
      }));
      setUploading(false);
    }, 800);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    alert("Product updated successfully!");
  };

  return (
    <Box sx={{ maxWidth: 1300, mx: "auto", p: { xs: 2, md: 4 } }}>
      {/* HEADER */}
      <Stack spacing={1} mb={4}>
        <Typography variant="h4" fontWeight={700}>
          Edit Product
        </Typography>
        <Typography color="text.secondary">
          Update product information and images
        </Typography>
      </Stack>

      <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3}>
                {/* Product Name */}
                <TextField
                  label="Product Name"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  fullWidth
                />

                {/* Description */}
                <TextField
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={product.description}
                  onChange={handleChange}
                  fullWidth
                />

                {/* Price & Stock */}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Price"
                      name="price"
                      type="number"
                      value={product.price}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      label="Stock"
                      name="stock"
                      type="number"
                      value={product.stock}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                </Grid>

                {/* SKU */}
                <TextField
                  label="SKU"
                  name="sku"
                  value={product.sku}
                  onChange={handleChange}
                  fullWidth
                />

                {/* Sizes */}
                <Box>
                  <Typography fontWeight={600} mb={1}>
                    Sizes
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {product.sizes.map((size, i) => (
                      <Chip key={i} label={size} color="primary" />
                    ))}
                  </Stack>
                </Box>

                {/* Colors */}
                <Box>
                  <Typography fontWeight={600} mb={1}>
                    Colors
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {product.colors.map((color, i) => (
                      <Chip key={i} label={color} variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={3}>
                <Typography fontWeight={600}>Product Images</Typography>

                <Button
                  component="label"
                  variant="outlined"
                  startIcon={<UploadIcon />}
                >
                  Upload Image
                  <input hidden type="file" onChange={handleImageUpload} />
                </Button>

                {uploading && (
                  <Typography color="text.secondary">
                    Uploading image...
                  </Typography>
                )}

                {/* Image Preview */}
                <Grid container spacing={2}>
                  {product.images.map((img, i) => (
                    <Grid item xs={4} key={i}>
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: 2,
                          overflow: "hidden",
                          border: "1px solid #ddd",
                        }}
                      >
                        <Box
                          component="img"
                          src={img}
                          sx={{
                            width: "100%",
                            height: 90,
                            objectFit: "cover",
                          }}
                        />
                        <IconButton
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 4,
                            right: 4,
                            bgcolor: "white",
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* ACTIONS */}
          <Stack direction="row" justifyContent="flex-end">
            <Button
              type="submit"
              size="large"
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{ px: 5, py: 1.2 }}
            >
              Save Changes
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default EditProduct;
