
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Shared/MainLayout/MainLayout";
import Details from "../pages/Details/Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element:<Home/>,
        loader:() => fetch("phones.json")
      },
      {
        path: "/favorites",
        element:<Favorite/>
      },
      {
        path: '/phones/:id',
        element:<Details/>,
        loader:() => fetch("phones.json")
      },
      {
        path: "/login",
        element:<Login/>
      },
    ]
  },
]);

export default router;