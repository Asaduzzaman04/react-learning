import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from './../pages/Home';
import Fetchold from './../pages/Fetchold';
import Fetchrq from './../pages/Fetchrq';

const Router = createBrowserRouter([
    {
        element: <App/>,
        path : '/',
        children: [
            // Add routes here
            {
                element: <Home/>,
                path: "/",
            },
            {
                element : <Fetchold />,
                path : "/fetchold",
            },
            {
                element : <Fetchrq/>,
                path : "/fetchrq",
            }
        ]
    }
])

export default Router;