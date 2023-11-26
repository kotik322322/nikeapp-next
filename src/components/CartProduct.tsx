"use client";

import React from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { IProduct } from "@/types";


const CartProduct = ({product} : {product: IProduct}) => {
  return (
    <div className="flex justify-between items-center border border-grey rounded-md " key={product._id}>
      {/* item photo  */}
      <Link href={`/products/${product.category}/${product._id}`}>
        <Image
          src={product.mainImg}
          alt="Cart Product Logo"
          width={120}
          height={120}
          className=""
        />
      </Link>
      {/* item photo end */}

      <div className="flex flex-col md:flex-row w-full md:justify-around items-center justify-center gap-y-2  ">

        {/* item price  */}
        <span>$ {product.price}</span>
        {/* item price end */}

        {/* item quantity&& increase and decrease  */}
        <div className="flex items-center justify-center gap-x-3 font-semibold text-[12px] md:text-base">
          <button
            className="w-6 h-6  text-center rounded-full  bg-black hover:bg-bgHover text-white"
            // onClick={() => dispatch(decreaseCart(item))}
            >
            -
          </button>

          {/* Item Quantity */}
          <span className="">11</span>
          {/* <span className="">{itemQuantity}</span> */}

          <button
            className="w-6 h-6  text-center rounded-full bg-black hover:bg-bgHover text-white"
            // onClick={() => dispatch(increaseCart(item))}
          >
            +
          </button>
        </div>

        {/* item total  */}
        <span>$ 124</span>
        {/* item total end */}

      </div>

      {/* Delete item*/}
      <button
        className="rounded-full p-[8px] hover:bg-grey duration-200"
        onClick={() => {
          // dispatch(removeFromCart(item));
        }}
      >
        <AiOutlineClose />
      </button>
      {/* Delete item end*/}
    </div>
    // </div>
  );
};

export default CartProduct;

