import { GlobalStyles } from "@mui/material";
import UserLayout from "./Layout/UserLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import Collection from "./Pages/Collection";
import ProductDetails from "./Product/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderDetails from "./Pages/OrderDetails";
import MyOrders from "./Pages/MyOrders";
import AdminLayout from "./Layout/AdminLayout";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import OrderManagement from "./components/Admin/OrderManagement";
import AdminHome from "./components/Admin/AdminHome";
import EditProduct from "./components/Admin/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "collection/:collection",
        element: <Collection />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "order/:id",
        element: <OrderDetails />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "users",
        element: <UserManagement />,
      },
      {
        path: "products",
        element: <ProductManagement />,
      },
      {
        path: "products/:id/edit",
        element: <EditProduct />,
      },
      {
        path: "orders",
        element: <OrderManagement />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: 0 },
          html: { margin: 0, padding: 0 },
          "#root": { margin: 0, padding: 0 },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
