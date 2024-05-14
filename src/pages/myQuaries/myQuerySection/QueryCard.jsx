import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import { toast } from "react-toastify";

const QueryCard = ({ myQueryInfo,handleDelete }) => {
  const {user}=useAuthHook()
  const {
    _id,
    pdBrand,
    pdName,
    pdPhoto,
    quaryTitle,
    boycotReasonDetail,
    userEmail,
    userName,
    userImage,
    currentTime,
    recomendateCount,
  } = myQueryInfo;

/* delete data  */


  return (
    <div>
      <div class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
          <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
            <figure className="px-10 pt-10">
              <img src={pdPhoto} alt="Shoes" className="rounded-xl" />
            </figure>
            <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
          </div>
        </div>
        <div class="headings *:text-center *:leading-4">
          <p class="text-xl font-serif font-semibold text-[#434955]">
         ProductName:   {pdName}
          </p>
          <p class="text-sm font-semibold text-[#434955] my-2">Brand{pdBrand}</p>
        </div>
        <div class="w-full items-center justify-center flex">
          <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
            <li>
              <p className="text-[16px] font-bold">Query Title:{quaryTitle}</p>
            </li>

            <li>
              <p className="text-[16px] font-bold text-red-400">
                🕑{currentTime}
              </p>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to={`/myQueryDetail/${_id}`}>
            <button class="cursor-pointer uppercase bg-yellow-400  text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              VIEW DETAILS
            </button>
          </Link>

          {/* Recomendtiaon /soliciation form input MODAL*/}


    

          
          <Link to={`/updateQuery/${_id}`}>
  
          <button
          title="Add New"
          class="cursor-pointer uppercase bg-green-400 text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
        >           Update</button>
        
          </Link>
         
          {/* =========================================== */}

          <button onClick={()=>handleDelete(_id)} class="cursor-pointer uppercase bg-red-400 text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            DELETE
          </button>



        </div>

        <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
      </div>
    </div>
  );
};

export default QueryCard;
