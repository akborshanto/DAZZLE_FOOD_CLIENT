import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div>



{/*     <div



    className='w-full bg-center bg-cover h-[38rem] my-12'
    style={{
      backgroundImage: `url("https://img.freepik.com/free-photo/happy-man-with-handbags-dancing-after-shopping-spree_482257-18132.jpg?t=st=1715660265~exp=1715663865~hmac=df5c152e706e427dd3c9114dae588c3b38fcae11d7a46cf2cf33a90830cbfa2a&w=1060")`,
    }}
  >
    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
<h1 className='font-bold text-2xl lg:text-4xl'> LOOK ALL QUERIES</h1>
        </h1>
        <br />
        <Link to="/quaries">
        <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
        ALL   QUARIES
        </button>
      </Link>
      </div>
    </div>
  </div>
 */}

  <div className="hero min-h-screen my-8" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1715660778~exp=1715664378~hmac=3b187e3a67881a20ee63b7811ae23c69aaa97d186a0aacac3330aedcd3baddeb&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
{/*       <h1 className="mb-5 text-5xl font-bold">MALAYSIA</h1>
      <p className="mb-5">Malaysia represents fantastic value for money at almost all levels. Costs for food, lodging, fuel and internal transportation are very reasonable.</p>
 */} <div className='text-center'>
 <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
 <h1 className='font-bold text-2xl lg:text-4xl'> LOOK ALL QUERIES</h1>
         </h1>
         <br />
         <Link to="/quaries">
         <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
         ALL   QUARIES
         </button>
       </Link>
       </div>
    </div>
  </div>
</div>













    </div>














    
  )
}

export default Banner
