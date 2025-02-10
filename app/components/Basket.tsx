import { ICart, useCart } from "@/utils/cartContext";
import Button from "./Button";
import { calculateTotalFee } from "@/utils";
import customToast, { ToastType } from "./Toast";
import BasketProduct from "./BasketProduct";
import { useState } from "react";

// Mini basket to simulate shopping cart
const Basket = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { cart, emptyCart }: ICart = useCart();
  const total = cart?.reduce((a, b) => a + b.quantity, 0);
  const [isLoading, setIsLoading] = useState(false);
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
              <span className="font-bold">{total}</span> items in basket
            </small>
            <small className="">
              Subtotal:{" "}
              <span className="font-bold text-base">
                CAD {calculateTotalFee(cart)}
              </span>
            </small>
          </div>
          <Button
            size="md"
            className="mt3 text-sm py-3 text-center"
            isLoading={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                customToast(
                  "Items checked out successfully",
                  ToastType.success
                );
                setIsLoading(false);
                emptyCart();
                onClose();
              }, 2000);
            }}
          >
            Review and Checkout
          </Button>
          {cart.length === 0 ? (
            <div className="py-4">
              <h6 className="text-center font-medium">Basket Empty</h6>
              <p className="text-sm text-center text-primary-50">
                Add items to basket to view here
              </p>
            </div>
          ) : (
            <div className="grid gap-3 divide-y divide-gray-200">
              {cart.map((i, idx) => (
                <BasketProduct key={idx} data={i} />
              ))}
            </div>
          )}
        </div>
      </>
    )
  );
};

export default Basket;
