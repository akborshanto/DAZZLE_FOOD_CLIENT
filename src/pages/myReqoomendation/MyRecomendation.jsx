import React, { useEffect, useState } from 'react'
import useAuthHook from '../../firebase/authProvider/AuthHook';
import axios from 'axios';

const MyRecomendation = () => {
const {user}=useAuthHook()
const [myReco,setMyReco]=useState([])

useEffect(()=>{

const getData=async()=>{

const {data}= await axios.get(`${import.meta.env.VITE_API_URL}/specifiqReco/${user.email}`)
setMyReco(data)

}

getData()
},[])

/* delete a specifinq fetchin */
const handleDeleteReco=(id)=>{

  fetch(`${import.meta.env.VITE_API_URL}/specifiqRecoDelete/${id}`,{


    method:"DELETE",

  })
  .then(res=>res.json())
  .then(data=>{

//deleteed from ui
if(data.deletedCount >0){

const remaining=myReco.filter(D_UI=>{

  D_UI._id !==id

})
setMyReco(remaining)


 
}




  })
  


// try{

// const {data}=await axios.delete(`${import.meta.env.VITE_API_URL}/specifiqRecoDelete/${id}`)

// console.log(data)


// }catch(err){
//   console.log('thii i ai err')
// }




//   console.log(id)
}

  return (
    <div>














    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
  
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th>Delete Recomendation</th>
        </tr>
      </thead>
      <tbody>

      {
        myReco.map(specifiqUser=>
          

 (

            <tr>
            <th>
             
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={specifiqUser.R_PdPhoto} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{specifiqUser.pd_Name}</div>
                  <div className="text-sm opacity-50">{specifiqUser.R_title}</div>
                </div>
              </div>
            </td>
            <td>
           {specifiqUser.current_Name}
              <br/>
              <span className="badge badge-ghost badge-sm">{specifiqUser.curren_Email}</span>
            </td>
            <td>{specifiqUser.current_Time}</td>
            <th>
            <button
            class="relative border-2 border-black group hover:border-green-500 w-12 h-12 duration-500 overflow-hidden"
            type="button" onClick={()=>handleDeleteReco(specifiqUser._id)}
          >
            <p
              class="font-Manrope text-3xl h-full w-full flex items-center justify-center text-white duration-500 relative z-10 group-hover:scale-0" 
            >
              X
            </p>
            <span
              class="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-9 duration-500 top-12 left-0"
            ></span>
            <span
              class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-9 duration-500 left-12"
            ></span>
            <span
              class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-9 duration-500 right-12"
            ></span>
            <span
              class="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
            ></span>
          </button>
          
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

export default MyRecomendation
