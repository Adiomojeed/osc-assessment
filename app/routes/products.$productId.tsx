import Button from "@/components/Button";

const SingleProduct = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lggap-10">
        <img
          src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358"
          className="w-full"
          alt="product-image"
        />
        <div className="py-10 flex flex-col gap-4 lg:px-8">
          <h3 className="text-4xl font-bold">Product Title</h3>
          <p className="text-primary-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            earum asperiores expedita repudiandae quidem fugit officiis esse,
            enim voluptatum recusandae consequatur minima, at magni architecto a
            mollitia sunt, laborum quisquam?
          </p>
          <h4 className="text-2xl font-bold">£100.00</h4>
          <div>
            <small>Quantity</small>
            <div className="flex items-center border border-secondary w-min px-3 py-1 gap-8 mt-2">
              <button className="p-2">-</button>
              <p className="font-bold">10</p>
              <button className="p-2">+</button>
            </div>
          </div>
          <Button className="h-[56px] mt-5">Add to Basket</Button>
          <small className="text-secondary">Shipping fee calculated at checkout</small>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
