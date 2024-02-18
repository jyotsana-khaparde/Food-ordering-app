import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

// configure store is redux's job
const appStore = configureStore({
  // this reducer contains lot's of small parts of reducer throughout the application
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
