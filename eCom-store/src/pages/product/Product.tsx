import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/cartIcon/CartContext";
import { fetchProductById } from "../../services/api/productApi";
import { ProductType } from "../../types/ProductsTypes";
import ProductCard from "../../components/productCard/ProductCard";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

function Product() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false); 

  useEffect(() => {
    if (!id) {
      setError("Product ID not found");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchProductById(id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="d-flex justify-content-center fs-4 py-5">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div className="d-flex justify-content-center fs-4 py-5">Product not found</div>;
  }
// Handles adding the product to the cart, trigger success message.
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      quantity: 1,
      image: product.image,
    });

    setIsAddedToCart(true); 
    setTimeout(() => {
      setIsAddedToCart(false); 
    }, 3000);
  };

  // Discount percentage calculation
  const discountPercentage =
    product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : undefined;

  return (
    <div className="background min-vh-100">
      <Container className="py-5">
        <Row>
          <Col md={6}>
            {/* product with all info from component */}
            <ProductCard
              product={product}
              originalPrice={product.price}
              discountPercentage={discountPercentage}
              showViewProductButton={false}
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            {/* Price*/}
            <div>
              <h3>Price: {product.discountedPrice} NOK</h3>
            </div>

            {/* Add to Cart Button */}
            <Button className="btn btn-primary mt-3 text-light w-50" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            {/* Show success message */}
            {isAddedToCart && (
              <Alert variant="success" className="mt-3">
                Item added to cart!
              </Alert>
            )}

            {/* Tags Section */}
            {product.tags && (
              <div className="mt-4">
                <strong>Tags:</strong>
                <ul>
                  {product.tags.map((tag: string) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="mt-4">
                <h2>Reviews</h2>
                <ul>
                  {product.reviews.map((review) => (
                    <li key={review.id}>
                      <strong>{review.username}</strong> rated it {review.rating}
                      /5
                      <p>{review.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
