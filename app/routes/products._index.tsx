import Button from "@/components/Button";
import ProductCard from "@components/ProductCard";

const ProductsIndex = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Button
            key={idx}
            btnType={idx === 0 ? "main" : "outline"}
            className="rounded-full !px-8"
          >
            All
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductCard key={idx} />
        ))}
      </div>
    </>
  );
};

export default ProductsIndex;
