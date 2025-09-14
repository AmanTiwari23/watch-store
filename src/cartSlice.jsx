import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name:"mycart",
   initialState:{
     cart:[]
   },
   reducers:{
   
    addTocart:(state,actions)=>{
      const status = state.cart.filter(key => key.id == actions.payload.id);
      if(status.length>=1){
        alert("product Already added")
      }
      else{
        state.cart.push(actions.payload);
      }
    }

   }

});

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;