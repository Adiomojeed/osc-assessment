import Button from "./Button";

const Basket = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    isOpen && (
      <>
        <div
          onClick={onClose}
          className="fixed left-0 top-0 z-[101] h-screen w-screen bg-black opacity-10"
        ></div>
        <div className="absolute z-[102] bg-white max-h-[450px] overflow-auto -right-16 md:right-0 top-12 border border-gray-100 w-[350px] p-4 pt-0 rounded-xl shadow flex flex-col gap-3">
          <div className="flex sticky top-0 bg-white z-1 items-center py-2 pt-6 border-b border-dashed border-gray-300 justify-between">
            <small>
              <span className="font-bold">3</span> items in basket
            </small>
            <small className="">
              Subtotal: <span className="font-bold text-base">£30.00</span>
            </small>
          </div>
          <Button size="md" className="mt3 text-sm py-3 text-center">
            Review and Checkout
          </Button>
          <div className="grid gap-3 divide-y divide-gray-200">
            {Array.from({ length: 1 }).map((_, idx) => (
              <div key={idx} className="flex gap-3 pb-3 relative">
                <button className="w-6 h-6 p-1 absolute rounded-full bg-[#ef6e6e] -right-0 -top-2">
                  <img src="/trash.svg" alt="" />
                </button>
                <img
                  src="https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358"
                  alt="product"
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="py-1 flex flex-col gap-1">
                  <p className="line-clamp-1">Product Title</p>
                  <div className="flex items-center border border-secondary w-min px-3 py- gap-4">
                    <button className="p-1">-</button>
                    <small className="font-bold">10</small>
                    <button className="p-1">+</button>
                  </div>
                  <p className="textsm font-medium">£10.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Basket;
