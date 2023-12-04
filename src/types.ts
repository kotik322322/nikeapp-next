export interface IProduct {
  _id: string;
  mainImg: string;
  images: string[];
  title: string;
  description: string;
  price: number;
  newPrice: number;
  isNew?: boolean;
  category?: string;
  sizes?: string[];
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface StateProps {
  cart: {
    cartProducts: [],
    cartTotalQuantity: number
  }
}

export interface StoreState {
  cartProducts: ICartProduct[];
  cartTotalQuantity: number;
}