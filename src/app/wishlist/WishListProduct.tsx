"use client";
import Image from "next/image";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";
import { IProduct } from "@/types";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "@/store/wishlistSlice";
import { AiOutlineClose } from "react-icons/ai";

interface WishListProductProps {
  product: IProduct;
}

const WishListProduct = ({ product }: WishListProductProps) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-2 flex items-center gap-x-3">
      <Image
        src={product.mainImg}
        alt="Product icon"
        width={100}
        height={100}
      />

      <div className="w-full flex flex-col items-center justify-center gap-y-4">
        <div className="w-full flex flex-col items-center justify-between">
          <button
            onClick={() => dispatch(removeFromWishlist(product))}
            className="w-6 h-6 flex items-center justify-center rounded-full text-white ml-auto bg-black hover:bg-bgHover duration-200" 
          >
            <AiOutlineClose />
          </button>
          <h4 className="font-medium text-base">{product.title}</h4>
        </div>

        <div className="w-full flex flex-col gap-y-2">
          <button className="w-full py-1 flex items-center justify-center gap-x-3 rounded-full bg-black text-sm text-white hover:bg-bgHover duration-200">
            Move to Cart
            <IoBagCheckOutline className="text-xl" />
          </button>
          <Link
            href={`/products/${product.category}/${product._id}`}
            className="w-full py-1 flex items-center justify-center gap-x-4 border border-1 border-black  rounded-full  text-sm text-black hover:shadow-xl duration-200"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishListProduct;
