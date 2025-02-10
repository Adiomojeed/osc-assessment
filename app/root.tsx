import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStylesHref from "@styles/app.css?url";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { lazy, useEffect, useState } from "react";
import Loader from "./components/Loader";

const ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);
const CartContextProvider = lazy(() => import("./utils/cartContext"));
const Navbar = lazy(() => import("./components/Navbar"));
const Styling = lazy(() => import("./components/StylingComponent"));

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref, as: "style" },
  {
    rel: "icon",
    href: "/favico.png",
    type: "image/png",
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "dns-prefetch",
    href: "https://fonts.googleapis.com",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "OSC e-commerce" },
    {
      property: "og:title",
      content: "Open Study College E-Commerce App",
    },
    {
      name: "description",
      content: "Shop for products at Open Study College",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, minimum-scale=1",
    },
  ];
};

export default function App() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <Styling />
      <body>
        {!isClient ? (
          <Loader className="h-screen" />
        ) : (
          <>
            <ToastContainer />
            <CartContextProvider>
              <main className="w-full h-screen flex flex-col overflow-auto pb-20">
                <Navbar />
                <Outlet />
                <footer className="bg-[#EDEDED] fixed bottom-0 w-full">
                  <div className="container !py-3 flex items-center justify-between">
                    <h6 className="text-lg font-bold">
                      Open Study <span className="font-normal">Store</span>
                    </h6>
                    <p>&copy; {new Date().getFullYear()}</p>
                  </div>
                </footer>
              </main>
            </CartContextProvider>
          </>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
