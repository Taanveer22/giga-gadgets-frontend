import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";

const PublicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default PublicRoutes;
