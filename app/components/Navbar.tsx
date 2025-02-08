"use client";

import { Link } from "@remix-run/react";

import { useState } from "react";

const Navbar = () => {
  
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  

  return (
    <header className="w-full sticky top-0 z-[2000] bg-white md:h-[80px] flex items-center border-b border-gray-200">
      <div className="container flex justify-between !py-3 md:py-0 flex-col sm:flex-row gap-2 md:gap-4 items-center">
        <Link to="/" aria-label="Go to homepage" className="block w-[200px] ">
          <img src="/logo.png" alt="App logo" />
        </Link>

        <nav className="flex items-center gap-8 lg:gap-10">
          <Link
            to="/products"
            aria-label="Navigate to products page"
            className="text-primary"
          >
            Products
          </Link>
          <Link
            to="/products"
            aria-label="Navigate to products page"
            className="text-primary"
          >
            About
          </Link>
          <div className="relative">
            <Link
              to="/login"
              aria-label="Navigate to login page"
              type="button"
              className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
              onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              Cart
            </Link>
            {dropdownOpen && (
              <div
                id="dropdown"
                className="w-[250px] z-10 absolute right-0 top-12 bg-white divide-y flex flex-col gap-3 divide-gray-100 rounded-lg shadow w-44 p-3"
              >
                <div>
                  <h5 className="text-md text-primary font-medium">Name</h5>
                  <p className="text-xs">email</p>
                </div>
                <button
                  
                  className="w-full bg-primary text-secondary text-xs flex-1 p-2 rounded-md flex-center"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
