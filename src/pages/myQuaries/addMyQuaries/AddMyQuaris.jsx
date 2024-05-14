import React from "react";
import useAuthHook from "../../../firebase/authProvider/AuthHook";
import axios from "axios";
import "./bg.css";
const AddMyQuaris = () => {
  const { user } = useAuthHook();

  /* hadnleSUBMIT QUERY */
  const handleSubmitQueary = async (e) => {
    e.preventDefault();
    const form = e.target;
    const pdName = form.pdName.value;
    const pdBrand = form.pdBrand.value;
    const pdPhoto = form.pdPhoto.value;
    const quaryTitle = form.quaryTitle.value;
    const boycotReasonDetail = form.boycotReasonDetail.value;
//console.log(quaryTitle)
    /* user image and email */

    const userEmail = user?.email;
    const userName = user?.displayName;
    const userImage = user?.photoURL;
    const currentTime = new Date().toLocaleString();
    const recomendateCount = parseInt(form.recomendateCount.value);

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
    //console.log(addQueryInfo);
    /* asixis data fetching */

    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/addQuaries`,
      addQueryInfo
    );
  };

  return (
    <div className="p-5 bg">
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3  text-gray-400 p-8 lg:p-12">
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
              required
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
              required
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
              required
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label className="label">
              <span className="label-text text-xl font-bold text-black">
                Quary Title
              </span>
            </label>


            <select name="quaryTitle" className="select select-error w-full max-w-xs bg-white">

            <option value="Is there any Better product that gives me the same quality?">Is there any Better product that gives me the same quality?</option>

          </select>



{/*             <input
              class="rounded-full w-full bg-violet-100 text-xl border-2
border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950
focus:border-purple-700 focus:outline-none focus:ring-2
focus:ring-purple-500 font-bold text-gray"
              placeholder="quary title..."
              name="quaryTitle"
              required
            /> */}
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
              required
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
              type="number"
              defaultValue={0}
              required
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
