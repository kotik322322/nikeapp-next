import { ICartProduct, IProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface StoreState {
  cartProducts: ICartProduct[],

}

const initialState: StoreState = {
  cartProducts: []
};



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: StoreState, action: PayloadAction<IProduct>) => {

      const existingProduct : ICartProduct | undefined = state.cartProducts.find(
        (item) => item._id === action.payload._id
      );
      if(existingProduct) {
        existingProduct.quantity += 1
      } else {
        const tempProduct: ICartProduct = { ...action.payload, quantity: 1 };
        state.cartProducts.push(tempProduct)
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
