"use client";

import React from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const item = {
  _id: "64d02466db747d48c23a9f29",
  category: "men",
  mainImg:
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/1_spxj1h.webp",
  images: [
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/1_spxj1h.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/2_s82kfe.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307514/shoses/men/4/3_zl0dsk.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307516/shoses/men/4/4_pwxbwy.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/5_odao0l.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307512/shoses/men/4/6_lv9adw.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/7_zxrb8l.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/8_ufly6t.webp",
  ],
  title: "Nike Dunk Low",
  description:
    "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details and throwback hoops flair. The supple leather overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
  price: 114.95,
  newPrice: 110,
  isNew: true,
  sizes: ["2.5", "3.5", "4,5", "5", "6"],
  itemQuantity: 14,
};

const CartProduct = () => {
  return (
    <div className="flex justify-between items-center border border-grey rounded-md">
      {/* item photo  */}
      <Link href={`/products/${item._id}`}>
        <Image
          src={item.mainImg}
          alt="Cart Product Logo"
          width={120}
          height={120}
          className=""
        />
      </Link>
      {/* item photo end */}

      <div className="flex flex-col md:flex-row w-full md:justify-around items-center justify-center gap-y-2  ">

        {/* item price  */}
        <span>$ {item.price}</span>
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

