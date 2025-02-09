import { ICart, useCart } from "@/utils/cartContext";
import Button from "./Button";
import { useState } from "react";
import { Product } from "@/api/api";

const SingleProduct = ({ product }: { product: Product }) => {
  const { addItemToCart }: ICart = useCart();

  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      <img
        src={product.featuredImage.url}
        className="w-full"
        alt="product-image"
      />
      <div className="py-4 lg:py-10 flex flex-col gap-4 lg:px-8">
        <h3 className="text-4xl font-bold">{product.title}</h3>
        <p className="text-primary-50">{product.description}</p>
        <h4 className="text-2xl font-bold">
          {product.price.currencyCode} {product.price.amount}
        </h4>
        <div>
          <small>Quantity</small>
          <div className="flex items-center border border-secondary w-min px-3 py-1 gap-8 mt-2">
            <button
              disabled={quantity === 1}
              className="p-2"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </button>
            <p className="font-bold w-3">{quantity}</p>
            <button className="p-2" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
        </div>
        <Button
          onClick={() => {
            addItemToCart(product, quantity);
          }}
          className="h-[56px] mt-5"
        >
          Add to Basket
        </Button>
        <small className="text-secondary">
          Shipping fee calculated at checkout
        </small>
      </div>
    </div>
  );
};

export default SingleProduct;
