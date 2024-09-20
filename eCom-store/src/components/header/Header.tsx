import { Link } from "react-router-dom";
import './header.scss';
import CartIcon from "../cartIcon/CartIcon";
import { useCart } from '../../context/cartIcon/CartContext';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// The header component renders a navbar with a CartIcon that displays the number of items in the cart, using the itemCount from the CartContext.
function Header() {

    const { itemCount } = useCart();  

    return (
      <nav className="navbar navbar-expand-sm navbar-custom bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-brand-custom fs-3" to="/">PeakShop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom fs-5" to="/contact">Contact</Link>
              </li>
            </ul>
            <CartIcon itemCount={itemCount} />
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;