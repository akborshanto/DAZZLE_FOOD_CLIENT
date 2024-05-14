
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


//import './styles.css';

// import required modules

const Slider = () => {

  return (
    <div>
  
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper" 
  >
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/people-shopping-groceries_23-2148530744.jpg?t=st=1715656479~exp=1715660079~hmac=63517079f23f5e09090ea017d1b6b801a4a1907f090ad93cf9be18c78a8c1e7d&w=900)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     {/*  <h1 className="mb-5 text-5xl font-bold">ALTERNATIVE PRDUCT</h1>
      <p className="mb-5">TAlternative Product means a product, other than the Product, that has been approved by Regulatory Authorities or is being developed for approval by Regulatory Authorities,..</p>
 */}
    </div>
  </div>
</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/adopt-pet-concept_23-2148521735.jpg?t=st=1715656396~exp=1715659996~hmac=6bc8d064dec8ec4b9e1528ab1b6b29502b8affa739fb3d3cf376f5e514aad6b2&w=900)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
{/*       <h1 className="mb-5 text-5xl font-bold">MALAYSIA</h1>
      <p className="mb-5">Malaysia represents fantastic value for money at almost all levels. Costs for food, lodging, fuel and internal transportation are very reasonable.</p>
 */}
    </div>
  </div>
</div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/flat-hand-drawn-people-shopping-sale_23-2148824303.jpg?t=st=1715656171~exp=1715659771~hmac=08d0b5ddf55c1be6b6f0da9f1ee9dd452491d1d548bac305cc8829d6a4a72aeb&w=900)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
{/*       <h1 className="mb-5 text-5xl font-bold">INDONESIA</h1>
      <p className="mb-5">Indonesia is known for its diverse tourist attractions. The country has an endless list of wonderful tourist places,.</p>
 */}
    </div>
  </div>
</div>
    </SwiperSlide>


  </Swiper>
    </div>
  )
}

export default Slider
