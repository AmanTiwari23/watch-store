import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name:"mycart",
   initialState:{
     cart:[]
   },
   reducers:{
   
    addTocart:(state,actions)=>{

    }

   }

});

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;