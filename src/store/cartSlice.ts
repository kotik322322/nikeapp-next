import { ICartProduct, IProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
  cartProducts: ICartProduct[];
  cartTotalQuantity: number;
}

const initialState: StoreState = {
  cartProducts: [],
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //addToCart
    addToCart: (state: StoreState, action: PayloadAction<IProduct>) => {
      const existingProduct: ICartProduct | undefined = state.cartProducts.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const tempProduct: ICartProduct = { ...action.payload, quantity: 1 };
        state.cartProducts.push(tempProduct);
      }
    },
    //increment
    increment: (state: StoreState, action: PayloadAction<ICartProduct>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      state.cartProducts[productIndex].quantity += 1;
    },
    //increment
    decrement: (state: StoreState, action: PayloadAction<ICartProduct>) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      state.cartProducts[productIndex].quantity -= 1;
      if (action.payload.quantity <= 1) {
        state.cartProducts[productIndex].quantity = 1;
      }
    },
    removeFromCart: (
      state: StoreState,
      action: PayloadAction<ICartProduct>
    ) => {
      const newCart: ICartProduct[] = state.cartProducts.filter(
        (product) => product._id !== action.payload._id
      );
      state.cartProducts = newCart;
    },
    clearCart: (state: StoreState) => {
      state.cartProducts = [];
    },
    actualCartQuantity: (state: StoreState) => {
      const quantity = state.cartProducts.reduce(
        (accumulator: number, product: ICartProduct) => {
          return accumulator + product.quantity;
        },
        0
      );

      state.cartTotalQuantity = quantity
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart, clearCart, actualCartQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
