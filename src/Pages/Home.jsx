import HeroBanner from "../Layout/HeroBanner";
import GenderCollection from "../Product/GenderCollection";
import NewArrivals from "../Product/NewArrivals";
import BestSeller from "../Product/BestSeller";
import TopWearForWomen from "../Product/TopWearForWomen";
import { Box } from "@mui/material";
import FeaturedCollection from "../Product/FeaturedCollection";
import FeaturedSection from "../Product/FeaturedSection";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <GenderCollection />
      <NewArrivals />
      <BestSeller />
      <TopWearForWomen />
      {/* Featured Sections */}
      <Box
        component="section"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          py: 6,
        }}
      >
        <FeaturedCollection />
      </Box>
      <Box
        component="section"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          py: 6,
        }}
      >
        <FeaturedSection />
      </Box>
    </>
  );
};

export default Home;
