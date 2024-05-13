import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthHook from '../../firebase/authProvider/AuthHook'
import Loading from '../../hooks/Loading'
import QuariesCard from './QuariesCard'

const Quaries = () => {
/* serarch  */
const [search,setSearch]=useState("")


  const {loading,setLoading}=useAuthHook()
const [quaries,setQuaries]=useState([])

useEffect(()=>{

const  getData=async ()=>{

  const data=await axios.get(`${import.meta.env.VITE_API_URL}/addQuaries`)
  setQuaries(data.data)
}


getData()
},[])
console.log(search)




/* search funcioalitry */
//quary filter by productName
const queryFilter=quaries.filter(filters=>filters?.pdName?.toLowerCase().includes(search.toLowerCase()))


console.log(search)

/* i will show the interrogatory data with 3 column */
  return (
    <>
    {
      loading ? <Loading></Loading>: 
      
      <div>
<div className='text-center my-12'>
<input
class=" bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
autocomplete="off"
placeholder="Search here..."
name="text"
type="text"
value={search}
onChange={(e)=>setSearch(e.target.value)}

/>

</div>
  
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8  justify-items-center'>





    
      {
      
        queryFilter.map(interrogatory=><QuariesCard key={Math.random()} interrogatory={interrogatory}></QuariesCard>)
      
      }
      
      
          </div>
          </div>

    }
    
    
    
    </>
  )
}

export default Quaries
