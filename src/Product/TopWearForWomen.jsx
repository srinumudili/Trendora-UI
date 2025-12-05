import { Box, CircularProgress, Typography } from "@mui/material";
import ProductsGrid from "./ProductsGrid";

const dummyWomenTopWear = [
  {
    _id: "w1",
    name: "Women’s Floral Top",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress",
  },
  {
    _id: "w2",
    name: "Trendy Pink Hoodie",
    price: 42.0,
    image:
      "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg?auto=compress",
  },
  {
    _id: "w3",
    name: "Casual Denim Shirt",
    price: 34.5,
    image:
      "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress",
  },
  {
    _id: "w4",
    name: "Mint Green Crop Top",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/7679678/pexels-photo-7679678.jpeg?auto=compress",
  },
];

const TopWearForWomen = ({ loading = false, error = null }) => {
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        px: { xs: 2, md: 4 },
        py: 8,
        mx: "auto",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        mb={4}
        color="text.primary"
      >
        Top Wears For Women
      </Typography>
      {/* Loading */}
      {loading && (
        <Box textAlign="center" py={4}>
          <CircularProgress />
          <Typography mt={1} color="text.secondary">
            Loading Top Wear Products...
          </Typography>
        </Box>
      )}
      {/* Error */}
      {error && (
        <Typography
          textAlign="center"
          color="error"
          fontWeight={600}
          fontSize="1.2rem"
        >
          {error}
        </Typography>
      )}
      {!loading && !error && <ProductsGrid products={dummyWomenTopWear} />}
    </Box>
  );
};

export default TopWearForWomen;
