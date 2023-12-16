"use client";

import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { ICartProduct, CartState } from "@/types";
import { clearCart } from "@/store/cartSlice";
import toast from "react-hot-toast";
import Link from "next/link";

const Cart = () => {
  const { cartProducts: data } = useSelector((state: CartState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {data && data?.length > 0 ? (
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
      ) : (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-4 text-center">
          Your cart is empty &#129303;
          <Link
            href={"/products/all"}
            className="p-2 w-full flex items-center justify-center rounded-full text-sm text-white bg-black hover:bg-bgHover duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
