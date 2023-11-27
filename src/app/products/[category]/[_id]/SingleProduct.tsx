"use client"

import { IoBagCheckOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Container from '@/components/Container'
import ProductSlider from '@/components/ProductSlider'
import { IProduct } from '@/types'

const SingleProduct = ({product}:{product: IProduct}) => {
  const dispatch = useDispatch()
  return (
    <Container>
      <div>
        <h3 className="text-2xl lg:text-[34px] font-bold text-center my-4">
          {product.title}
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-x-4">
          {/* slider  */}
          <ProductSlider images={product.images} />
          {/* slider end */}

          <div className="flex flex-1 flex-col gap-y-10">
            <div className="flex flex-col">
              {/* price */}
              <span className="font-bold text-xl my-4"> $ {product.price}</span>
              {/* price end */}

              {/* description  */}
              <p className="text-[14px] leading-[20px] mb-4">
                {product.description}
              </p>
              {/* description end */}

              {/* buttons "Add to cart" & "Add to Favorite"  */}
              <div className="flex flex-col items-center justify-center gap-y-3 my-4">
                <button
                  onClick={() =>
                    dispatch(addToCart(product)) &&
                    toast.success("You added to cart")
                  }
                  className="w-full py-3 flex items-center justify-center gap-x-4 rounded-full bg-black text-white hover:bg-bgHover duration-200"
                >
                  Add to Bag
                  <IoBagCheckOutline className="text-xl" />
                </button>

                <button
                  className="w-full py-3 flex items-center justify-center gap-x-4 border border-1 border-black  rounded-full  text-black hover:shadow-xl duration-200 "
                  // text="black"
                  // onClick={() => dispatch(addToWishList(item))}
                >
                  Add to Favorite
                  <CiHeart className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SingleProduct