import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './pagination.css'
import PagiCard from './PagiCard'
const Pagination = () => {

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
  setPagin(data)
})


},[])
/* server fetch */

useEffect(()=>{
fetch(`http://localhost:5000/addQuariess?page=${currentPage}&size=${itemPerPage}`)
.then(res=>res.json())
.then(data=>setPagin(data))

},[currentPage,itemPerPage])
  //console.log(count)
  return (
    <div>
      
{

  pagi.map(pagin=><PagiCard></PagiCard>)
}
{/* paginantion */}


<div className='paginaton'>
<p>CURRNT PAGE:{currentPage}</p>
<button className='btn btn-danger' onClick={handlePrev}>PREV</button>
{
  pages.map(page=><button 
    
    className={currentPage ===page && "selected btn btn-primary mx-6 " }
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


    </div>
  )
}

export default Pagination
