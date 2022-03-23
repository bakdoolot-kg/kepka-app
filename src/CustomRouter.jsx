import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { Header } from "./components";

// Pages
import {
  HomePage,
  CatalogPage,
  BasketPage,
  BrandsPage,
  AboutUsPage,
} from "./pages";

const CustomRouter = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/catalog/" component={CatalogPage} />
        <Route path="/basket/" component={BasketPage} />
        <Route path="/brands/" component={BrandsPage} />
        <Route path="/about-us/" component={AboutUsPage} />
      </Switch>
    </Router>
  );
};

export default CustomRouter;
