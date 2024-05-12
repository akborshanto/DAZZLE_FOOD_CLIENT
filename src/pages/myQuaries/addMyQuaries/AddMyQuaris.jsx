import React from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";

const AddMyQuaris = () => {
  const { user } = useAuthHook();

  /* hadnleSUBMIT QUERY */
  const handleSubmitQueary =async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdName = form.pdName.value;
    const pdBrand = form.pdBrand.value;
    const pdPhoto = form.pdPhoto.value;
    const quaryTitle = form.quaryTitle.value;
    const boycotReasonDetail = form.boycotReasonDetail.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const userImage = form.userImage.value;
    const currentTime = form.currentTime.value;
    const recomendateCount = form.recomendateCount.value;

    const addQueryInfo = {
        pdName,
      pdBrand,
      pdPhoto,
      quaryTitle,
      boycotReasonDetail,
      userEmail,
      userName,
      userImage,
      currentTime,
      recomendateCount,
    };

    /* asixis data fetching */
    
        const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/addQuaries`,addQueryInfo)
       

console.log(data)

  }

  return (
    <div className="p-5">
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 bg-white text-gray-400 p-8 bg-white lg:p-12">
        <form onSubmit={handleSubmitQueary}>
          <div className="col-span-full sm:col-span-3">
            <label className="label">
              <span className="label-text  text-xl font-bold text-gray">
                Product Name
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="product name...."
              name="pdName"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label className="label">
              <span className="label-text  text-xl font-bold text-gray ">
                Product Brand
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="product brand..."
              name="pdBrand"
            />
          </div>

          <div className="col-span-full sm:col-span-3 ">
            <label className="label">
              <span className="label-text text-xl font-bold text-gray">
                Product Image{" "}
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="product image url..."
              name="pdPhoto"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold text-black">
                Quary Title
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="quary title..."
              name="quaryTitle"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Boycotting Reason Details
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="boycoting reasin detail..."
              name="boycotReasonDetail"
            />
          </div>
          {/* user inforamtin yet to create rr */}

          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">User Email</span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="user email....."
              defaultValue={user?.email}
              disabled
              name="userEmail"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">Name</span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="Name..."
              defaultValue={user?.displayName}
              disabled
              name="userName"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">Image</span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="image..."
              defaultValue={user?.photoURL}
              disabled
              name="userImage"
              type="text"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Curren Data And Time
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="boycoting reasin detail..."
              defaultValue={new Date().toLocaleString()}
              disabled
              name="currentTime"
              
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold">
                Recomendation Count
              </span>
            </label>
            <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
              
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="boycoting resion  detail..."
              name="recomendateCount"
              type={``}
              defaultValue={0}
            />
          </div>

          {/* add  quary button */}
          <div className="col-span-full sm:col-span-2">
            <button className=" w-full cursor-pointer uppercase bg-green-300 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
              ADD QUARY BUTTON
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMyQuaris;
