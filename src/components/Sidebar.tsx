import searchIcon from "../assets/images/svg-icons/search.svg";
import likeIcon from "../assets/images/svg-icons/like.svg";
import bagIcon from "../assets/images/svg-icons/bagIcon.svg";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actualCartQuantity } from "@/store/cartSlice";
import { StateProps } from "@/types";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state: StateProps) => state.cart);
  const { cartTotalQuantity } = useSelector((state: StateProps) => state.cart);
  console.log(cartProducts);
  useEffect(() => {
    dispatch(actualCartQuantity());
  }, [dispatch, cartProducts]);

  return (
    <div className=" flex items-center gap-x-3 ">
      <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect">
        <Image src={searchIcon} alt="search icon" width={24} height={24} />
      </button>

      <Link
        href={"/wishlist"}
        className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect"
      >
        <Image
          src={likeIcon}
          alt="Like icon"
          width={24}
          height={24}
          className=""
        />
        <span className="absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full bg-grey">
          4
        </span>
      </Link>

      <Link
        href={"/cart"}
        className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect"
      >
        <Image
          src={bagIcon}
          alt="Bag icon"
          width={24}
          height={24}
          className=""
        />
        <span className="absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full bg-grey">
          {cartTotalQuantity}
        </span>
      </Link>
      {/* sidebar  end */}
    </div>
  );
};

export default Sidebar;
