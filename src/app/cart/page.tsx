import Container from "@/components/Container";
import CartProduct from "@/components/CartProduct";

const Cart = () => {
  return (
    <Container>
      <h2 className="text-2xl font-semibold my-4">Cart Page</h2>


      <div className="flex flex-col gap-y-3">
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
      </div>


    </Container>
  );
};

export default Cart;
