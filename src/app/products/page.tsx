
import Container from "@/components/Container";
import React from "react";
import { data } from "@/constants/data";
import Item from "@/components/Product";


const Products = () => {
  return (
    <Container className="mt-20">
      <p>Ypur look starting HERE and NOW</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.map((item) => (
          <Item item={item}  key={item._id}/>
        ))}
      </div>
    </Container>
  );
};

export default Products;
