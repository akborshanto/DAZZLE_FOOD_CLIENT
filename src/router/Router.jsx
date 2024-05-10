import { createBrowserRouter } from "react-router-dom";
import Main from "./../LAYOUT/Main";
import Errors from "../pages/error/Error";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    //children
    children: [
      //home
      { index: true, element: <Home></Home> },
      
    ],
  },
]);
