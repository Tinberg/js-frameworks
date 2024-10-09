import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import confetti from "canvas-confetti";

function CheckoutSuccess() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Thank you for your order!</h1>
      <p>Your order was successfully processed.</p>
      <Link to="/" className="btn btn-primary mt-3">Return to store</Link>
    </Container>
  );
}

export default CheckoutSuccess;