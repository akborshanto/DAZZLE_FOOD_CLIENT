import React, { useEffect, useState } from 'react'
import useAuthHook from '../../../firebase/authProvider/AuthHook'
import axios from 'axios'
import QueryCard from './QueryCard'

const MyQuerySection = () => {

const {user}=useAuthHook()

console.log(user)

const [myQuery,setMyQuery]=useState([])


useEffect(()=>{

const getData=async ()=>{


//axios
const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/userQuery/${user?.email}`)
setMyQuery(data)


}

getData()
},[user])

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-items-center">
   


{

  myQuery.map(myQueryInfo => <QueryCard myQueryInfo={myQueryInfo} key={Math.random()}></QueryCard>)
}


    </div>
  )
}

export default MyQuerySection
