import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/Common/Footer";
import { Box } from "@mui/material";
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
      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, pt: "64px" }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export default UserLayout;
