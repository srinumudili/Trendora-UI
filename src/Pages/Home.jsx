import React from "react";
import HeroBanner from "../Layout/HeroBanner";
import GenderCollection from "../Product/GenderCollection";
import NewArrivals from "../Product/NewArrivals";
import BestSeller from "../Product/BestSeller";
import TopWearForWomen from "../Product/TopWearForWomen";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <GenderCollection />
      <NewArrivals />
      <BestSeller />
      <TopWearForWomen />
    </>
  );
};

export default Home;
