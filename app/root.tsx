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
        <main className="w-full min-h-screen flex flex-col overflowauto">
          <Navbar />
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
