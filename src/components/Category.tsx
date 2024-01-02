import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  img: StaticImageData;
  category: string
}

const Category = ({ img, category }: Props) => {
  return (
    <div className="w-full h-full  relative group">
      <h2 className="text-center mt-10 text-white text-[50px]">{category}</h2>
      <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[52px] hidden group-hover:block">
        NIKEONE
      </h3>
      <Image
        src={img}
        alt="Category Icon"
        width={300}
        height={300}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[25deg] duration-200 group-hover:rotate-[0deg]"
      />
    </div>
  );
};

export default Category;
