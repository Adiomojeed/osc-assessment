import { getSingleProduct, Product } from "@/api/api";
import Button from "@/components/Button";
import customToast, { ToastType } from "@/components/Toast";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const product = await getSingleProduct(params.productId as string);

  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ product });
};

const SingleProduct = () => {
  const { product } = useLoaderData<{
    product: Product;
  }>();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lggap-10">
        <img
          src={product.featuredImage.url}
          className="w-full"
          alt="product-image"
        />
        <div className="py-10 flex flex-col gap-4 lg:px-8">
          <h3 className="text-4xl font-bold">{product.title}</h3>
          <p className="text-primary-50">{product.description}</p>
          <h4 className="text-2xl font-bold">
            {product.price.currencyCode} {product.price.amount}
          </h4>
          <div>
            <small>Quantity</small>
            <div className="flex items-center border border-secondary w-min px-3 py-1 gap-8 mt-2">
              <button className="p-2">-</button>
              <p className="font-bold">10</p>
              <button className="p-2">+</button>
            </div>
          </div>
          <Button
            onClick={() => customToast("okat", ToastType.success)}
            className="h-[56px] mt-5"
          >
            Add to Basket
          </Button>
          <small className="text-secondary">
            Shipping fee calculated at checkout
          </small>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
