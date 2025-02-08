import Button from "@/components/Button";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProducts />
      <footer className="bg-[#EDEDED] mt-5 ">
        <div className="container !py-3 flex items-center justify-between">
          <h4 className="text-xl font-bold">
            Open Study <span className="font-normal">Store</span>
          </h4>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
