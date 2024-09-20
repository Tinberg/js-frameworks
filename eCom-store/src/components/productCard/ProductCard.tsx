
import { Link } from "react-router-dom";
import { ProductType } from "../../types/ProductsTypes";
import { CartItem } from "../../types/CartTypes";
import { Card, Button } from "react-bootstrap";
import "./productCard.scss";

const ProductCard = ({
  product,
  originalPrice,
  discountPercentage,
  showViewProductButton = false,
  truncateDescription = false,
}: {
  product: ProductType | CartItem;  
  originalPrice?: number;
  discountPercentage?: number;
  showViewProductButton?: boolean;
  truncateDescription?: boolean;
}) => {
  return (
    <Card className="mb-4 product-card" bg="primary" text="white">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={product.image.url}
          alt={product.image.alt || product.title}
          className="w-100 h-100"
        />
      </div>
      <Card.Body className="card-body bg-light text-dark">
        <Card.Title>{product.title}</Card.Title>

        {/* Show description if it exists (only productType not CartItem) */}
        {"description" in product && (
          <Card.Text
            className={`product-description ${
              truncateDescription ? "text-truncate" : ""
            }`}
          >
            {product.description}
          </Card.Text>
        )}

        <Card.Text>Price: {product.discountedPrice} NOK</Card.Text>

        {/* Show original price and discount if available */}
        {discountPercentage && discountPercentage > 0 && (
          <div>
            <p>Original Price: {originalPrice} NOK</p>
            <p>You save: {discountPercentage}%</p>
          </div>
        )}
      </Card.Body>

      {showViewProductButton && (
        <Card.Footer className="card-footer p-0">
          <Link to={`/products/${product.id}`} className="w-100 h-100">
            <Button className="w-100 h-100 btn-primary text-light">
              View Product
            </Button>
          </Link>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ProductCard;
