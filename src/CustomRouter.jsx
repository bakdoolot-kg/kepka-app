import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// Components
import { Header } from "./components";

// Pages
import {
  HomePage,
  CatalogPage,
  BasketPage,
  BrandsPage,
  AboutUsPage,
  CapDetailsPage,
} from "./pages";
import ScrollToTop from "./services/scroll-to-top/scroll-to-top";

const CustomRouter = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/catalog/" exact component={CatalogPage} />
        <Route path="/basket/" exact component={BasketPage} />
        <Route path="/brands/" exact component={BrandsPage} />
        <Route path="/about-us/" exact component={AboutUsPage} />
        <Route path="/catalog/cap-details/:id" exact render={({ match })=>{
          const selectedItemId=match.params.id;
          return <CapDetailsPage selectedItemId={selectedItemId}/>
        }}/>
      </Switch>
    </Router>
  );
};

export default CustomRouter;
