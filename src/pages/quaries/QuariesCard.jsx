import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const QuariesCard = ({interrogatory}) => {
  const navigate=useNavigate()
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
      } = interrogatory;

      /*  */

  return (
    <div>
    <div class="p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      class="w-[500px]] h-40 object-cover rounded-t-lg"
      alt={pdName}
      src={pdPhoto}
    />
    <div class="p-4">
      <h2 class="text-xl  font-semibold">ProductName:{pdName}</h2>
      <p class="text-gray-600">Query Title:{quaryTitle}</p>
      <p class="text-gray-600" title={pdBrand}>BrandName:{pdBrand.slice(0,20) }</p>
      <p class="text-gray-600">Date Posted:{currentTime}</p>
     {/* alternatio and date Pasted problem */}
      <p class="text-gray-600" title={boycotReasonDetail}>AlterNation Reason:{boycotReasonDetail.slice(0,30)}</p>
 
      <p class="text-gray-600">RecomendateCount:{recomendateCount}</p>
 
 {/* user information {name,image as thumbnail} */}
      <div class="flex justify-between items-center mt-4">
 
      <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={userImage}/>
      </div>
    </div>
 <h1 className="bg-red-400">{userName}</h1>
 
 
 
 
 
 
 
 
 
 

      </div>

<Link  to={`/queryDetail/${_id}`}>
      
<button className=" w-full cursor-pointer uppercase bg-green-300 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black" > 
RECOMEND{/* recomended */}
      </button>
</Link>
         
    </div>
  </div>
 
    </div>
  )
}

export default QuariesCard
