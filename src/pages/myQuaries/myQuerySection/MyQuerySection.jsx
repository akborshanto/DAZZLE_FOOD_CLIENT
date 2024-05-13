import React, { useEffect, useState } from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";
import QueryCard from "./QueryCard";
import { toast } from "react-toastify";

const MyQuerySection = () => {
  const { user, loading, setLoading } = useAuthHook();
  /* loading */

  const [myQuery, setMyQuery] = useState([]);

const sort=myQuery.sort((a,b)=> Date.parse( b.currentTime )- Date.parse( a.currentTime))

// const item=sort.map(data=>console.log(data.currentTime))
  useEffect(() => {
   

    getData();
  }, [user]);

  const getData = async () => {
    // setLoading(true)

    //axios
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/userQuery/${user?.email}`
    );
    setMyQuery(data);
    // setLoading(false)
  };


/* hadnle */

  const handleDelete= async(id)=>{


    try{
    const {data}=await axios.delete(`${import.meta.env.VITE_API_URL}/myQueryDelete/${id}`,)
   // toast.success("succesfullt addedd")
    console.log(data)
    toast.success("DELETED")
getData()
    
    }catch(err){
      console.log(err)
    }
    
    
    
    }
    
    




  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
      {sort.map((myQueryInfo) => (
        <QueryCard myQueryInfo={myQueryInfo} key={Math.random()} handleDelete={handleDelete}></QueryCard>
      ))}
    </div>
  );
};

export default MyQuerySection;
