import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './bg.css'
import UseTitle from './../../hooks/UseTitle';
const ReqomendationForMe = () => {
const[recoForme,setRecoForMe]=useState([])

useEffect(()=>{
const getData=async ()=>{

const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/recoData`)
setRecoForMe(data)


}
  getData()
},[])



//console.log(recoForme)
  return (
    <div className='bg text-white'>







{/*     <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-white text-gray-400">
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-black">FoodName</span>
        </label>
        <input
        class="rounded-full w-full bg-violet-100 text-xl border-2
         border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
          focus:border-purple-700 focus:outline-none focus:ring-2
           focus:ring-purple-500 font-bold text-gray"
        placeholder="Enter anything..."  
      

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
        placeholder="Enter anything..." 
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
        placeholder="Enter anything..."  
     
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
        placeholder="Enter anything..."   
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
           focus:ring-purple-500 font-bold text-gray" 
        placeholder="Enter anything..."   
    
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
        placeholder="Enter anything..."  
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
        placeholder="Enter anything..."   
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
        placeholder="Enter anything..."   
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
        placeholder="Enter anything..."  
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
        placeholder="additional note..."  

      />
      </div>
    </div>
   */}
   <div className="overflow-x-auto">
   <table className="table">
     {/* head */}
     <thead>
       <tr>
         <th>
 
         </th >
         <th className='text-white font-bold font-lato p-6 text-[16px]'>RECOMENDER_INFORMATION</th>
         <th className='text-white font-bold font-lato p-6 text-[16px]'>PRODUCT INFORMATION</th>
         <th className='text-white font-bold font-lato p-6 text-[16px]'>ECOMENDER_TITLE</th>
         <th className='text-white font-bold font-lato p-6 text-[16px]'>ECOMENDER_REASON</th>
       </tr>
     </thead>
     <tbody>

     {
       recoForme.map(specifiqUser=>
         

(

           <tr>
           <th>
            
           </th>
           <td>
             <div className="flex items-center gap-3">
               <div className="avatar">
                 <div className="mask mask-squircle w-12 h-12">
                   <img src={specifiqUser.R_PdPhoto || "NOT FOUND"} alt={specifiqUser.pd_Name || "not FOUND"} />
                 </div>
               </div>
               <div>
                 <div className="font-bold">{specifiqUser.pd_Name || ""}</div>
                 <div className="text-sm opacity-50">{specifiqUser.R_title}</div>
               </div>
             </div>
           </td>
           <td>
          {specifiqUser.current_Name}
             <br/>
             <span className=" badge-sm">{specifiqUser.curren_Email}</span>
           </td>
           <td>{specifiqUser.current_Time}</td>

           
           <td>{specifiqUser.R_reason}</td>


           <th>
    
         
           </th>
         </tr>
        
 
 
         )

       
  
  



       

         

       )
     }





       {/* row 1 */}
   
     </tbody>
     {/* foot */}
     <tfoot>
     
     </tfoot>
     
   </table>
 </div>

    </div>
  )
}

export default ReqomendationForMe
