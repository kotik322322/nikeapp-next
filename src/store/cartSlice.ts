import { IProduct } from '@/types';
import { createSlice } from "@reduxjs/toolkit"

interface StoreState {
  productData: IProduct[]
}

const initialState: StoreState = {
  productData: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct  = state.productData.find((item: IProduct) => item._id === action.payload._id)
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      const existingProduct  = state.productData.find((item: IProduct) => item._id === action.payload._id)
  
      if(existingProduct) {
        
      }
    }

  }
})

export const {
  addToCart
} = cartSlice.actions

export default cartSlice.reducer