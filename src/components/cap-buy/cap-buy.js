import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart, setItemInCart, updateItemInCart} from "../../redux/reducers/cart/reducer";
import "./cap-buy.css"

const CapBuy = ({cap, children, classname}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemInCart = items.some(item => item.id === cap.id)
  // const isItemInCart = items.some(item => item.name === cap.name)
  // const isItemInCart = items.filter(item => item.name === cap.name)
  // const isItemInCart = items.includes(cap.name)
  // console.log(items.filter(item => item.name === cap.name))

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(cap.id))
    } else {
      dispatch(setItemInCart(cap))
    }
  }

  return (
    <div className='cap-buy'>
      <button className={classname}
              onClick={handleClick}>{children || isItemInCart ? "Товар добавлен в корзину" : 'Добавить в корзину'}</button>
    </div>)
}

export default CapBuy