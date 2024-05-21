import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./Pages/Login.jsx";
import RegisterPage from "./Pages/Register.jsx";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/Products.jsx";
import Homepage from "./Pages/Homepage.jsx";
import ProfilePage from "./Pages/Dashboard.jsx";
import DetailProductsPages from "./Pages/DetailProducts.jsx";

// Memanggil store
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import DashboardPage from "./Pages/Dashboard.jsx";

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
    element: <DashboardPage />
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
