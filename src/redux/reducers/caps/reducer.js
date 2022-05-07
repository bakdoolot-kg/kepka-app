import { createSlice } from '@reduxjs/toolkit'

const capsSlice = createSlice({
  name: 'caps',
  initialState: {
    currentCap: null
  },
  reducers: {
    setCurrentCap: (state, action) => {
      state.currentCap = action.payload
    },
    deletCurrentCap: (state, action) => {
      state.currentCap = null
    }
  }
});

export const { setCurrentCap, deletCurrentCap} = capsSlice.actions;
export default capsSlice.reducer;