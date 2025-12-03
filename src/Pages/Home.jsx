import React from "react";
import HeroBanner from "../Layout/HeroBanner";
import GenderCollection from "../Product/GenderCollection";
import NewArrivals from "../Product/NewArrivals";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <GenderCollection />
      <NewArrivals />
    </>
  );
};

export default Home;
