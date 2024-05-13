import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MyQueryViewDetail = () => {
    const myQueryData=useLoaderData()


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
      } = myQueryData;

  return (
    <div>
    <section className="dark:bg-gray-100 text-green-400">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-lato">
                  Query Title: {quaryTitle}
                </h1>
                <p className="mt-3 text-lg dark:text-gray-600">
                  Brand Name:{pdBrand}
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium leading-6 dark:text-gray-900">
                        Product Name:{pdName}
                      </h2>
                      {/* ALTER NAtion Reasion */}
                      <h2 className="mt-2 dark:text-gray-600">
                        {" "}
                        Alternation Reasion:{boycotReasonDetail}
                      </h2>
                      <h2 bclassName="mt-2 dark:text-gray-600">
                        {" "}
                        Date Posted:{currentTime}
                      </h2>
                      <h2 bclassName="mt-2 dark:text-gray-600">
                        {" "}
                        Reqomendation_Count:{recomendateCount}
                      </h2>

                      {/* user information who create this interrogarory */}

                      <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                          <img
                            src={userImage}
                            alt=""
                            className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
                          />
                        </div>
                        <div className="flex flex-col space-y-4">
                          <div>
                            <h2 className="text-2xl font-semibold">
                              {userName}
                            </h2>
                          </div>
                          <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                aria-label="Email address"
                                className="w-4 h-4"
                              >
                                <path
                                  fill="currentColor"
                                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                                ></path>
                              </svg>
                              <span className="dark:text-gray-600">
                                {userEmail}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                  
                      {/* =========================================== */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={pdPhoto}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyQueryViewDetail
