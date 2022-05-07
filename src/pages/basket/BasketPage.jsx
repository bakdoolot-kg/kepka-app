import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {Box, Button} from "@mui/material";
import {productSizes} from "../../components/cap-details/cap-details-items";
import BasketForm from "./basketForm";
import './basketPage.css'
import CartItem from "../../components/cart-item";

const BasketPage = () => {
  const items = useSelector(state => state.cart.itemsInCart)

  if (items.length < 1) {
    return <h2>Корзина пуста</h2>
  }

  return (
    <div className="basket-page">
      <Box sx={{
        my: {xs: 1, sm: 2, md: 4},
        paddingX: {xs: 2, sm: 2, md: 7, xl: 15},
      }}>
        <Box sx={{
          my: {lg: "30px"}
        }} className="url">
          <NavLink to='/'>
            <span className='url-text'>Hoмe</span>
          </NavLink>
          {'>'}
          <span className='urlCurr'>Корзина</span>
        </Box>

        <Box sx={{
          mt: {xs: "30px", md: "30px"},
          py: {xs: "30px", md: "50px"},
          borderTop: '3px solid #847E7E',
          borderBottom: '3px solid #847E7E'
        }}>
          <ul className='basket-list'>
            {items.map(item => (
              <li>
                <CartItem key={item.id + item.name} data={item} id={item.id} name={item.name}
                          brand={item.brand} count={item.count} price={item.cost} size={item.size}/>
              </li>))}
          </ul>
        </Box>

        <BasketForm/>

        <Box sx={{display: "flex", justifyContent: "flex-end"}}>
          <Button
            variant="contained"
            className='buy-cap'
            sx={{
              minWidth: {md: "450px"},
              fontSize: {md: "24px"},
              backgroundColor: "#FDDB16",
              color: "#000000",
              textTransform: "capitalize",
              borderRadius: "15px",
              ":hover": {
                bgcolor: "#FDDB16",
              },
            }}
          >
            Купить
          </Button>

          {/*<CapDetail productSizes={productSizes} onDecrease={onDecrease} onIncrease={onIncrease} counter={counter} price={price}/>*/}
        </Box>
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => ({})

export default BasketPage;
