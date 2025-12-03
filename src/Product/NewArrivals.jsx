import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const dummyArrivals = [
  {
    _id: "1",
    name: "Classic Denim Jacket",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress",
  },
  {
    _id: "2",
    name: "Trendy Oversized Hoodie",
    price: 59.5,
    image:
      "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg?auto=compress",
  },
  {
    _id: "3",
    name: "Modern Street Shirt",
    price: 45.0,
    image:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress",
  },
  {
    _id: "4",
    name: "Urban Fit Pants",
    price: 50.0,
    image:
      "https://images.pexels.com/photos/7679678/pexels-photo-7679678.jpeg?auto=compress",
  },
  {
    _id: "5",
    name: "Classic Denim Jacket",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress",
  },
  {
    _id: "6",
    name: "Trendy Oversized Hoodie",
    price: 59.5,
    image:
      "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg?auto=compress",
  },
  {
    _id: "7",
    name: "Modern Street Shirt",
    price: 45.0,
    image:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress",
  },
  {
    _id: "8",
    name: "Urban Fit Pants",
    price: 50.0,
    image:
      "https://images.pexels.com/photos/7679678/pexels-photo-7679678.jpeg?auto=compress",
  },
];

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // DRAG-TO-SCROLL
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScrollCheck = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scrollLeftHandler = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScrollCheck);
    return () => el.removeEventListener("scroll", handleScrollCheck);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        position: "relative",
      }}
    >
      {/* Title */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Explore New Arrivals
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
          Upgrade your look with the latest trends curated just for you.
        </Typography>
      </Box>
      {/* LEFT SCROLL BUTTON */}
      <IconButton
        onClick={scrollLeftHandler}
        disabled={isAtStart}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 3,
          zIndex: 10,
          transition: "0.2s",
          "&:hover": { bgcolor: "grey.200" },
          "&.Mui-disabled": {
            bgcolor: "grey.300",
            boxShadow: "none",
            opacity: 0.8,
            cursor: "not-allowed",
          },
          "&.Mui-disabled svg": {
            color: "grey.600",
          },
        }}
      >
        <KeyboardArrowLeftIcon fontSize="large" />
      </IconButton>

      <Box
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          px: 2,
          cursor: isDragging ? "grabbing" : "grab",
          scrollBehavior: "smooth",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
          position: "relative",
        }}
      >
        {/* CARDS */}
        {dummyArrivals.map((product) => (
          <Card
            key={product._id}
            sx={{
              minWidth: { xs: 280, sm: 300, lg: 350 },
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              boxShadow: 4,
              bgcolor: "background.paper",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              draggable="false"
              sx={{
                height: 400,
                objectFit: "cover",
                transition: "transform 300ms",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />

            {/* OVERLAY */}
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                color: "common.white",
                textAlign: "center",
                py: 2,
              }}
            >
              <Typography
                component={Link}
                to={`/product/${product._id}`}
                sx={{
                  color: "common.white",
                  textDecoration: "none",
                  fontWeight: 600,
                  display: "block",
                  "&:hover": { color: "grey.300" },
                }}
              >
                {product.name}
              </Typography>
              <Typography variant="body2">${product.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      {/* RIGHT SCROLL BUTTON */}
      <IconButton
        onClick={scrollRightHandler}
        disabled={isAtEnd}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 3,
          zIndex: 10,
          transition: "0.2s",
          "&:hover": { bgcolor: "grey.200" },

          "&.Mui-disabled": {
            bgcolor: "grey.300",
            boxShadow: "none",
            opacity: 0.8,
          },

          "&.Mui-disabled svg": {
            color: "grey.600",
          },
        }}
      >
        <KeyboardArrowRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default NewArrivals;
