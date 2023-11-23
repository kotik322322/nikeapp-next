"use client";

import Container from "@/components/Container";
import ProductSlider from "@/components/ProductSlider";

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

const ProductPage = () => {
  return (
    <Container>
      <div>
        <h3 className="text-2xl lg:text-[34px] font-bold text-center my-4">
          {item.title}
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-x-4">
          
          {/* slider  */}
          <ProductSlider />
          {/* slider end */}

          <div className="flex flex-1 flex-col gap-y-10">
            <div className="flex flex-col">
              {/* price */}
              <span className="font-bold text-xl my-4"> $ {item.price}</span>
              {/* price end */}

              {/* description  */}
              <p className="text-[14px] leading-[20px] mb-4">
                {item.description}
              </p>
              {/* description end */}

              {/* buttons "Add to cart" & "Add to Favorite"  */}
              <div className="flex flex-col items-center justify-center gap-y-3 my-4">
                <button
                  className="w-full py-3 rounded-full bg-black text-white hover:bg-bgHover duration-200"
                  // text="white"
                  // onClick={() => dispatch(addToCart(item))}
                >
                  Add to Bag
                  {/* <img src={bag} alt="" className="ml-2"/> */}
                </button>

                <button
                  className="w-full py-3 border border-1 border-black  rounded-full  text-black hover:shadow-xl duration-200 "
                  // text="black"
                  // onClick={() => dispatch(addToWishList(item))}
                >
                  Add to Favorite
                  {/* <img src={like} className="ml-2" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;


