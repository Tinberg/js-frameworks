import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './cartIcon.scss';

const CartIcon = ({ itemCount }: { itemCount: number }) => {
  return (
    <div className="cart-icon">
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        {itemCount > 0 && <span className="item-count ms-2">{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;