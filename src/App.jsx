import { GlobalStyles } from "@mui/material";
import UserLayout from "./Layout/UserLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
