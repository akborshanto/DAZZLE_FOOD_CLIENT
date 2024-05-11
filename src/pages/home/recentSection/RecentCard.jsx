import React from "react";
import { Link } from "react-router-dom";
const RecentCard = ({ singFeature }) => {
  const {
    _id,
    foodImage,
    foodDonatorName,
    foodQuantity,
    expireDate,
    additionalNotes,
    foodName,
    pickupLocation,
  } = singFeature;

  return (
    <>



   <div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
   <img
     class="w-full h-40 object-cover rounded-t-lg"
     alt={foodName}
     src={foodImage}
   />
   <div class="p-4">
     <h2 class="text-xl  font-semibold">ProductName:{foodName}</h2>
     <p class="text-gray-600">Query Title:{foodDonatorName}</p>
     <p class="text-gray-600">BrandName:{foodQuantity}</p>
     <p class="text-gray-600">Date Posted:{expireDate}</p>
     <p class="text-gray-600">AlterNation Reason:{pickupLocation}</p>
     <p class="text-gray-600">AdditionalNote:{additionalNotes}</p>
{/* user information {name,image as thumbnail} */}
     <div class="flex justify-between items-center mt-4">


<h1 className="bg-red-400">USER THUBMNAIL</h1>










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
