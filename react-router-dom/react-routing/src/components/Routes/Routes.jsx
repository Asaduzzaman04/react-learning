import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact, { handleFromSubmit } from "./../pages/Contact";
import Service from "./../pages/Service";
import Pricing from "./../pages/Pricing";
import Errorpage from "./../pages/Errorpage";
import Products from "../pages/Products";
import useImageStore from "../../Hooks/useImageStore";
import MovieDetails from "../movieDetails/MovieDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        action: handleFromSubmit,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "Pricing",
        element: <Pricing />,
      },
      {
        path: "products",
        element: <Products />,
        loader: useImageStore, //custom hook for fetch data
      },
      {
        path: "/products/:title",
        element: <MovieDetails />,
        loader: useImageStore, //custom hook for fetch data
      },
    ],
  },
]);

export default Routes;
