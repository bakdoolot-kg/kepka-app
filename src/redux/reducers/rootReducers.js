import {combineReducers} from "redux";
import capsReducer from './caps/reducer'
import cartReducer from './caps/reducer'

export default combineReducers({
  capsReducer,
  cartReducer
})