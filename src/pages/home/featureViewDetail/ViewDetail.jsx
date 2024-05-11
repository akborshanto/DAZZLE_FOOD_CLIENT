import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ViewDetail = () => {
  const singleFeatur=useLoaderData()

/* destructruing */
const {foodName,foodImage,foodQuantity,expiredDateTime,
  foodDonatorEmail,foodDonatorName,userEmail,requestDate,
  pickupLocation,expireDate,additionalNotes}=singleFeatur;


/* featchi exiros VIEWDETALS */

console.table(singleFeatur)
  return (
    <div>
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
    
     
      <div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-lato">DONAR_NAME: {foodDonatorName}</h1>
            <p className="mt-3 text-lg dark:text-gray-600">{pickupLocation}</p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium leading-6 dark:text-gray-900">Food Name:{foodName}</h2>
                  <h2 className="mt-2 dark:text-gray-600" > FoodQuanTity:{foodQuantity}</h2>
                  <h2 bclassName="mt-2 dark:text-gray-600" > ExpireDate:{expireDate}</h2>
                  <button className='btn btn-warning'>REQUEST</button>
                </div>
              </div>
      
            
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <img src={foodImage} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ViewDetail
