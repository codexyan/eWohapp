import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

// Subscribe
store.subscribe(() => console.log("onchange store : ", store.getState()));

export default store;
