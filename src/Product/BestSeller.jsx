import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ProductDetails from "./ProductDetails";

const BestSeller = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        my: 10,
        px: 2,
        py: 6,
        borderRadius: 4,
        bgcolor: "grey.50",
        boxShadow: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
        <StarIcon sx={{ color: "warning.main", mr: 1 }} />
        Best Seller
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <ProductDetails />
      </Box>
    </Box>
  );
};

export default BestSeller;
