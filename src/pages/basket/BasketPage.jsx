import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import './basketPage.css'
import {Box, Button} from "@mui/material";
import image from './images/img_3.png'
import {productSizes} from "../../components/cap-details/cap-details-items";
import BasketForm from "./basketForm";

const BasketPage = () => {
  const [counter, setCounter] = useState(1)
  const [price, setPrice] = useState(3200)
  const [size, setSize] = useState(0)
  const [active, setActive] = useState('unable')
  const onIncrease = () => {
    setCounter(counter + 1)
    setPrice(price + price / counter)
  };
  const onDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1)
      setPrice(price - price / counter)
    }
  };
  const onSetSize = (item) => {
    setSize(item)
  }
  const onActive = (name) => {
    setActive(name)

    if (active === 'active') {
      setActive('psize')
    }
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
            {/* Здесь будет обьекты (кепка) из store*/}
            <li>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: {xs: "column", md: "row"},
                  pb: "30px"
                }}
                className='basket-list__item'
              >

                <Box sx={{maxWidth: {xs: "25%", md: "15%"}}}><img style={{width: "100%"}} src={image} alt=""/></Box>

                <div className="quantity">
                  <div className="number">
                    <button className="number-minus" type="button" onClick={onDecrease}>-</button>
                    <input type="number" min='0' value={counter} readOnly/>
                    <button className="number-plus" type="button" onClick={onIncrease}>+</button>
                  </div>
                </div>

                <div className="size">
                  <input
                    className={active === 'S' ? "active" : active !== 'active' ? 'psize' : 'psize'}
                    type={"button"}
                    onClick={() => {
                      onSetSize(productSizes[0].size);
                      onActive('S')
                    }} value={productSizes[0].size}
                  />
                </div>

                <Box
                  sx={{
                    textAlign: {xs: "center", md: "left"}
                  }}
                  className='cap-info'
                >
                  <span className='cap-info__name'>New ERA </span>
                  <br/>
                  <span className='cap-info__brand'>black snapback 59 fifty</span>
                </Box>

                <div className='buy-info'><span className='price'>{price}сом</span></div>
              </Box>
            </li>
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
        </Box>
      </Box>
    </div>
  );
}

export default BasketPage;
