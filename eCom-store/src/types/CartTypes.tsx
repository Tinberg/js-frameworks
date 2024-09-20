export interface CartItem {
    id: string;
    title: string;
    price: number;
    discountedPrice: number;
    quantity: number;
    image: { url: string; alt: string };
  }
  
  export interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    itemCount: number;
    totalPrice: number;
    clearCart: () => void;
  }