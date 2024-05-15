import React from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";
import "./bg.css";
import { toast } from "react-toastify";
const AddMyQuaris = () => {
  const { user } = useAuthHook();

  /* hadnleSUBMIT QUERY */
  const handleSubmitQueary = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdName = form.pdName.value;
    const pdBrand = form.pdBrand.value;
    const pdPhoto = form.pdPhoto.value;
    const quaryTitle = form.quaryTitle.value;
    const boycotReasonDetail = form.boycotReasonDetail.value;
//console.log(quaryTitle)
    /* user image and email */

    const userEmail = user?.email;
    const userName = user?.displayName;
    const userImage = user?.photoURL;
    const currentTime = new Date().toLocaleString();
    const recomendateCount = 0;

    const addQueryInfo = {
      pdName,
      pdBrand,
      pdPhoto,
      quaryTitle,
      boycotReasonDetail,
      userEmail,
      userName,
      userImage,
      currentTime,
      recomendateCount,
    };
    console.log(addQueryInfo);
    /* asixis data fetching */

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/addQuaries`,
      addQueryInfo
    );


    toast.success("Success Adding  Quaries");
  };

  return (





<>



<section className="p-6 bg-[#6ab8b4] text-black my-8  ">

<form
  noValidate=""
  action=""
  className=" text-gray-400 container flex flex-col mx-auto space-y-12"
  onSubmit={handleSubmitQueary}
>

<div className="col-span-full sm:col-span-3 text-center  py-4 lg:py-8">

</div>


  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-[#6ab8b4] text-gray-400">
    <div className="col-span-full sm:col-span-3">
      <label className="label">
        <span className="label-text  text-xl font-bold">PRODUCT NAME</span>
      </label>
      <input
      placeholder="product name...."
      name="pdName"
      required
        className=" w-full input input-bordered"
    
      />
    </div>
    
    <div className="col-span-full sm:col-span-3">
      <label className="label">
        <span className="label-text  text-xl font-bold">PRODUCT BRAND</span>
      </label>
      <input
      placeholder="product brand..."
      name="pdBrand"
      required
        className="  w-full input input-bordered"
    
      />
    </div>
 
    <div className="col-span-full sm:col-span-3 ">
      <label className="label">
        <span className="label-text text-xl font-bold">BoycotReasonDetail</span>
      </label>
      <input
      placeholder="boycoting reasin detail..."
      name="boycotReasonDetail"
      required
        className=" w-full input input-bordered"
 
      />
    </div>
{/*     <div className="col-span-full sm:col-span-2">
      <label className="label">
        <span className="label-text text-xl font-bold">Recomendation Count</span>
      </label>
      <input
      placeholder="boycoting resion  detail..."
      name="recomendateCount"
      type="number"
      defaultValue={0}
        className="textarea textarea-info w-full input input-bordered"
   
        required
      ></input>
    </div> */}
    <div className="col-span-full sm:col-span-2">
      <label className="label">
        <span className="label-text text-xl font-bold">Product Img</span>
      </label>
      <input
      placeholder="product image url..."
      type="url"
      name="pdPhoto"
      required
        className="w-full input input-bordered"
  
      />
    </div>
    <div className="col-span-full sm:col-span-2">
      <label className="label">
        <span className="label-text text-xl font-bold">QUERY TITLE</span>
      </label>
      <select name="quaryTitle" className="select select-error w-full max-w-xs bg-white">

      <option value="Is there any Better product that gives me the same quality?">Is there any Better product that gives me the same quality?</option>

    </select>

    </div>
 



  </div>

  <button className=" w-full cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
  ADD QUARY 
</button>
</form>










</section>
{/* ================================================================== */}


</>















    
  );
};

export default AddMyQuaris;
