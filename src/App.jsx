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
