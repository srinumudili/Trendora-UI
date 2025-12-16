import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/Common/Footer";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Toolbar />
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default UserLayout;
