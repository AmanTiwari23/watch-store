import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./cartSlice";
import mywishlist from "./wishlistSlice"

const store = configureStore({
    reducer : {
      mycart:myReducer,
      wishlist:mywishlist

    }
});

export default store;