import { IProduct } from "@/types";
import SingleProduct from "./SingleProduct";

interface Props {
  params: {
    _id: string; 
  };
}

const getProductById = async (id: string) => {
  const res = await fetch(
    `https://nikeapp-backend.onrender.com/api/shop/${id}`
  );

  return res.json();
};

const ProductDetailsPage = async ({ params: { _id } }: Props) => {

  const product: IProduct = await getProductById(_id);

  return <SingleProduct product={product} />;
};

export default ProductDetailsPage;  
