import { createContext, useState, type ReactNode } from "react";
import type { Product } from "../types/Product";

interface Props {
    children: ReactNode;
}

interface CartItem extends Product {
  qty: number;
}

export const CartContext =
  createContext<CartContextType>(
    {} as CartContextType
  );


interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const CartProvider = ({children}: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existing = cartItems.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, qty: 1 },
      ]);
    }

    alert(
      `${product.name} has been added to cart`
    );
  };

  const removeFromCart = (id: number) => {
    const removedItem = cartItems.find(
      (item) => item.id === id
    );

    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );

    if (removedItem) {
      alert(
        `${removedItem.name} has been removed from cart`
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}