import { cartType, ICart, useCart } from "@/utils/cartContext";
import { useEffect, useState } from "react";

const BasketProduct = ({ data }: { data: cartType }) => {
  const { product } = data;
  const {
    addItemToCart,
    removeItemFromCart,
    deleteProductInCart,
    cart,
  }: ICart = useCart();
  const productInCart = cart?.find((i) => i.product.id === product.id);
  const [quantity, setQuantity] = useState<number>(
    productInCart?.quantity ?? 1
  );
  useEffect(() => {
    setQuantity(productInCart?.quantity ?? 1);
  }, [cart]);
  return (
    <div className="flex gap-3 pb-3 relative">
      <button
        className="w-6 h-6 p-1 absolute rounded-full bg-[#ef6e6e] -right-0 -top-2"
        onClick={() => deleteProductInCart(product.id)}
      >
        <img src="/trash.svg" alt="" />
      </button>
      <img
        src={product.featuredImage.url}
        alt="product"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="py-1 flex flex-col gap-1">
        <p className="line-clamp-1">{product.title}</p>
        <div className="flex items-center border border-secondary w-min px-3 py- gap-4">
          <button
            className="p-1"
            onClick={() => removeItemFromCart(product.id)}
          >
            -
          </button>
          <small className="font-bold">{quantity}</small>
          <button
            className="p-1"
            onClick={() => {
              addItemToCart(product);
            }}
          >
            +
          </button>
        </div>
        <p className="textsm font-medium">
          {product.price.currencyCode} {product.price.amount}
        </p>
      </div>
    </div>
  );
};

export default BasketProduct;
