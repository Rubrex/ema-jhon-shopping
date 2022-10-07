import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./layout/Main";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Shop />,
        loader: async () => {
          return fetch("products.json");
        },
      },
      {
        path: "orders",
        element: <Orders />,
        loader: productsAndCartLoader,
      },
      { path: "inventory", element: <Inventory /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
