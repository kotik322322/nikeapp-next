// "use client";

import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="w-full relative bg-[#f6f6f6] border border-grey rounded-sm">
      {product && product.isNew && (
        <span className="px-3 py-1 rounded-full absolute top-3 right-5 bg-grey text-sm z-10">
          New Arrival
        </span>
      )}

      <Link
        key={product?._id}
        href={{
          pathname: `products/${product._id}`,
          
        }}
        // href={{ pathname: "/products", query: { _id: product._id } }}
        className="block overflow-hidden"
      >
        <Image
          src={product.mainImg}
          loading="lazy"
          alt="Main Image"
          width={250}
          height={250}
          className="mx-auto hover:scale-110 duration-200"
        />
      </Link>

      <div className="grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-y-2 p-3 text-sm">
          <h4 className="">{product.title}</h4>
          <span>$ {product.price}</span>
        </div>

        <div>
          <button className="bg-black text-white px-3 py-2 rounded-full text-[12px] hover:bg-bgHover duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
