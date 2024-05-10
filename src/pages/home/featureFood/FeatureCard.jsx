import React from 'react'
import {Link} from 'react-router-dom'
const FeatureCard = ({singFeature}) => {

const {_id,foodImage,foodDonatorName,foodQuantity,expireDate,additionalNotes,foodName,pickupLocation}=singFeature;

  return (
<>
<div class="w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img class="w-full h-40 object-cover rounded-t-lg" alt={foodName} src={foodImage}/>
        <div class="p-4">
            <h2 class="text-xl  font-semibold">FoodName:{foodName}</h2>
            <p class="text-gray-600">DonatorName:{foodDonatorName}</p>
            <p class="text-gray-600">Quantity:{foodQuantity}</p>
            <p class="text-gray-600">Expire Date:{expireDate}</p>
            <p class="text-gray-600">pickupLocation:{pickupLocation}</p>
            <p class="text-gray-600">AdditionalNote:{additionalNotes}</p>
           
            
            <div class="flex justify-between items-center mt-4">
<Link>              <Link to='/viewDetail'>  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">VIEW DETAILS</button></Link></Link>
              <Link to='/available_food'>  <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">SHOW ALL</button></Link>
            </div>
        </div>
    </div>
</>
  )
}

export default FeatureCard
