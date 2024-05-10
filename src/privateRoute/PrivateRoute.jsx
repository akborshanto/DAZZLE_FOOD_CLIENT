import React from "react";
import useAuthHook from "../firebase/authProvider/AuthHook";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { user, setUser, loading, setLoding } = useAuthHook();
/* location */
const location=useLocation()
console.log(location)
if(loading){

  return <h1 className="text-8xl text-red-400">Loading.............</h1>
}
if(user?.email){
  return children
}



  return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;
