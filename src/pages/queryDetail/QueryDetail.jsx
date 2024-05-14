import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuthHook from "./../../firebase/authProvider/AuthHook";
import axios from "axios";
import { toast } from "react-toastify";
import UseTitle from './../../hooks/UseTitle';
const QueryDetail = () => {
  const QueryDetails = useLoaderData();
  const { user } = useAuthHook();
  const navigate=useNavigate()
  const {
    _id,
    pdBrand,
    pdName,
    pdPhoto,
    quaryTitle,
    boycotReasonDetail,
    userEmail,
    userName,
    userImage,
    currentTime,
    recomendateCount,
    /* alter nation count problem */
  } = QueryDetails;

  /* recomendation update profile */
  const handleADDRecomendation = async (e) => {
    e.preventDefault();
    const form = e.target;

    const R_title = form.R_title.value;
    const R_PdName = form.R_PdName.value;
    const R_PdPhoto = form.R_PdPhoto.value;
    const R_reason = form.R_reason.value;
    /* quary */
    const q_id = _id;
    const pd_Name = pdName;
    const user_Email = userEmail;
    const userNames = userName;
    const curren_Email = user?.email;
    const current_Name = user?.displayName;
    const current_Time = new Date().toLocaleString();

    /* recomendation couo */

    const aDDRecomendationInfo = {
      R_title,

      R_PdPhoto,
      R_reason,
      R_reason,
      pd_Name,
      R_reason,
      q_id,
      user_Email,
      userNames,
      /* currednt */
      curren_Email,
      current_Name,
      current_Time,
    };

    /* post method likely to the recomendatino value */

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/recomendation`,
      aDDRecomendationInfo
    );

    console.log(aDDRecomendationInfo);
    /* asixis data fetching */

    //         const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/addQuaries`,addQueryInfo)
navigate('/quaries')


toast.success("Add A Recomendation")
    // console.log(data)
  };

  return (
    <div>
    <div className='py-16'>
    <div className="max-w-lg p-4 shadow-md bg-gradient-to-r from-teal-600 to-teal-300 text-white p-5 mx-auto rounded-lg">
    <UseTitle heading="VIEW DETAILS OF QUERY PRODUXCT"></UseTitle>
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-100 text-2xl">     Query Title: {quaryTitle}</a>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={pdPhoto} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />

		</div>
		<div className="flex flex-col justify-between p-6 space-y-8  my-5">
		<div className="space-y-2">

{/* 			<h3 className="text-white"> TouristName:<span className='text-gray-600 text-2xl'>{ToureistName}</span></h3> */}
      <h3><span className='text-gray-600 text-xl'>    Brand Name:{pdBrand}</span></h3>

			<h3><span className='text-gray-600 text-2xl text-xl'>     Product Name:{pdName}</span></h3>

	
		
			<h3 ><span className='text-gray-600 text-xl lg:text-2xl'>        Alternation Reasion:{boycotReasonDetail}</span></h3>
			<h3 ><span className='text-gray-600 text-xl lg:text-2xl'>       Date Posted:{currentTime}</span></h3>
      
		
      <div class="flex justify-between items-center mt-4 gap-4">

     
      <div className="avatar">
 
      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 my-5">
        <img src={userImage}/>
 
 
      </div>
 
    </div>
 
 <div>
 <p className="text-white">{userName}</p>
 <p className="text-white" title={userEmail}>{userEmail.slice(0,40)}..</p>
 
 </div>
 
 
 
  
 
 
       {/*  <Link>
          {" "}
          <Link to={`/viewDetail/${_id}`}>
            {" "}
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              VIEW DETAILS
            </button>
          </Link>
        </Link>
        <Link to="/available_food">
          {" "}
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            SHOW ALL
          </button>
        </Link> */}
      </div>
                      {/* Recomendtiaon /soliciation form input MODAL*/}
                      <button
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                      class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black"
                    >
    
                    <button
                    title="Add New"
                    class="group cursor-pointer outline-none hover:rotate-90 duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                      class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke-width="1.5"
                      ></path>
                      <path d="M8 12H16" stroke-width="1.5"></path>
                      <path d="M12 16V8" stroke-width="1.5"></path>
                    </svg>
                  </button>
                  
                   PLEASE   ADD A RECOMENDATION
                    </button>
    
                    <dialog id="my_modal_4" className="modal">
                      <div className="modal-box w-11/12 max-w-5xl">
                        <section className="p-6   bg-white text-black my-8 ">
                          <form action="" onSubmit={handleADDRecomendation}>
                            <div className="col-span-full sm:col-span-3">
                              <label className="label">
                                <span className="label-text  text-xl font-bold text-gray">
                                  Recommendation Title
                                </span>
                              </label>
                              <input
                                class="rounded-full w-full bg-violet-100 text-xl border-2
    border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
    focus:border-purple-700 focus:outline-none focus:ring-2
    focus:ring-purple-500 font-bold text-gray"
                                placeholder="Recommendation Title...."
                                name="R_title"
                                type="text"
                                required
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label className="label">
                                <span className="label-text  text-xl font-bold text-gray">
                                  Recommended product Name
                                </span>
                              </label>
                              <input
                                class="rounded-full w-full bg-violet-100 text-xl border-2
    border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
    focus:border-purple-700 focus:outline-none focus:ring-2
    focus:ring-purple-500 font-bold text-gray"
                                placeholder="Recommended product Name..."
                                name="R_PdName"
                                type="text"
                                required
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label className="label">
                                <span className="label-text  text-xl font-bold text-gray">
                                  Recommended Product Image
                                </span>
                              </label>
                              <input
                                class="rounded-full w-full bg-violet-100 text-xl border-2
    border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
    focus:border-purple-700 focus:outline-none focus:ring-2
    focus:ring-purple-500 font-bold text-gray"
                                placeholder="Recommended Product Image...."
                                name="R_PdPhoto"
                                type="text"
                                required
                              />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                              <label className="label">
                                <span className="label-text  text-xl font-bold text-gray">
                                  Recommendation reason
                                </span>
                              </label>
                              <input
                                class="rounded-full w-full bg-violet-100 text-xl border-2
    border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
    focus:border-purple-700 focus:outline-none focus:ring-2
    focus:ring-purple-500 font-bold text-gray"
                                placeholder="Recommendation reason...."
                                name="R_reason"
                                type="text"
                                required
                              />
                            </div>
    
                            {/* add recomendtiona */}
                            <button class=" w-full cursor-pointer  uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
                              ADD RECOMENDATION
                            </button>
                          </form>
                        </section>
    {/* all reqomendationd */}
    <button class=" w-full cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
    ALL RECOMENDATION
    </button>
    
    
                        
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
                              CLOSE
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
    
                    {/* =========================================== */}
     
      </div>
      
 
	</div>
	</div>
</div>



    </div> 

    </div>
  );
};

