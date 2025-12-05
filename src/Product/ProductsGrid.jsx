import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product._id}>
          <Card
            component={Link}
            to={`/product/${product._id}`}
            sx={{
              textDecoration: "none",
              borderRadius: 3,
              overflow: "hidden",
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              transition: "0.3s ease-in-out",

              "&:hover": {
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                transform: "translateY(-4px)",
              },
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                width: "100%",
                height: 260,
                overflow: "hidden",
                borderBottom: "1px solid #eee",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.4s ease",

                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>

            {/* Text Content */}
            <CardContent sx={{ p: 2 }}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
                sx={{
                  mb: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {product.name}
              </Typography>

              <Typography
                variant="h6"
                fontWeight={700}
                color="primary.main"
                sx={{ mt: "auto" }}
              >
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
