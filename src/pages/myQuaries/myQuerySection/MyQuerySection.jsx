import React, { useEffect, useState } from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";
import QueryCard from "./QueryCard";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyQuerySection = () => {
  const { user, loading, setLoading } = useAuthHook();
  /* loading */

  const [myQuery, setMyQuery] = useState([]);

  const sort = myQuery.sort(
    (a, b) => Date.parse(b.currentTime) - Date.parse(a.currentTime)
  );
console.log(sort.length  < 0 ? "akboar":"shanto")
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

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Recomendation DELETE this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/myQueryDelete/${id}`
      );
      // toast.success("succesfullt addedd")
      //console.log(data)

      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div  className="my-12">
{



sort.length === 0 ?

<div className=" mx-auto text-center  my-8">

<h1 className=" text-xl lg:text-3xl font-bold text-red-400">QUERY NO FOUND </h1>
<h2>IF You  Want  You Will  add a  QUERY </h2>
<Link to="/addQuery">
<button class="cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
ADD QUARIES        </button>
</Link>
</div>



:

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
{
  
  sort.map((myQueryInfo) => (
    <QueryCard
      myQueryInfo={myQueryInfo}
      key={Math.random()}
      handleDelete={handleDelete}
    ></QueryCard>
  ))


}

</div>


  

}
    
       

    </div>




  );
};

export default MyQuerySection;
