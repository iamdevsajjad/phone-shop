
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Shared/MainLayout/MainLayout";
import Favorite from "../pages/Favorite/Favorite";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/favorites",
        element:<Favorite/>
      },
      {
        path: "/login",
        element:<Login/>
      },
    ]
  },
]);

export default router;