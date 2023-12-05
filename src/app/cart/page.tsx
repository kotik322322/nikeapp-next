"use client";

import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { ICartProduct, CartState } from "@/types";
import { clearCart } from "@/store/cartSlice";
import toast from "react-hot-toast";

const Cart = () => {
  const { cartProducts: data } = useSelector((state: CartState) => state.cart);
  const dispatch = useDispatch();

  // console.log(data);
  return (
    <Container>
      <h2 className="text-2xl font-semibold my-4">Cart Page</h2>

      <div className="flex flex-col gap-y-3">
        {data &&
          data?.map((product: ICartProduct, index: number) => (
            <CartProduct product={product} key={index} />
          ))}
      </div>

      <button
        className="bg-black w-20 h-5 text-white"
        onClick={() =>
          dispatch(clearCart()) &&
          toast.success(
            <div>
              <span className="font-bold">Product Deleted From Cart</span>
            </div>
          )
        }
      >
        Clear Bag
      </button>
    </Container>
  );
};

export default Cart
