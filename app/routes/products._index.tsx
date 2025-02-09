import { getCollections, Collection, getProducts, Product } from "@/api/api";
import Button from "@/components/Button";
import { getCollectionId } from "@/utils";
import ProductCard from "@components/ProductCard";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const collectionId = url.searchParams.get("collection") ?? "";
  const collections = await getCollections();
  const products = await getProducts(
    collectionId.length > 0 ? collectionId : "429493780502"
  );

  if (!collections || !products) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ collections, products });
};

const ProductsIndex = () => {
  const { collections, products } = useLoaderData<{
    collections: Collection[];
    products: Product[];
  }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const collectionId = searchParams.get("collection") ?? "";

  return (
    <>
      <div className="flex items-center gap-4">
        {collections?.map((_, idx) => (
          <Button
            key={idx}
            btnType={
              collectionId === getCollectionId(_.id) ? "main" : "outline"
            }
            className="rounded-full !px-5"
            size="sm"
            onClick={() => navigate(`?collection=${getCollectionId(_.id)}`)}
          >
            {_?.title}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {products?.map((_, idx) => (
          <ProductCard key={idx} product={_} />
        ))}
      </div>
    </>
  );
};

export default ProductsIndex;
