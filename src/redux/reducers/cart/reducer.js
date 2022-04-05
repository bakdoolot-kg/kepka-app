import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
    count: 0
  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload)
      state.count = action.payload.count
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(cap => cap.id !== action.payload)
    },
    updateItemInCart: (state, action) => {
      const prevState = state
      // state.itemsInCart.push(action.payload.count, action.payload.cost)
      // console.log(state.itemsInCart.filter(cap => cap.id === action.payload))

      state.itemsInCart = action.payload
      console.log(prevState)
    }
  }
})

export const {setItemInCart, deleteItemFromCart, updateItemInCart} = cartSlice.actions;
export default cartSlice.reducer;