"use client";
import Container from "@/components/Container";
import WishListProduct from "@/components/WishListProduct";
import { IProduct, WishListState } from "@/types";
import { useSelector } from "react-redux";

const WishList = () => {
  const { wishList } = useSelector((state: WishListState) => state.wishList);
  // console.log(wishList);
  return (
    <Container className="w-full mt-7 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {wishList?.map((product: IProduct) => (
        <WishListProduct product={product} />
      ))}
    </Container>
  );
};

export default WishList;
