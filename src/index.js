import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Home,
  Admin,
  Login,
  Signup,
  ProductDetail,
  Cart,
  Checkout,
} from "./page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./providers/user-provider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./page/Shop/index";
import Test from "./TestRedux";
import Blogs from "./page/Blogs";
import AboutUs from "./page/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <h1>404</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
    <ToastContainer theme="colored" />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
