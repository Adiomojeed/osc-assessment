"use client";

import { Link, NavLink } from "@remix-run/react";

import { useState } from "react";
import Basket from "./Basket";
import useDisclosure from "@/hooks/useDisclosure";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="w-full sticky top-0 z-[2000] bg-white md:h-[80px] flex items-center border-b border-gray-200">
      <div className="container flex justify-between !py-3 md:py-0 flex-col sm:flex-row gap-2 md:gap-4 items-center">
        <Link to="/" aria-label="Go to homepage" className="block w-[200px] ">
          <img src="/logo.png" alt="App logo" />
        </Link>

        <nav className="flex items-center gap-8 lg:gap-10">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-2"
                : "text-primar hover:underline underline-offset-8 decoration-2"
            }
            aria-label="Navigate to products page"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            aria-label="Navigate to about page"
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-2"
                : "text-primary hover:underline underline-offset-8 decoration-2"
            }
          >
            About
          </NavLink>
          <div className="relative">
            <button
              className="w-[40px] relative border border-white !z-[10000] h-[40px] p-2 rounded-full text-center flex items-center justify-center bg-secondary-50 text-secondary"
              onClick={() => {
                isOpen ? onClose() : onOpen();
              }}
            >
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-secondary border-2 border-white rounded-full -top-2 -end-2">
                3
              </div>

              <img src="/cart.svg" alt="shopping cart image" />
            </button>
            <Basket isOpen={isOpen} onClose={onClose} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
