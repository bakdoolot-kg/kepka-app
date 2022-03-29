import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

// Components
import {Header} from "./components"
import TopSellers from "./components/top-sellers";

// Pages
import {HomePage, CatalogPage, BasketPage, BrandsPage, AboutUsPage} from './pages'

const CustomRouter = () => {
   return (
      <Router>
         <Header/>

         <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/catalog/' component={CatalogPage}/>
            <Route path='/basket/' component={BasketPage}/>
            <Route path='/brands/' component={BrandsPage}/>
            <Route path='/about-us/' component={AboutUsPage}/>
         </Switch>
         <TopSellers/>
      </Router>
   )
}
//from
export default CustomRouter;
