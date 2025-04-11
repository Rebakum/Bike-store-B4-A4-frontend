import MainLayout from "@/components/layout/MainLayout";

import About from "@/pages/About";
import AllProducts from "@/pages/AllProducts";
import CartPage from "@/pages/CartPage";
import FAQPage from "@/pages/FAQPage";
import OrderPage from "@/pages/Order/OrderPage";
import OrderResponse from "@/pages/Order/OrderResponse";
import ProductDetails from "@/pages/ProductDetails";
import SignUpPage from "@/pages/SignUpPage";
import PrivetUserRoute from "@/utils/PrivetUserRoute";
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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/order",
        element: (
          <PrivetUserRoute>
            <OrderPage />
          </PrivetUserRoute>
        ),
      },
      {
        path: "/response",
        element: (
          <PrivetUserRoute>
            <OrderResponse />
          </PrivetUserRoute>
        ),
      },

      {
        path: "/faqs",
        element: <FAQPage />,
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
