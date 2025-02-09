import { Product } from "@/api/api";
import customToast, { ToastType } from "@/components/Toast";
import {
  useState,
  createContext,
  useContext,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

const key = "persist:os";
export type cartType = { product: Product; quantity: number };

export interface ICart {
  cart: cartType[];
  addItemToCart: (e: Product, q?: number) => void;
  removeItemFromCart: (e: number) => void;
  deleteProductInCart: (e: number) => void;
  emptyCart: () => void;
}

export const CartContext = createContext({} as ICart);

export const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  // Get persisted cart data from localstorage
  const [cart, setCart] = useState<cartType[]>(() => {
    if (typeof window !== "undefined") {
      const serializedCart = localStorage.getItem(key);
      return serializedCart ? JSON.parse(serializedCart) : [];
    }
  });

  // Persist data into localStorage whenever cart state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(cart ?? []));
    }
  }, [cart]);

  // This function handles adding a product to cart and incrementing quantity if product already exists
  const addItemToCart = (data: Product, quantity: number = 1) => {
    const index = cart?.findIndex(
      (i) => Number(i.product.id) === Number(data.id)
    );
    if (index > -1) {
      setCart((prev) => [
        ...(prev ?? []).slice(0, index),
        {
          product: cart[index].product,
          quantity: cart[index].quantity + quantity,
        },
        ...(prev ?? []).slice(index + 1),
      ]);
    } else {
      setCart((prev) => [...prev, { product: data, quantity: quantity }]);
    }
    customToast("Product item added to basket successfully", ToastType.success);
  };

  // This function removes 1 quantity of product from cart
  const removeItemFromCart = (id: number) => {
    const index = cart?.findIndex((i) => Number(i.product.id) === Number(id));

    if (cart[index]?.quantity > 1) {
      setCart((prev) => [
        ...(prev ?? []).slice(0, index),
        { product: cart[index].product, quantity: cart[index].quantity - 1 },
        ...(prev ?? []).slice(index + 1),
      ]);
    } else {
      setCart((prev) => [
        ...(prev ?? []).slice(0, index),
        ...(prev ?? []).slice(index + 1),
      ]);
    }
    customToast("Product item removed from cart", ToastType.success);
  };

  // This function deletes a product irrespective of quantity
  const deleteProductInCart = (id: number) => {
    setCart((prev) => prev.filter((i) => i.product.id !== id));
    customToast("Product deleted from basket", ToastType.success);
  };

  // This function deletes all products from cart
  const emptyCart = () => {
    setCart([]);
  };

  const value = useMemo(
    () => ({
      cart,
      addItemToCart,
      removeItemFromCart,
      deleteProductInCart,
      emptyCart,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
