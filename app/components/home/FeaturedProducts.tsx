import { Link } from "@remix-run/react";
import Button from "../Button";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between">
        <h4 className="text-xl lg:text-3xl font-bold">Featured Products</h4>
        <Link to="/products" aria-label="Go to products page">
          <Button className="!px-4 text-sm md:text-base">
            View All Products
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
