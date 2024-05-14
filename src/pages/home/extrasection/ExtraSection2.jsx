import React from 'react'

const ExtraSection2 = () => {
  return (
    <div>
    <section className="my-8 bg-red-100 font-bold">
    <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 bg-green-200">
      <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying A alternative Product</h1>
    </div>
    <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
      <div className="flex flex-col items-center mx-12 lg:mx-0">
        <div className="relative text-center">
         
          <p className="px-6 py-1 text-lg italic">The product quality is consistently outstanding, exceeding my expectations every tim.</p>
 
        </div>
        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
        <p>KARIM VENGIMA</p>
      </div>
      <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
        <div className="relative text-center">
          
          <p className="px-6 py-1 text-lg italic">I was completely impressed with their professionalism and customer service.”bis, reprehenderit ducimus incidunt quisquam quae veritatis, quos iure harum.</p>
          
        </div>
        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
        <p>Leroy Jenkins</p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ExtraSection2
