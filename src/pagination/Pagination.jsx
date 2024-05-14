import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './pagination.css'
import PagiCard from './PagiCard'
import useAuthHook from '../firebase/authProvider/AuthHook'
const Pagination = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const {loading,setLoading}=useAuthHook()
const [quaries,setQuaries]=useState([])

  const [pagi,setPagin]=useState([])

  const pagination=useLoaderData()
  const {count}=useLoaderData()
/* 5 */
const [itemPerPage,setItemPerPage] = useState(10)//5
//const itemPage=10;//1
const numberOfPagers=Math.ceil(count / itemPerPage)//2
/* curredtn page v-6 */
const [currentPage,setCurrentPage]=useState(0)


/* for *////3
// const pages=[]
// for(let i= 0 ; i<numberOfPagers;i++){
// pages.push(i)

// }
/* short cut */
const pages=[...Array(numberOfPagers).keys()]//3
//4 crate a button
// /const [itemPerPage,setItemPerPage] = useState(10)//5





  /* todo */
  

/* clg */
const handleIterPerPage=(e)=>{//4
//  console.log(e.target.value)
const val=parseInt(e.target.value)
console.log(val)
setItemPerPage(val)
setCurrentPage(0)


}

/* hadnle prev */
const handlePrev=()=>{
if(currentPage > 0){
  setCurrentPage(currentPage -1)
}


}
/* hadnleNext */
const hadnleNext=()=>{

  if(currentPage < pages.length){
    setCurrentPage(currentPage + 1)
  }
}
/* userEffect */


useEffect(()=>{

fetch(`${import.meta.env.VITE_API_URL}/addQuaries`)
.then(res=>res.json())
.then(data=>{
  setQuaries(data)
})


},[])
/* server fetch */

useEffect(()=>{
fetch(`https://querypdgateway.vercel.app/addQuariess?page=${currentPage}&size=${itemPerPage}`)
.then(res=>res.json())
.then(data=>setPagin(data))

},[currentPage,itemPerPage])
  //console.log(count)


// const queryFilter=quaries.filter(filters=>filters?.pdName?.toLowerCase().includes(search.toLowerCase()))

const searchQueryFilter=quaries.filter(queryItem=> queryItem?.pdName?.toLowerCase().includes(searchQuery.toLowerCase()))









  return (
    <>
    

    <div className='text-center my-12'>
    <input
    class=" bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
    autocomplete="off"
    placeholder="Search query..."
    name="text"
    type="text"
    value={searchQuery}
    onChange={(e)=>setSearchQuery(e.target.value)}
    
    />
    
    </div>
      


    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
      
{

  searchQueryFilter.map(pagin=><PagiCard pagin={pagin}></PagiCard>)
}


    </div>

{/* paginantion */}


<div className='paginaton mx-auto my-8 text-center'>
<h1 className='text-bold text-red-400 text-xl'>CURRNT PAGE:{currentPage}</h1>
<button className='btn btn-danger' onClick={handlePrev}>PREV</button>
{
  pages.map(page=><button 
    
    className={`${currentPage ===page && "selected btn btn-primary mx-6 " } btn  btn-primary mx-4`}
    key={Math.random()}
    onClick={()=>setCurrentPage(page)}
    >{page}</button> )
}
<button className='btn btn-danger' onClick={hadnleNext}>NEXT</button>
<select name="" value={itemPerPage} id="" onChange={handleIterPerPage}>
<option value="5">5</option>
<option value="10">10</option>
<option value="20">20</option> 
<option value="10">30</option>
</select>

</div>
    
    </>
    






  )
}

export default Pagination
