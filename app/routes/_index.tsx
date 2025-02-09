import { getFeaturedProducts, Product } from "@/api/api";
import Button from "@/components/Button";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const products = await getFeaturedProducts();
  if (!products) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ products });
};

const Homepage = () => {
  const { products } = useLoaderData<{
    products: Product[];
  }>();

  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts products={products} />
    </>
  );
};

export default Homepage;
