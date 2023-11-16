import searchIcon from "../assets/images/svg-icons/search.svg";
import likeIcon from "../assets/images/svg-icons/like.svg";
import bagIcon from "../assets/images/svg-icons/bagIcon.svg";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    link: "/wishlist",
    imgSrc: likeIcon,
    alt: "Like Icon",
    width: 24,
    height: 24,
  },
  {
    link: "/cart",
    imgSrc: bagIcon,
    alt: "Cart Icon",
    width: 24,
    height: 24,
  },
];

const Sidebar = () => {
  return (
    <div className=" flex items-center gap-x-3 ">
      <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect">
        <Image src={searchIcon} alt="search icon" width={24} height={24} />
      </button>

      {links?.map((item) => {
        return (
          <Link
            key={item.link}
            href={item.link}
            className="relative w-[36px] h-[36px] flex items-center justify-center rounded-full hoverEffect"
          >
            <Image
              src={item.imgSrc}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className=""
            />
            <span className="absolute -top-1 -right-2 w-5 h-5 flex justify-center items-center rounded-full bg-grey">
              3
            </span>
          </Link>
        );
      })}
      {/* sidebar  end */}
    </div>
  );
};

export default Sidebar;
