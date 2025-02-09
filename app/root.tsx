import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import appStylesHref from "@styles/app.css?url";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import Navbar from "./components/Navbar";
import "react-toastify/ReactToastify.css";
import { lazy } from "react";

let ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },

  {
    rel: "icon",
    href: "/favico.png",
    type: "image/png",
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
      content:
        "width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, minimum-scale=1",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <ToastContainer /> */}
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

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
