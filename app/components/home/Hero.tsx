import { Link } from "@remix-run/react";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="bg-[#EDEDED]">
      <div className="container">
        <div className="rounded-lg w-full h-[400px] md:h-[500px] items-center grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl lg:text-5xl leading-[120%] font-bold">
              Welcome to{" "}
              <span className="text-[#58a59c]">
                OpenStudy <span className="font-normal">Store</span>
              </span>{" "}
              - Elevate Your Style
            </h1>
            <h6 className="text-base lg:text-lg">
              Discover fashion that speaks your style. At OpenStudy Store, we
              bring you the latest trends, timeless classics, and must-have
              essentials—all in one place.
            </h6>
            <Link to="/products" aria-label="Go to products page">
              <Button className="w-min">Browse Store</Button>
            </Link>
          </div>

          <div className="hidden md:flex flex-center h-full">
            <img src="/hero.png" className="h-full" alt="person holding bags" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
