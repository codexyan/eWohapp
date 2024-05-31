import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import LoginPage from "./Pages/Login.jsx";
import RegisterPage from "./Pages/Register.jsx";
import ErrorPage from "./Pages/404.jsx";
import Homepage from "./Pages/Homepage.jsx";
import DashboardPage from "./Pages/Dashboard.jsx";
import ProductsPage from "./Pages/Products.jsx";
import DetailProductsPages from "./Pages/DetailProducts.jsx";

import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import ComingSoonPage from "./Pages/ComingSoon.jsx";
import SendInvitationPage from "./Pages/SendInvitation.jsx";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductsPages />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoonPage />,
  },
  {
    path: "/invitation/nandary",
    element: <SendInvitationPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <RouterProvider router={router} />
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
