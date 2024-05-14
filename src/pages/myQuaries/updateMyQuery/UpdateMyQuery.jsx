import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const UpdateMyQuery = () => {





const updateLoader=useLoaderData()
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
  } = updateLoader;



const updateQuery=async(e)=>{
    e.preventDefault()
  //  console.log('asdfsaf')

    const form = e.target;
    const pdName = form.pdName.value;
   // const pdBrand = form.pdBrand.value;
    const pdPhoto = form.pdPhoto.value;
    const quaryTitle = form.quaryTitle.value;
    const boycotReasonDetail = form.boycotReasonDetail.value;
/* all info */
const updateQueryInfo = {
    pdName,


    pdPhoto,
    quaryTitle,
    boycotReasonDetail
  };

/* update fetching */


// const url={`${import.meta.env.VITE_API_URL}/updateQuery/${_id}`}

const {data}=await axios.put(`${import.meta.env.VITE_API_URL}/updateQuery/${_id}`,updateQueryInfo)



console.log(data)
navigate("/myquary")


}

    



  return (
    <div>
    <section className="p-6   bg-white text-black my-8 ">
    <form action="" onSubmit={updateQuery}>
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-gray">
            PRODUCT_NAME
          </span>
        </label>
        <input
          class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
          placeholder="prodcut naem...."
    defaultValue={pdName}
          name="pdName"
          type="text"
        />
      </div>
=
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-gray">
            QUERY TITLE
          </span>
        </label>
        <input
          class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
          placeholder="Recommended product Name..."
defaultValue={quaryTitle}
          name="quaryTitle"
          type="text"
        />
      </div>
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-gray">
            IMAGE
          </span>
        </label>
        <input
          class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
          placeholder="Recommended Product Image...."
          name="pdPhoto"
 defaultValue={pdPhoto}
          type="text"
        />
      </div>
      <div className="col-span-full sm:col-span-3">
        <label className="label">
          <span className="label-text  text-xl font-bold text-gray">
            boycotReasonDetail
          </span>
        </label>
        <input
          class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
          placeholder="Recommendation reason...."
defaultValue={boycotReasonDetail}
          name="boycotReasonDetail"
          type="text"
        />
      </div>

      {/* add recomendtiona */}
      <button class=" w-full cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
        UPDATETED
      </button>
    </form>
  </section>

    </div>
  )
}

export default UpdateMyQuery