export default QueryDetail;
// {  <section className="dark:bg-gray-100 text-green-500">
// <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
//   <div>
//     <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
//       <div className="lg:col-start-2">
//         <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-lato">
//           Query Title: {quaryTitle}
//         </h1>
//         <p className="mt-3 text-lg dark:text-gray-600">
//           Brand Name:{pdBrand}
//         </p>
//         <div className="mt-12 space-y-12">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   className="w-7 h-7"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13l4 4L19 7"
//                   ></path>
//                 </svg>
//               </div>
//             </div>
//             <div className="ml-4">
//               <h2 className="text-lg font-medium leading-6 dark:text-gray-900">
//                 Product Name:{pdName}
//               </h2>
//               {/* ALTER NAtion Reasion */}
//               <h2 className="mt-2 dark:text-gray-600">
//                 {" "}
//                 Alternation Reasion:{boycotReasonDetail}
//               </h2>
//               <h2 bclassName="mt-2 dark:text-gray-600">
//                 {" "}
//                 Date Posted:{currentTime}
//               </h2>
//               <h2 bclassName="mt-2 dark:text-gray-600">
//                 {" "}
//                 Reqomendation_Count:{recomendateCount}
//               </h2>

//               {/* user information who create this interrogarory */}

//               <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
//                 <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
//                   <img
//                     src={userImage}
//                     alt=""
//                     className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-4">
//                   <div>
//                     <h2 className="text-2xl font-semibold">
//                       {userName}
//                     </h2>
//                   </div>
//                   <div className="space-y-1">
//                     <span className="flex items-center space-x-2">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 512 512"
//                         aria-label="Email address"
//                         className="w-4 h-4"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
//                         ></path>
//                       </svg>
//                       <span className="dark:text-gray-600">
//                         {userEmail}
//                       </span>
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Recomendtiaon /soliciation form input MODAL*/}
//               <button
//                 onClick={() =>
//                   document.getElementById("my_modal_4").showModal()
//                 }
//                 class="cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black"
//               >

