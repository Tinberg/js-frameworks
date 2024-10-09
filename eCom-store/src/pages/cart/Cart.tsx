import { useCart } from "../../context/cartIcon/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { Container, Row, Col, Button } from "react-bootstrap";

function Cart() {
  const { cartItems, totalPrice, addToCart, removeFromCart, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="d-flex justify-content-center fs-4 py-5">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="background min-vh-100 py-5">
      <Container>
        <h1>Your Cart</h1>
        <Row>
          {cartItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="my-4">
              <ProductCard
                product={item}
                showViewProductButton={false}
                truncateDescription={false}
              />
              <div className="cart-item-controls d-flex justify-content-between">
                <div>
                  <Button onClick={() => removeFromCart(item.id)}>-</Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button onClick={() => addToCart(item)}>+</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div>
          <Button className="my-4" variant="danger" onClick={clearCart}>
            Remove all items
          </Button>
        </div>
        <div className="my-3 mb-4">
          <h3>Total: {totalPrice.toFixed(2)} NOK</h3>
        </div>
        <Link to="/checkout-success">
          <Button className="w-100" variant="success" onClick={clearCart}>
            Proceed to Checkout
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Cart;
