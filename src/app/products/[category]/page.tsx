import Container from "@/components/Container";
import Product from "@/components/Product";
import { IProduct } from "@/types";

interface Props {
  params: {
    category: string;
  };
}

const getProductsByCategory = async (category: string) => {
  const { data } = await fetch(
    `http://localhost:3000/api/products/${category}`
  ).then((res) => res.json());
  return data;
};

const page = async ({ params: { category } }: Props) => {
  const productList = await getProductsByCategory(category);
  return (
    <Container>
      <h2 className="capitalize text-2xl font-medium my-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {productList.map((product: IProduct) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default page;
