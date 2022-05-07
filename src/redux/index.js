import {configureStore, createStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import capsReducer from './reducers/caps/reducer'
import cartReducer from './reducers/cart/reducer'
import rootReducers from "./reducers/rootReducers";

export const store = configureStore({
  reducer: {
    caps: capsReducer,
    cart: cartReducer
  },
})

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, rootReducers)

// export const store = createStore(pReducer)