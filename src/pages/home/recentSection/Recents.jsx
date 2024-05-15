import axios from "axios";
import React, { useEffect, useState } from "react";
//import FeatureCard from './RecentCard'
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import Loading from "../../../hooks/Loading";
import RecentCard from "./RecentCard";

const Recents = () => {
  const [feature, setFeature] = useState([]);
  const { loading, setLoading } = useAuthHook();
  /* feature useEffect data fetching with axios */
  useEffect(() => {
    /* axios */

    const getdata = async () => {
      // setLoading(true);
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/addQuaries`
      );
      // const data=await axios.get('data.json')
      setFeature(data.data);
      // setLoading(false);
    };

    getdata();
  }, []);


  return (
    <>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8  justify-items-center">
          {feature.slice(0, 6).map((singFeature) => (
            <RecentCard
              key={Math.random()}
              singFeature={singFeature}
            ></RecentCard>
          ))}
        </div>
      
    </>
  );
};

export default Recents;
