import { Link } from "@remix-run/react";
import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="border rounded-lg p-2 border-gray-100 group">
      <div className="rounded-lg relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358"
          className="w-full rounded-lg"
          alt="product-image"
        />
        <div className="absolute bottom-3 left-3 items-center gap-2 flex lg:hidden lg:group-hover:flex">
          <Button size="sm" className="!px-2 rounded text-xs">
            Add to Basket
          </Button>
          <Link
            to="/products/1"
            className="flex-center bg-white rounded w-9 h-9"
          >
            <img src="/eye.svg" className="w-6" alt="view product icon" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2 mt-3">
        <h6 className="text-lg font-medium line-clamp-1">Product title</h6>
        <small className="line-clamp-2 text-primary-50">
          Product description
        </small>
        <h6 className="text-lg font-bold">£120.00</h6>
      </div>
    </div>
  );
};

export default ProductCard;
