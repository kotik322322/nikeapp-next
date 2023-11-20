// "use client";

import { IItem } from "@/types";
import Image from "next/image";
import Link from "next/link";


interface ItemProps {
  item: IItem;
}

const Item = ({ item }: ItemProps) => {
  return (
    <Link
      key={item?._id}
      href={{
        pathname: `products/${item._id}`,
      }}
      className="max-w-[430px] relative bg-[#f6f6f6] "
    >
      <span className="px-3 py-1 rounded-full absolute top-3 right-5 bg-[#e5e5e5] text-sm">New Arrival</span>
      <Image src={item.mainImg} alt="Main Image" width={300} height={300} className=""/>
      <div className="flex flex-col gap-y-2 py-3">
        <h4 className="text-base ">{item.title}</h4>
        <span>{item.price} $</span>
      </div>
    </Link>
  );
};

export default Item;
