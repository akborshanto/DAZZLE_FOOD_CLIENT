import React from 'react'
import { Link } from 'react-router-dom'

const MyQuariesBanner = () => {
  return (
    <div>




  <div className="hero min-h-screen my-8" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/young-working-woman-use-magnifying-glass-searching-information-folder_1150-51045.jpg?t=st=1715664466~exp=1715668066~hmac=e68a7f72ea1e7dc9e5bb3c8eba002c62f0c63744e216f33ff5c2f73003e02404&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
{/*       <h1 className="mb-5 text-5xl font-bold">MALAYSIA</h1>
      <p className="mb-5">Malaysia represents fantastic value for money at almost all levels. Costs for food, lodging, fuel and internal transportation are very reasonable.</p>
 */} <div className='text-center'>
 <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
 <h1 className='font-bold text-2xl lg:text-4xl'> ADD THE QUERY</h1>
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












    </div>
  )
}

export default MyQuariesBanner
