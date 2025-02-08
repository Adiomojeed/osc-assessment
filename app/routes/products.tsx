import { Outlet } from "@remix-run/react";

const Products = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default Products;
