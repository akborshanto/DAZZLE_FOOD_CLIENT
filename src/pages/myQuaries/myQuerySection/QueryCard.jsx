import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const QueryCard = ({ myQueryInfo }) => {
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
  } = myQueryInfo;

  /* update query */
  const updateQuery = async (e) => {
    e.preventDefault();

    const form = e.target;
    const R_title = form.R_title.value;
    const R_PdName = form.R_PdName.value;
    const R_PdPhoto = form.R_PdPhoto.value;
    const R_reason = form.R_reason.value;
    const updateQueryInfo = {
      R_title,

      R_PdPhoto,
      R_reason,
      R_PdPhoto,
      pdName,
      R_reason,
    };



  const { data } = await axios.put( `${import.meta.env.VITE_API_URL}/updateQuery/${_id}`,
    updateQueryInfo
  )



  }

  return (
    <div>
      <div class="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div class="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
          <div class="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
            <figure className="px-10 pt-10">
              <img src={pdPhoto} alt="Shoes" className="rounded-xl" />
            </figure>
            <div class="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
          </div>
        </div>
        <div class="headings *:text-center *:leading-4">
          <p class="text-xl font-serif font-semibold text-[#434955]">
            {pdName}
          </p>
          <p class="text-sm font-semibold text-[#434955]">{pdBrand}</p>
        </div>
        <div class="w-full items-center justify-center flex">
          <ul class="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
            <li>
              <p className="text-[16px] font-bold">{quaryTitle}</p>
            </li>
            <li>
              <p className="text-[16px] font-bold">{quaryTitle}</p>
            </li>
            <li>
              <p className="text-[16px] font-bold text-red-400">
                🕑{currentTime}
              </p>
            </li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Link to={`/myQueryDetail/${_id}`}>
            <button class="cursor-pointer uppercase bg-yellow-400  text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
              VIEW DETAILS
            </button>
          </Link>

          {/* Recomendtiaon /soliciation form input MODAL*/}
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            class="cursor-pointer uppercase bg-green-400  text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition"
          >
            <button
              title="Add New"
              class="group cursor-pointer outline-none hover:rotate-90 duration-300"
            ></button>
            Update
          </button>

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
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
                      name="R_title"
                      type="text"
                    />
                  </div>
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
                      name="R_PdName"
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
                      name="R_PdPhoto"
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
                      name="R_reason"
                      type="text"
                    />
                  </div>

                  {/* add recomendtiona */}
                  <button class=" w-full cursor-pointer uppercase bg-green-400 font-bold my-6 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition  text-black">
                    UPDATETED
                  </button>
                </form>
              </section>

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

          <button class="cursor-pointer uppercase bg-red-400 text-white px-2 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
            DELETE
          </button>
        </div>

        <hr class="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
      </div>
    </div>
  );
};

export default QueryCard;
