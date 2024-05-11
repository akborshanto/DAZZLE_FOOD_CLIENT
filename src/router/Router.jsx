import { createBrowserRouter } from "react-router-dom";
import Main from "./../LAYOUT/Main";
import Errors from "../pages/error/Error";
import Home from "../pages/home/Home";
import AvailableFood from './../pages/available-food/AvailableFood';

import ManageMyFood from './../pages/manageMyFood/ManageMyFood';
import MyFoodRequest from './../pages/myFoodRequest/MyFoodRequest';
import AddFood from './../pages/addFood/AddFood';
import Login from "../pages/login/Login";
import Register from './../pages/register/Register';
import PrivateRoute from "../privateRoute/PrivateRoute";
import ViewDetail from "../pages/home/featureViewDetail/ViewDetail";

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
/* loging  & register */

{path:'/login',element:<Login></Login>},
{path:'/register',element:<Register></Register>},

      /* private route */



      {path:'/viewDetail/:id',element:<PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/singleFeature/${params.id}`)

      },
{path:'/addFood',element:<PrivateRoute><AddFood></AddFood></PrivateRoute>},
      {path:'/manageMyFood',element:<PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>},
      {path:'/myFoodRequest',element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>},
    ],
  },
]);
