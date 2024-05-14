import React from "react";
import { Link } from "react-router-dom";
const RecentCard = ({ singFeature }) => {
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
    /* alter nation count problem */
  } = singFeature;

  return (
    <>





















   <div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out ">
   <img
     class="w-full h-40 object-cover rounded-t-lg"
     alt={pdName}
     src={pdPhoto}
   />
   <div class="p-4">
     <h2 class="text-xl  font-semibold">ProductName:{pdName}</h2>
     <p class="text-gray-600">Query Title:{quaryTitle}</p>
     <p class="text-gray-600">BrandName:{pdBrand }</p>
     <p class="text-gray-600">Date Posted:{currentTime}</p>
    {/* alternatio and date Pasted problem */}
     <p class="text-gray-600">AlterNation Reason:{boycotReasonDetail}</p>

{/* user information {name,image as thumbnail} */}
     <div class="flex justify-between items-center mt-4 gap-4">

     
     <div className="avatar">

     <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
       <img src={userImage}/>


     </div>

   </div>

<div>
<p className="text-gray">{userName}</p>
<p className="text-gray" title={userEmail}>{userEmail.slice(0,40)}..</p>

</div>







      {/*  <Link>
         {" "}
         <Link to={`/viewDetail/${_id}`}>
           {" "}
           <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
             VIEW DETAILS
           </button>
         </Link>
       </Link>
       <Link to="/available_food">
         {" "}
         <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
           SHOW ALL
         </button>
       </Link> */}
     </div>
   </div>
 </div>

    </>
  );
};

export default RecentCard;
