import React from "react";
import { HomeBanner, ProductsRow } from "../components";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <ProductsRow />
    </div>
  );
};

export default HomePage;
