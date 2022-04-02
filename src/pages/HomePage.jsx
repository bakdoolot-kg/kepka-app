import React from "react";
import { HomeBanner, ProductsRow } from "../components";
import TopSellers from "../components/top-sellers";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeBanner />
      <ProductsRow />
        <TopSellers />
        <Footer />
    </div>
  );
};

export default HomePage;
