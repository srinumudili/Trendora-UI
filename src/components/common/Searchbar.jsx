import { Search, Close } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Slide,
  TextField,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/collection/all?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
    setIsOpen(false);
  };
  return (
    <>
      {!isOpen && (
        <IconButton onClick={handleToggle} sx={{ color: "white" }}>
          <Search />
        </IconButton>
      )}

      <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
        <AppBar
          position="fixed"
          sx={{
            background: "#0F1E3D",
            height: "64px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Products..."
                  autoFocus
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{
                    background: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-input": {
                      color: "black",
                    },
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton type="submit">
                            <Search />
                          </IconButton>

                          <IconButton onClick={handleToggle}>
                            <Close />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </form>
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  );
};

export default Searchbar;
