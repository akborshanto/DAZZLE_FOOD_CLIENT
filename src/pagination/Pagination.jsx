import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Pagination = () => {
  const pagination=useLoaderData()
  const {count}=useLoaderData()
/* 5 */
const [itemPerPage,setItemPerPage] = useState(10)//5
const itemPage=10;//1
const numberOfPagers=Math.ceil(count / itemPage)//2


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
  



  //console.log(count)
  return (
    <div>
      

{/* paginantion */}


<div>

{
  pages.map(btn=><button className='btn btn-primary  mx-7' key={Math.random()}>{btn}</button> )
}

</div>


    </div>
  )
}

export default Pagination
