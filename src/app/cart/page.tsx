"use client"
import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";
import { useSelector } from "react-redux"
import { IProduct, StateProps } from "@/types";

const Cart = () => {

  const {productData : data} = useSelector((state:StateProps) => state.cart)
  
  console.log(data)
  return (
    <Container>
      <h2 className="text-2xl font-semibold my-4">Cart Page</h2>


      <div className="flex flex-col gap-y-3">
      {data && data?.map((product : IProduct, index: number) => <CartProduct product={product} key={index}/>)}
      </div>


    </Container>
  );
};

export default Cart;
