"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Category from "@/components/Category";
// import images
import menImg from "../../assets/images/category/men.png";
import womenImg from "../../assets/images/category/women.png";
import kidsImg from "../../assets/images/category/kids.png";

const Links = [
  {
    label: "Men",
    link: "men",
    img: menImg,
    bg: "#2d2e30",
  },
  {
    label: "Women",
    link: "women",
    img: womenImg,
    bg: "#b3e141",
  },
  {
    label: "Kids",
    link: "kids",
    img: kidsImg,
    bg: "#58462d",
  },
];

const Products = () => {
  return (
    <div className="overflow-hidden">
      <ul className="w-full h-screen flex items-center">
        {Links.map((link) => (
          <motion.li
            style={{ background: link.bg }}
            initial={{ width: "100%" }}
            whileHover={{
              width: ["100%", "220%", "180%", "400%"],
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            className="w-1/3 h-full "
            key={link.label}
          >
            <Link
              className="w-full h-full flex items-center justify-center"
              href={`/products/${link.link}`}
            >
              <Category category={link.label} img={link.img} />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
