import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyster", "Silk"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style"];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    const minPrice = Number(params.minPrice) || 0;
    const maxPrice = Number(params.maxPrice) || 100;

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice,
      maxPrice,
    });

    setPriceRange([minPrice, maxPrice]);
  }, [searchParams]);

  // Update URL
  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, value]) => {
      if (value === "" || value === null || value === undefined) return;
      if (Array.isArray(value) && value.length === 0) return;
      if (Array.isArray(value)) {
        params.set(key, value.join(","));
      } else {
        params.set(key, value);
      }
    });

    setSearchParams(params);

    navigate(
      {
        search: `?${params.toString()}`,
      },
      { replace: true }
    );
  };

  // Handle checkbox / radio / input
  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      newFilters[name] = checked
        ? [...newFilters[name], value]
        : newFilters[name].filter((item) => item !== value);
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  //Handle price range
  const handlePriceChange = (_, newValue) => {
    setPriceRange(newValue);
  };

  const hanldePriceCommit = (_, newValue) => {
    const newFilters = {
      ...filters,
      minPrice: newValue[0],
      maxPrice: newValue[1],
    };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: 260,
        p: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Filters
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {/* CATEGORY */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Category
        </Typography>
        <RadioGroup
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              value={category}
              control={<Radio />}
              label={category}
            />
          ))}
        </RadioGroup>
      </Box>

      {/* GENDER */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Gender
        </Typography>
        <RadioGroup
          name="gender"
          value={filters.gender}
          onChange={handleFilterChange}
        >
          {genders.map((gender) => (
            <FormControlLabel
              key={gender}
              value={gender}
              control={<Radio />}
              label={gender}
            />
          ))}
        </RadioGroup>
      </Box>

      {/* PRICE RANGE */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500}>
          Price Range
        </Typography>

        <Slider
          value={priceRange}
          valueLabelDisplay="auto"
          onChange={handlePriceChange}
          onChangeCommitted={hanldePriceCommit}
          min={0}
          max={100}
          sx={{ mt: 2 }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>${priceRange[0]}</Typography>
          <Typography>${priceRange[1]}</Typography>
        </Box>
      </Box>

      {/* COLOR */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Color
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {colors.map((color) => (
            <Box
              key={color}
              component="span"
              sx={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border:
                  filters.color === color
                    ? "3px solid #1976d2"
                    : "1px solid #ccc",
                cursor: "pointer",
                bgcolor: color.toLowerCase(),
              }}
              onClick={() =>
                handleFilterChange({
                  target: {
                    name: "color",
                    value: color,
                    type: "radio",
                  },
                })
              }
            />
          ))}
        </Box>
      </Box>

      {/* SIZE */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Size
        </Typography>

        <FormGroup>
          {sizes.map((size) => (
            <FormControlLabel
              key={size}
              label={size}
              control={
                <Checkbox
                  name="size"
                  value={size}
                  checked={filters.size.includes(size)}
                  onChange={handleFilterChange}
                />
              }
            />
          ))}
        </FormGroup>
      </Box>

      {/* MATERIAL */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Material
        </Typography>

        <FormGroup>
          {materials.map((material) => (
            <FormControlLabel
              key={material}
              label={material}
              control={
                <Checkbox
                  name="material"
                  value={material}
                  checked={filters.material.includes(material)}
                  onChange={handleFilterChange}
                />
              }
            />
          ))}
        </FormGroup>
      </Box>

      {/* BRAND */}
      <Box mb={3}>
        <Typography variant="subtitle1" fontWeight={500} mb={1}>
          Brand
        </Typography>

        <FormGroup>
          {brands.map((brand) => (
            <FormControlLabel
              key={brand}
              label={brand}
              control={
                <Checkbox
                  name="brand"
                  value={brand}
                  checked={filters.brand.includes(brand)}
                  onChange={handleFilterChange}
                />
              }
            />
          ))}
        </FormGroup>
      </Box>
    </Paper>
  );
};

export default FilterSidebar;
