import MainLayout from "@/components/layout/MainLayout";

import AllProducts from "@/pages/AllProducts";
import ProductDetails from "@/pages/ProductDetails";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <AllProducts />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
