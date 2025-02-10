import { Link } from "@remix-run/react";
import Button from "./Button";
import { Product } from "@/api/api";
import { ICart, useCart } from "@/utils/cartContext";

/**
 * Product card component
 */
const ProductCard = ({ product }: { product: Product }) => {
  const { addItemToCart, removeItemFromCart, cart }: ICart = useCart();

  const productInCart = cart?.some((i) => i.product.id === product.id);
  return (
    <div className="border rounded-lg p-2 border-gray-100 group">
      <div className="rounded-lg relative">
        <img
          src={product.featuredImage.url}
          className="w-full rounded-lg h-[340px] md:h-[215px] xl:h-[245px]"
          alt="product-image"
        />
        <div className="absolute bottom-3 left-3 items-center gap-2 flex lg:hidden lg:group-hover:flex">
          <Button
            size="sm"
            className="!px-2 rounded text-xs"
            onClick={() => {
              if (!productInCart) addItemToCart(product);
              else removeItemFromCart(product.id);
            }}
          >
            {productInCart ? "Remove from" : "Add to"} Basket
          </Button>
          <Link
            to={`/products/${product.id}`}
            className="flex-center bg-white rounded w-9 h-9"
          >
            <img src="/eye.svg" className="w-6 h-6" alt="view product icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2 mt-3">
        <h5 className="text-lg font-medium line-clamp-1">{product.title}</h5>
        <h6 className="text-sm line-clamp-2 text-primary-50">
          {product.description}
        </h6>
        <h6 className="text-lg font-bold">
          {product.price.amount} {product.price.currencyCode}
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
