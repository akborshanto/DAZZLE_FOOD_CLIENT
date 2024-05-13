import { createBrowserRouter } from "react-router-dom";
import Main from "./../LAYOUT/Main";
import Errors from "../pages/error/Error";
import Home from "../pages/home/Home";

import ManageMyFood from '../pages/myReqoomendation/MyRecomendation';
import MyFoodRequest from '../pages/myQuaries/MyQuearies';
import Login from "../pages/login/Login";
import Register from './../pages/register/Register';
import PrivateRoute from "../privateRoute/PrivateRoute";
import ViewDetail from "../pages/home/featureViewDetail/ViewDetail";
import Quaries from "../pages/quaries/Quaries";
import ReqomendationForMe from "../pages/reqomendationForMe/ReqomendationForMe";
import MyQuearies from "../pages/myQuaries/MyQuearies";
import AddMyQuaris from "../pages/myQuaries/addMyQuaries/AddMyQuaris";
import QueryDetail from "../pages/queryDetail/QueryDetail";
import MyRecomendation from "../pages/myReqoomendation/MyRecomendation";
import MyQueryViewDetail from "../pages/myQuaries/myQureryViewDetail/MyQueryViewDetail";
import UpdateMyQuery from "../pages/myQuaries/updateMyQuery/UpdateMyQuery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errors></Errors>,
    //children
    children: [
      //home
      { index: true, element: <Home></Home> },
      {path:'/quaries',element:<Quaries></Quaries>},
/* loging  & register */

{path:'/login',element:<Login></Login>},
{path:'/register',element:<Register></Register>},

      /* private route */



      {path:'/viewDetail/:id',element:<PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/singleFeature/${params.id}`)


      },
/* query detail */
{
path:'/queryDetail/:id',
element:<PrivateRoute><QueryDetail></QueryDetail></PrivateRoute>,
loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/QueryDetail/${params.id}`)



},


{path:'/recomendationForMe',element:<PrivateRoute><ReqomendationForMe></ReqomendationForMe></PrivateRoute>},
      {path:'/myReqomendation',element:<PrivateRoute><MyRecomendation></MyRecomendation></PrivateRoute>




 },


      /* add my quariestry for this private route deleted */
      {path:'/myquary',element:<PrivateRoute><MyQuearies></MyQuearies></PrivateRoute>},
      {path:'/addQuery',element:<PrivateRoute><AddMyQuaris></AddMyQuaris></PrivateRoute>},
      /* my query view detail page */
      {
        path:'/myQueryDetail/:id',element:<PrivateRoute>
        <MyQueryViewDetail></MyQueryViewDetail>
        </PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/myQueryDetail/${params.id}`)
      },
      /* update my query */
      {
        path:'/updateQuery/:id',
        element:<UpdateMyQuery></UpdateMyQuery>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/myQueryDetail/${params.id}`)
        
      }



    ],
  },
]);
