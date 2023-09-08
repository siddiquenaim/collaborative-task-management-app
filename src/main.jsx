import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./components/Home/Home";
import AuthProvider from "./provider/AuthProvider/AuthProvider";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
