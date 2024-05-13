import React, { useEffect, useState } from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";
import QueryCard from "./QueryCard";

const MyQuerySection = () => {
  const { user, loading, setLoading } = useAuthHook();
  /* loading */

  const [myQuery, setMyQuery] = useState([]);

const sort=myQuery.sort((a,b)=> Date.parse( b.currentTime )- Date.parse( a.currentTime))

// const item=sort.map(data=>console.log(data.currentTime))
  useEffect(() => {
    const getData = async () => {
      // setLoading(true)

      //axios
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/userQuery/${user?.email}`
      );
      setMyQuery(data);
      // setLoading(false)
    };

    getData();
  }, [user]);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
      {sort.map((myQueryInfo) => (
        <QueryCard myQueryInfo={myQueryInfo} key={Math.random()}></QueryCard>
      ))}
    </div>
  );
};

export default MyQuerySection;
