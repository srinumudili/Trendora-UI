import WomenCollectionImg from "../assets/womenCollection.jpg";
import MenCollectionImg from "../assets/menCollection.jpg";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const collections = [
  {
    img: WomenCollectionImg,
    alt: "Women's Fashion Collection",
    title: "Women’s Collection",
    link: "/collection/all?gender=Women",
  },
  {
    img: MenCollectionImg,
    alt: "Men's Fashion Collection",
    title: "Men’s Collection",
    link: "/collection/all?gender=Men",
  },
];
const GenderCollection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto" }}>
        {collections.map(({ img, alt, title, link }) => (
          <Grid size={{ xs: 12, sm: 6 }} key={title}>
            <Card
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 3,
                boxShadow: 4,
                cursor: "pointer",
                "&:hover .zoom-img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardMedia
                component="img"
                src={img}
                alt={alt}
                className="zoom-img"
                sx={{
                  height: { xs: 350, md: 500 },
                  objectFit: "cover",
                  transition: "transform 300ms ease",
                }}
              />

              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  bgcolor: "rgba(255,255,255,0.95)",
                  borderRadius: 2,
                  textAlign: "center",
                  py: 3,
                  boxShadow: 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                  }}
                >
                  {title}
                </Typography>

                <Button
                  component={Link}
                  to={link}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 1.5,
                    color: "text.secondary",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GenderCollection;
