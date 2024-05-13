import React from "react";
import useAuthHook from "../firebase/authProvider/AuthHook";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../hooks/Loading";

const PrivateRoute = ({children}) => {
  const { user, setUser, loading, setLoding } = useAuthHook();
/* location */
const location=useLocation()

if(loading){

  return <Loading></Loading>
}
if(user?.email){
  return children
}



  return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;
