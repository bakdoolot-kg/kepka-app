import React from "react";
import {useDispatch} from "react-redux";
import {setItemInCart} from "../../redux/cart/reducer";
import "./cap-buy.css"

export const CapBuy = ({cap}) => {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(cap))
  }

  return (
    <div className='cap-buy'>
      <button className='cap-buy__price' onClick={handleClick}>Добавить в корзину</button>
    </div>)
}