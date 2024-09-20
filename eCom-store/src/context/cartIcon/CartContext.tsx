import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem, CartContextType } from "../../types/CartTypes";

const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook to use the CartContext (used inside this file insted of Hooks bcs its only used here)
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart have to be used within a CartProvider");
  }
  return context;
};

// CartProvider to wrap the app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

// Decrements quantity or removes product if quantity reaches 0
const removeFromCart = (id: string) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clears all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculates total number of items in the cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculates total price of items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        itemCount,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
