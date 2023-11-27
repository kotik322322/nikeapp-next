import Container from "@/components/Container";
import { IProduct } from "@/types";
import Product from "@/components/Product";

interface Props {
  params: {
    category: string
  }
}

// Здесь нужно будет переписать адрес сервера, когда я создам новый;
const getProducts = async (category: string) => {
  const res = await fetch(
    `https://nikeapp-backend.onrender.com/api/shop/category/${category}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Products = async ({params: {category}} : Props) => {

  const data = await getProducts(category);

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
