import Image from "next/image";
import icon from "../assets/images/explore/men.jpg";
import Link from "next/link";
import { IoBagCheckOutline } from "react-icons/io5";
import { IProduct } from "@/types";


interface WishListProductProps {
  product : IProduct
}

const WishListProduct = ({product}: WishListProductProps) => {
  return (
    <div className="flex items-center gap-x-4 ">
      <Image src={product.mainImg} alt="Product icon" width={100} height={100} />

      <div className="flex flex-col items-center justify-center gap-y-4">
        <h4 className="font-medium text-base">{product.title}</h4>

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