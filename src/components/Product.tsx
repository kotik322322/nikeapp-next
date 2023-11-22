// "use client";

import { IItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import FormattedPrice from "./FormattedPrice";

interface ItemProps {
  item: IItem;
}

const Item = ({ item }: ItemProps) => {
  return (
    <div className="w-full relative bg-[#f6f6f6]">
      <span className="px-3 py-1 rounded-full absolute top-3 right-5 bg-grey text-sm z-10">
        New Arrival
      </span>

      <Link
        key={item?._id}
        href={{
          pathname: `products/${item._id}`,
        }}
        className="block overflow-hidden"
      >
        <Image
          src={item.mainImg}
          alt="Main Image"
          width={250}
          height={250}
          className="mx-auto hover:scale-110 duration-200"
        />
      </Link>

      <div className="grid grid-cols-2 place-items-center">
        <div className="flex flex-col gap-y-2 p-3 text-sm">
          <h4 className="">{item.title}</h4>
          <FormattedPrice amount={item.price} />
        </div>

        <div>
          <button className="bg-black text-white px-3 py-2 rounded-full text-[12px] hover:bg-[#4b4b4b] duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
