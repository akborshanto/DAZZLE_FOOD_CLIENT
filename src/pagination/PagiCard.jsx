
import React from 'react'
import { Link } from 'react-router-dom'

const PagiCard = ({pagin}) => {


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
      } = pagin;
  return (
    <div>
    <div class="w-80 lg:w-80 md:w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <img
      class="w-full h-40 object-cover rounded-t-lg"
      alt={pdName}
      src={pdPhoto}
    />
    <div class="p-4 w-[200px]">
      <h2 class="text-xl  font-semibold  text-gray-400"><span className='text-gray-300 font-bold'>ProductName</span>:{pdName.slice(0,30)}</h2>
      <p class="text-gray-600"  title={quaryTitle}>Query Title:{quaryTitle.slice(0,30)}</p>
      <p class="text-gray-600" title={pdBrand} >BrandName:{pdBrand.slice(0,40) }</p>
      <p class="text-gray-600" title={currentTime}>Date Posted:{currentTime.slice(0,9)}</p>
     {/* alternatio and date Pasted problem */}
      <p class="text-gray-600  " title={boycotReasonDetail}>AlterNation Reason:{boycotReasonDetail.slice(0,40)}</p>
 
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

export default PagiCard
