import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useAuthHook from './../../../firebase/authProvider/AuthHook';

const ViewDetail = () => {
  const singleFeatur=useLoaderData()
/* user email */
const {user}=useAuthHook()
/* destructruing */
const {_id,foodName,foodImage,foodQuantity,expiredDateTime,
  foodDonatorEmail,foodDonatorName,userEmail,requestDate,
  pickupLocation,expireDate,additionalNotes}=singleFeatur;


/* featchi exiros VIEWDETALS */

console.table(singleFeatur)
  return (
    <div>
    <section className="dark:bg-gray-100 text-white">
    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
    
     
      <div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div className="lg:col-start-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-lato">DONAR_NAME: {foodDonatorName}</h1>
            <p className="mt-3 text-lg dark:text-gray-600">FOOD_FIKER_LOC{pickupLocation}</p>
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


                  {/* view derail midal============================== */}

{/* The button to open modal */}
{/* You can open the modal using document.getElementById('ID').showModal() method */}

<button onClick={()=>document.getElementById('my_modal_4').showModal()} class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
  REQUEST
</button>

<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <section className="p-6   bg-white text-black my-8 ">

  <form
    noValidate=""
    action=""
    className="  w-full flex flex-col mx-auto space-y-12 text-black"
  
  >
  
  
  
    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-white text-gray-400">
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-black">FoodName</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={foodName}
        disabled

      />
      </div>
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-black ">Food IMAGE</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={foodImage}
        disabled
      />
      </div>
   
      <div className="col-span-full sm:col-span-3 ">
        <label className="label">
          <span className="label-text text-xl font-bold text-black">FOOD ID</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={_id}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold text-black">Food Donator Name</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={foodDonatorName}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">User Email</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray" defaultValue={user?.email.substring(0,20)}
        placeholder="Enter anything..."   
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">Current Time</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={new Date().toLocaleString()}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">pickupLocation</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={pickupLocation}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">totaVisitorsPerYear</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={pickupLocation}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">ExpireDate</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."   defaultValue={expireDate}
        disabled
      />
      </div>
      <div className="col-span-full sm:col-span-2">
        <label className="label">
          <span className="label-text text-xl font-bold">Additional Notes</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="additional note..."   defaultValue={additionalNotes}

      />
      </div>
    </div>
  
    <button class="block w-full p-3 text-center rounded-sm bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
   REQUEST
  </button>




  </form>
  </section>
  
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button  class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
        CLOSE
      </button>
      </form>
    </div>
  </div>
</dialog>

{/* ============================================================== */}

                
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
