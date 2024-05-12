import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthHook from '../../firebase/authProvider/AuthHook'
import Loading from '../../hooks/Loading'
import QuariesCard from './QuariesCard'

const Quaries = () => {
  const {loading,setLoading}=useAuthHook()
const [quaries,setQuaries]=useState([])

useEffect(()=>{

const  getData=async ()=>{

  const data=await axios.get(`${import.meta.env.VITE_API_URL}/addQuaries`)
  setQuaries(data.data)
}


getData()
},[])


  return (
    <>
    {
      loading ? <Loading></Loading>:    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8  justify-items-center'>
    
      {
      
      quaries.map(singFeature=><QuariesCard key={Math.random()} singFeature={singFeature}></QuariesCard>)
      
      }
      
      
          </div>
    }
    
    
    
    </>
  )
}

export default Quaries
