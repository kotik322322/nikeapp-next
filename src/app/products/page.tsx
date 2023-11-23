import Container from "@/components/Container";
import React from "react";
import { data } from "@/constants/data";
import { IProduct } from "@/types";
import Product from "@/components/Product";

// Здесь нужно будет переписать адрес сервера, когда я создам новый;
const getProducts = async () => {
  const res = await fetch(
    "https://nikeapp-backend.onrender.com/api/shop/items"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Products = async () => {
  const data = await getProducts();

  return (
    <Container className="my-20">
      <p>Ypur look starting HERE and NOW</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((product: IProduct) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
