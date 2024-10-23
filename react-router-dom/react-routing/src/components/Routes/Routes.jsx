import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Service from './../pages/Service';
import Pricing from './../pages/Pricing';


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      },
      {
        path: "service",
        element: <Service />,
      },{
        path: "Pricing",
        element: <Pricing />
      }
     
    ],
  },
]);

export default Routes;
