import {
  Box,
  Button,
  Drawer,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortOptions from "../Product/SortOptions";
import ProductsGrid from "../Product/ProductsGrid";
import FilterSidebar from "../Product/FilterSideBar";

const products = [
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
  {
    _id: "w5",
    name: "Women’s Floral Top",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress",
  },
  {
    _id: "w6",
    name: "Trendy Pink Hoodie",
    price: 42.0,
    image:
      "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg?auto=compress",
  },
  {
    _id: "w7",
    name: "Casual Denim Shirt",
    price: 34.5,
    image:
      "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress",
  },
  {
    _id: "w8",
    name: "Mint Green Crop Top",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/7679678/pexels-photo-7679678.jpeg?auto=compress",
  },
  {
    _id: "w9",
    name: "Women’s Floral Top",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress",
  },
  {
    _id: "w10",
    name: "Trendy Pink Hoodie",
    price: 42.0,
    image:
      "https://images.pexels.com/photos/5325919/pexels-photo-5325919.jpeg?auto=compress",
  },
  {
    _id: "w11",
    name: "Casual Denim Shirt",
    price: 34.5,
    image:
      "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress",
  },
  {
    _id: "w12",
    name: "Mint Green Crop Top",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/7679678/pexels-photo-7679678.jpeg?auto=compress",
  },
];

const Collection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback((e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMd) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [handleClickOutside, isMd]);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      mt={4}
      minHeight="100vh"
    >
      {/* Mobile Filter Button */}
      {!isMd && (
        <Box px={2} mb={2}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FilterListIcon />}
            onClick={toggleSidebar}
          >
            Filters
          </Button>
        </Box>
      )}

      {/* SIDEBAR — Drawer for mobile, Sticky for desktop */}
      {isMd ? (
        <Box
          width="300px"
          bgcolor="background.paper"
          borderRight="1px solid"
          borderColor="divider"
          ref={sidebarRef}
        >
          <FilterSidebar />
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={toggleSidebar}
          ModalProps={{
            sx: {
              zIndex: 2000,
            },
          }}
          slotProps={{
            paper: {
              sx: { width: 300 },
            },
          }}
        >
          <Box ref={sidebarRef}>
            <FilterSidebar />
          </Box>
        </Drawer>
      )}

      {/* MAIN CONTENT */}
      <Box
        flexGrow={1}
        bgcolor="background.default"
        p={{ xs: 2, lg: 4 }}
        minHeight="100vh"
      >
        {/* Sort Options */}
        <Box mb={3}>
          <SortOptions />
        </Box>

        {/* Products Grid */}
        <ProductsGrid products={products} />
      </Box>
    </Box>
  );
};

export default Collection;
