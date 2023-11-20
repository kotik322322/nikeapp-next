"use client"

import { IItem } from "@/types";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps {
  item: IItem;
  // path: string
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const path = context.resolvedUrl;

//    return {
//       props: {
//          path,
//      },
//    };
// };

const Item = ({ item,}: ItemProps) => {
  
  const pathnameLink = usePathname()
  // console.log(pathnameLink)
  return (
    <Link
    key={item?._id}
      // href={{ pathname: `/${item?._id}`, query: { _id: item?._id } }}
      href={{
        pathname:  `products/${item._id}`
      }}
      // href={{
      //   pathname: pathnameLink,
      //   query: { _id:item?._id },
      // }}
      className="max-w-[430px] py-4 hover:scale-105 effect"
    >
      <Image src={item.mainImg} alt="Main Image" width={400} height={400} />
      <div className="flex flex-col gap-y-2 mt-3 p-2">
        <h4 className="text-base ">{item.title}</h4>
        <span>{item.price} $</span>
      </div>
    </Link>
  );
};

export default Item;
