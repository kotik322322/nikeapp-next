import { IProduct } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface WishlistState {
  wishList: IProduct[]
}

const initialState: WishlistState = {
  wishList: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state: WishlistState, action: PayloadAction<IProduct>) => {
      const existingProduct:IProduct | undefined = state.wishList.find((product: IProduct) => product._id === action.payload._id)

      if(existingProduct) {
        return
      } else {
        state.wishList.push(action.payload)
      }
    },
    removeFromWishlist: (state, action) => {},
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
