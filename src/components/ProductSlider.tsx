"use client";
import Image from "next/image";
import React from "react";

const item = {
  _id: "64d02466db747d48c23a9f29",
  category: "men",
  mainImg:
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/1_spxj1h.webp",
  images: [
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/1_spxj1h.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/2_s82kfe.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307514/shoses/men/4/3_zl0dsk.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307516/shoses/men/4/4_pwxbwy.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/5_odao0l.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307512/shoses/men/4/6_lv9adw.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307513/shoses/men/4/7_zxrb8l.webp",
    "https://res.cloudinary.com/drw1dnak7/image/upload/v1690307515/shoses/men/4/8_ufly6t.webp",
  ],
  title: "Nike Dunk Low",
  description:
    "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details and throwback hoops flair. The supple leather overlays help the Nike Dunk channel vintage style while its padded, low-cut collar lets you take your game anywhere—in comfort.",
  price: 114.95,
  newPrice: 110,
  isNew: true,
  sizes: ["2.5", "3.5", "4,5", "5", "6"],
};

const ProductSlider = () => {
  const { images, mainImg } = item;

  const [selectedImg, setSelectedImg] = React.useState("");

  React.useEffect(() => {
    setSelectedImg(mainImg);
  }, [mainImg]);

  const changeMainImg = (image: string) => {
    console.log(image);
    setSelectedImg(image);
  };

  return (
    <div className="max-w-[600px] flex gap-x-10">
      {/* Images  */}
      <div className="flex flex-col gap-y-3">
        {images.map((image: string, index: number) => (
          <Image
            src={image}
            alt="Slider images"
            width={60}
            height={60}
            key={index}
            onClick={() => changeMainImg(image)}
            className="cursor-pointer rounded-md border border-black w-[40px]"
          />
        ))}
      </div>
      {/* Images End */}

      {/* Main Img  */}
      <div className="">
        <Image
          src={selectedImg}
          alt="Main Slider Image"
          className=""
          width={400}
          height={400}
        />
      </div>
      {/* Main Img End  */}
    </div>
  );
};

export default ProductSlider;
