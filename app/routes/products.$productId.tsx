import { getSingleProduct, Product } from "@/api/api";
import Loader from "@/components/Loader";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { lazy } from "react";

const SingleProduct = lazy(() => import("@/components/SingleProduct"));

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const product = await getSingleProduct(params.productId as string);
  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ product });
};

const SingleProductPage = () => {
  const { product } = useLoaderData<{
    product: Product;
  }>();

  const { state } = useNavigation();
  const navigate = useNavigate();

  return state === "loading" ? (
    <Loader />
  ) : (
    <>
      <button onClick={() => navigate(-1)} className="flex items-center gap-2">
        <img src="/arrow-back.svg" className="w-4" alt="back arrow" /> Back to
        previous page
      </button>
      <SingleProduct product={product} />
    </>
  );
};

export default SingleProductPage;
