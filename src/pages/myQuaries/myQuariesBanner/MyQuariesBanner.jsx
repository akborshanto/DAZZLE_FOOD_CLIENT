import React from 'react'
import { Link } from 'react-router-dom'

const MyQuariesBanner = () => {
  return (
    <div>
    <div
    className='w-full bg-center bg-cover h-[38rem] my-12'
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
    }}
  >
    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
          Build your new <span class='text-blue-400'>Saas</span> Project
        </h1>
        <br />
        <Link to="/addQuery">
        <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
       ADD QUARIES        </button>
      </Link>
      </div>
    </div>
  </div>
    </div>
  )
}

export default MyQuariesBanner
