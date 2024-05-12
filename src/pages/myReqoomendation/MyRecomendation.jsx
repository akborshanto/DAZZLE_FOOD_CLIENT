import React, { useEffect, useState } from 'react'
import useAuthHook from '../../firebase/authProvider/AuthHook';
import axios from 'axios';
import MyRecomendationTable from './MyRecomendationTable';

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

console.log(myReco)
  return (
    <div>

    <table className="table">
    <thead>
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <th>Name</th>
      <th>Job</th>
      <th>Favorite Color</th>
      <th></th>
    </tr>
  </thead>

  {
    myReco.map(specifiqUser=><MyRecomendationTable specifiqUser={specifiqUser}></MyRecomendationTable>)
  }
  
    </table>




    </div>
  )
}

export default MyRecomendation
