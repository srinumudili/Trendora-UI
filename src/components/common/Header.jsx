import { AppBar, Container, Toolbar } from "@mui/material";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#14213D",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: 2,
        height: 64,
        zIndex: 1400,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 64 }}>
          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
