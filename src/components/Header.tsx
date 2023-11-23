"use client"
//Components
import Container from "./Container";
import Sidebar from "./Sidebar";

//NEXT
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

//Images
import MobileNavigation from "./MobileNav";
import Logo from "./Logo";


const links = [
  {
    title: "All",
    link: "all",
  },
  {
    title: "Men",
    link: "men",
  },
  {
    title: "Women",
    link: "women",
  },
  {
    title: "Kids",
    link: "kids",
  },
];

const Header = () => {
  const pathName = usePathname()
   
    return (
    <header className="w-full sticky top-0 right-0 left-0 bg-white shadow-sm z-20">
      <Container>
        <div className="flex items-center justify-between ">

          <Logo width={80} height={80}/>

            
          <ul className="hidden md:flex items-center justify-center gap-x-4 capitalize text-md font-semibold ">
            {links?.map((item, index) => (
              <li key={index}>
                <Link
                  href={`/products/${item?.link}`}
                  className="pb-3 w-full border-b-2 border-transparent hover:border-black transition-all duration-200"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>

              <Sidebar/>
              <MobileNavigation/>

        </div>
      </Container>
    </header>
  );
};

export default Header;
