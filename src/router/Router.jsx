import { createBrowserRouter } from "react-router-dom";
import Main from "./../LAYOUT/Main";
import Errors from "../pages/error/Error";
import Home from "../pages/home/Home";
import AvailableFood from './../pages/available-food/AvailableFood';

import ManageMyFood from './../pages/manageMyFood/ManageMyFood';
import MyFoodRequest from './../pages/myFoodRequest/MyFoodRequest';
import AddFood from './../pages/addFood/AddFood';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    //children
    children: [
      //home
      { index: true, element: <Home></Home> },
      {path:'/available_food',element:<AvailableFood></AvailableFood>},


      /* private route */
{path:'/addFood',element:<AddFood></AddFood>},
      {path:'/manageMyFood',element:<ManageMyFood></ManageMyFood>},
      {path:'/myFoodRequest',element:<MyFoodRequest></MyFoodRequest>},
    ],
  },
]);
