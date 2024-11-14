import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../pages/Home";
import Fetchold from "./../pages/Fetchold";
import Fetchrq from "./../pages/Fetchrq";
import Detailscard from "./../components/ui/Detailscard";
import Pagination from "./../pages/Pagination";
import DeletePost from "../pages/DeletePost";
import InfiniteScroll from './../pages/InfiniteScroll';

const Router = createBrowserRouter([
  {
    element: <App/>,
    path: "/",
    children: [
      // Add routes here
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Fetchold />,
        path: "/fetchold",
      },
      {
        element: <Fetchrq />,
        path: "/fetchrq",
      },
      {
        element: <Detailscard />,
        path: "/fetchrq/:id",
      },
      {
        element: <Pagination />,
        path: "/pagination",
      },{
        element: <DeletePost/>,
        path : "deletePost",
      },{
        element: <InfiniteScroll/>,
        path: "/infiniteScroll",

      }
    ],
  },
]);

export default Router;
