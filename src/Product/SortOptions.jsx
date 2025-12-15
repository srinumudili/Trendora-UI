import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mb: 3,
      }}
    >
      <Typography
        sx={{ mr: 2, fontWeight: 500, color: "text.primary" }}
        variant="body1"
      >
        Sort by:
      </Typography>

      <TextField
        select
        size="small"
        value={searchParams.get("sortBy") || ""}
        onChange={handleSortChange}
        sx={{
          minWidth: 180,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <MenuItem value="">Default</MenuItem>
        <MenuItem value="priceAsc">Price: Low to High</MenuItem>
        <MenuItem value="priceDesc">Price: High to Low</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
      </TextField>
    </Box>
  );
};

export default SortOptions;
