import { combineReducers } from "redux";
// import shopReducer from './shop/shop-reducer'
import cartReducer from "./cart/reducer";

export default combineReducers({
  // shop : shopReducer,
  cart: cartReducer,
});
