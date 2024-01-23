import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

// configure store is redux's job
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
