import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart} from "../../redux/reducers/cart/reducer";
import {Box, Button, ToggleButton, ThemeProvider, ToggleButtonGroup} from "@mui/material";
import theme from "../../theme-mui/theme";

const CartItem = ({data, count, name, price, brand, id, size}) => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.itemsInCart)
  const [cartItem, setCartItem] = useState(data)
  const [counter, setCounter] = useState(data.count)
  const [cost, setPrice] = useState(data.cost)
  const [capSize, setCapSize] = useState(size)
  const [active, setActive] = useState('unable')

  console.log(capSize)
  console.log(size.length)

  // const sizeOfProduct = capSize.map((item) => {
  //   setCapSize(item.value)
  //   return (
  //     <div key={item.id} className="psize" >
  //       <p className='sizeText'>{item.value}</p>
  //     </div>
  //   );
  // });

  // const sizeOfProduct = capSize > 1 ?
  //   capSize.map((item) => {
  //     setCapSize(item.value)
  //     return (<div key={item.id} className='psize'><p className='sizeText'>{item.value}</p></div>)}) :
  //   capSize

  const handleSize = (event, newSize) => {
    if (newSize !== null) {
      setCapSize(newSize)
    }
  };

  const onIncrease = () => {
    setCounter(counter + 1)
    setPrice(cost + cost / counter)
    // dispatch(updateItemInCart(data))
  };

  const onDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      setPrice(cost - cost / counter)
    }
  };
  const onSetSize = (item) => {
    setCapSize(item)
  }
  const onActive = (name) => {
    setActive(name)

    if (active === 'active') {
      setActive('psize')
    }
  }

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id))
  }

  // <input
  //   className={active === size ? "active" : active !== 'active' ? 'psize' : 'psize'}
  //   type={"button"}
  //   onClick={() => {
  //     onSetSize(sizeOfProduct);
  //     onActive(sizeOfProduct)
  //   }}
  //   value={capSize}
  // />

  // useEffect(  () => {
  //   setCartItem(data)
  // }, [])

  // {cartItem.size.length > 0
  //   ? capSize.map(item => {
  //     return (
  //       <Button
  //         key={item.id}
  //         className='size-button'
  //         variant='outlined'
  //         sx={{borderRadius: "10px", minHeight: {xs: "48px"}}}
  //       >{item.value}</Button>)
  //   })
  //   : <input
  //     value='S'
  //     type='button'
  //   />
  // }

  return (
    <ThemeProvider theme={theme}>
      <Box className='cart-item' sx={{
        display: "flex", alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: {xs: "column", md: "row"},
        pb: "30px"
      }}>
        <Box sx={{maxWidth: {xs: "25%", md: "15%"}}}><img style={{width: "100%"}} src={data.image} alt=""/></Box>

        <div className="quantity">
          <div className="number">
            <button className="number-minus" type="button" onClick={onDecrease}>-</button>
            <input type="number" min='0' value={counter} readOnly/>
            <button className="number-plus" type="button" onClick={onIncrease}>+</button>
          </div>
        </div>

        <div className="size">
          <ToggleButtonGroup
            value={capSize}
            exclusive
            onChange={handleSize}
            aria-label={capSize}
          >
            {capSize.length > 1 ?
              capSize.map(item => {
                return (
                  <ToggleButton
                    key={item.id}
                    value={item.value}
                    // className='size-button'
                    className={active === size ? "size-button active" : 'size-button'}
                    variant='outlined'
                    color='sizeBtnNoActive'
                    sx={{borderRadius: "10px", minHeight: {xs: "48px"}}}
                    aria-label={item.value}
                  />)
              })
              : <Button
                color='sizeBtnNoActive'
                className='size-button'
                variant='outlined'
                sx={{borderRadius: "10px", minHeight: {xs: "48px"}}}
                >{capSize[0]}</Button>
            }
          </ToggleButtonGroup>
        </div>

        <Box
          sx={{
            textAlign: {xs: "center", md: "left"}
          }}
          className='cap-info'
        >
          <span className='cap-info__name'>{brand}</span>
          <br/>
          <span className='cap-info__brand'>{name}</span>
        </Box>

        <div className='buy-info'><span className='price'>{cost}сом</span></div>
        <button onClick={handleDeleteClick}>Delete</button>
      </Box>
    </ThemeProvider>
  )
}

export default CartItem