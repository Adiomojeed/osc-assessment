import { getCollections, Collection } from "@/api/api";
import Button from "@/components/Button";
import ProductCard from "@components/ProductCard";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const collections = await getCollections();
  if (!collections) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ collections });
};

const ProductsIndex = () => {
  const { collections } = useLoaderData<{ collections: Collection[] }>();

  return (
    <>
      <div className="flex items-center gap-4">
        {collections?.map((_, idx) => (
          <Button
            key={idx}
            btnType={idx === 0 ? "main" : "outline"}
            className="rounded-full !px-5"
            size="sm"
          >
            {_?.title}
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
