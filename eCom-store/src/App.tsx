import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contac";
import CheckoutSuccess from "./pages/checkoutSuccess/CheckoutSuccess";
import Layout from "./components/layout/Layout";
import { CartProvider } from "./context/cartIcon/CartContext";


function App() {
  return (
    <CartProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="products/:id" element={<Product />} /> 
          <Route path="cart" element={<Cart />} /> 
          <Route path="checkout-success" element={<CheckoutSuccess />} /> 
          <Route path="contact" element={<Contact />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}
export default App;
