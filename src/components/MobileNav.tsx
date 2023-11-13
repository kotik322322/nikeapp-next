"use client";
import React from "react";
import burgerIcon from "../assets/images/svg-icons/burger-menu.svg";
import iconClose from "../assets/images/svg-icons/close.svg";
import bagIcon from "../assets/images/svg-icons/bagIcon.svg";
import likeIcon from "../assets/images/svg-icons/like.svg";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

const links = [
  {
    title: "All",
    link: "/all",
  },
  {
    title: "Men",
    link: "/men",
  },
  {
    title: "Women",
    link: "/women",
  },
  {
    title: "Kids",
    link: "/kids",
  },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden ">
      {/* burger icon  */}
      <button
        onClick={toggleMenu}
        className="rounded-full p-1.5 hover:bg-grey hoverEffect "
      >
        <Image
          src={burgerIcon}
          alt="Burger Menu Button"
          width={24}
          height={24}
        />
      </button>
      {/* burger icon end */}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >


          <nav className="w-full pl-12 py-6 fixed top-0 right-0 bottom-0  bg-white z-20 flex flex-col justify-between">
            {/* close button  */}
            <button
              className="ml-auto mr-6 rounded-full p-1.5 hover:bg-grey hoverEffect"
              onClick={toggleMenu}
            >
              <Image src={iconClose} alt="Close Icon" width={24} height={24} />
            </button>
            {/* close button end */}
            <Logo width={100} height={100}  onClick={toggleMenu}/>

            {/* Links  */}
            <ul className="flex flex-col  gap-y-8 font-semibold">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.link} >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Links End */}

            <Sidebar />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
