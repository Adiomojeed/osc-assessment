import { getSingleProduct, Product } from "@/api/api";
import Button from "@/components/Button";
import Loader from "@/components/Loader";
import { ICart, useCart } from "@/utils/cartContext";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";

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

  const { addItemToCart, removeItemFromCart, cart }: ICart = useCart();
  const productInCart = cart?.find((i) => Number(i.product.id) === product.id);
  console.log(productInCart);
  const [quantity, setQuantity] = useState<number>(
    productInCart?.quantity ?? 0
  );
  useEffect(() => {
    setQuantity(productInCart?.quantity ?? 0);
  }, [cart]);
  const { state } = useNavigation();
  const navigate = useNavigate();

  return state === "loading" ? (
    <Loader />
  ) : (
    <>
      <button onClick={() => navigate(-1)} className="flex items-center gap-2">
        <img src="/arrow-back.svg" className="w-4" alt="back arrow" /> Back to previous page
      </button>
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
                disabled={quantity === 0}
                className="p-2"
                onClick={() => removeItemFromCart(product.id)}
              >
                -
              </button>
              <p className="font-bold">{quantity}</p>
              <button
                className="p-2"
                onClick={() => {
                  addItemToCart(product);
                }}
              >
                +
              </button>
            </div>
          </div>
          <Button
            onClick={() => {
              addItemToCart(product);
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
    </>
  );
};

export default SingleProduct;
