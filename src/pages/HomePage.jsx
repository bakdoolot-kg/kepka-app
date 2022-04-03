import React from "react";
import { HomeBanner, ProductsRow } from "../components";
import SecondHomeBanner from '../components/second-home-banner/Second-home-banner'

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <SecondHomeBanner />
      <ProductsRow />
    </div>
  );
};

export default HomePage;