//               <button
//               title="Add New"
//               class="group cursor-pointer outline-none hover:rotate-90 duration-300"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="50px"
//                 height="50px"
//                 viewBox="0 0 24 24"
//                 class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-blue-200 group-active:fill-blue-600 group-active:duration-0 duration-300"
//               >
//                 <path
//                   d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
//                   stroke-width="1.5"
//                 ></path>
//                 <path d="M8 12H16" stroke-width="1.5"></path>
//                 <path d="M12 16V8" stroke-width="1.5"></path>
//               </svg>
//             </button>
            
//              PLEASE   ADD A RECOMENDATION
//               </button>

//               <dialog id="my_modal_4" className="modal">
//                 <div className="modal-box w-11/12 max-w-5xl">
//                   <section className="p-6   bg-white text-black my-8 ">
//                     <form action="" onSubmit={handleADDRecomendation}>
//                       <div className="col-span-full sm:col-span-3">
//                         <label className="label">
//                           <span className="label-text  text-xl font-bold text-gray">
//                             Recommendation Title
//                           </span>
//                         </label>
//                         <input
//                           class="rounded-full w-full bg-violet-100 text-xl border-2
// border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
// focus:border-purple-700 focus:outline-none focus:ring-2
// focus:ring-purple-500 font-bold text-gray"
//                           placeholder="Recommendation Title...."
//                           name="R_title"
//                           type="text"
//                           required
//                         />
//                       </div>
//                       <div className="col-span-full sm:col-span-3">
//                         <label className="label">
//                           <span className="label-text  text-xl font-bold text-gray">
//                             Recommended product Name
//                           </span>
//                         </label>
//                         <input
//                           class="rounded-full w-full bg-violet-100 text-xl border-2
// border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
// focus:border-purple-700 focus:outline-none focus:ring-2
// focus:ring-purple-500 font-bold text-gray"
//                           placeholder="Recommended product Name..."
//                           name="R_PdName"
//                           type="text"
//                           required
//                         />
//                       </div>
//                       <div className="col-span-full sm:col-span-3">
//                         <label className="label">
//                           <span className="label-text  text-xl font-bold text-gray">
//                             Recommended Product Image
//                           </span>
//                         </label>
//                         <input
//                           class="rounded-full w-full bg-violet-100 text-xl border-2
// border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
// focus:border-purple-700 focus:outline-none focus:ring-2
// focus:ring-purple-500 font-bold text-gray"
//                           placeholder="Recommended Product Image...."
//                           name="R_PdPhoto"
//                           type="text"
//                           required
//                         />
//                       </div>
//                       <div className="col-span-full sm:col-span-3">
//                         <label className="label">
//                           <span className="label-text  text-xl font-bold text-gray">
//                             Recommendation reason
//                           </span>
//                         </label>
//                         <input
//                           class="rounded-full w-full bg-violet-100 text-xl border-2
// border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
// focus:border-purple-700 focus:outline-none focus:ring-2
// focus:ring-purple-500 font-bold text-gray"
//                           placeholder="Recommendation reason...."
//                           name="R_reason"
//                           type="text"
//                           required
//                         />
//                       </div>

//                       {/* add recomendtiona */}
//                       <button class=" w-full cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
//                         ADD RECOMENDATION
//                       </button>
//                     </form>
//                   </section>
// {/* all reqomendationd */}
// <button class=" w-full cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
// ALL RECOMENDATION
// </button>


                  
//                   <div className="modal-action">
//                     <form method="dialog">
//                       {/* if there is a button, it will close the modal */}
//                       <button class="cursor-pointer uppercase bg-white font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
//                         CLOSE
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </dialog>

//               {/* =========================================== */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
//         <img
//           src={pdPhoto}
//           alt=""
//           className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
//         />
//       </div>
//     </div>
//   </div>
// </div>
// </section>}