import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import User from "../images/User.png";
import "react-loading-skeleton/dist/skeleton.css";


const DashboardH = () => {
    const { userInfo, loading, success } = useSelector((state) => state.user);
    const fullName =
      Object.keys(userInfo ?? {}).length === 0
        ? undefined
        : `${userInfo.firstName} ${userInfo.lastName}`;
  return (
    <div className='w-full h-full space-y-1 md:space-y-0'>
        <div className="grid grid-cols-[5rem_auto] rounded-md p-2 md:p-4 lg:p-6 bg-slate-200">
                <div className="text-2xl md:text-4xl border flex justify-center items-center">
                  <i class="fa-solid fa-user-pen"></i>
                </div>
                {loading ? (
                  <div className="grid gap-2 ">
                    <span className="leading-[1] h-[1.5rem]  block w-[30%]">
                      <Skeleton width="100%" height="100%" />
                    </span>
                    <span className="leading-[1] h-[1.5rem]  block">
                      <Skeleton width="100%" height="100%" />
                    </span>
                  </div>
                ) : (
                  <div className="border-2 flex items-start jus flex-col">
                    <span className="font-semibold text-sm md:text-base lg:text-xl text-left relative">
                      {fullName} {userInfo.role === 1 ? <i class="fa-solid fa-user md:text-base text-sm"></i> : <i class="fa-solid fa-chess-king text-sm md:text-base"></i>}
                    </span>
                    <p className="text-xs md:text-sm font-sans font-medium text-left">
                      Please make sure these details are up to date as they'll
                      be used for your porduct orders.
                    </p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-1 md:p-4">
                <div className="grid gap-5">
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="fName"
                    >
                      FirstName
                    </label>
                    <input
                      value={userInfo.firstName}
                      className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="fName"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="lName"
                    >
                      LastName
                    </label>
                    <input
                      value={userInfo.lastName}
                      className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="lName"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="uName"
                    >
                      UserName
                    </label>
                    <input
                      value={userInfo.userName}
                      className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="uName"
                    />
                  </div>
                </div>
                <div className="grid gap-5">
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="eName"
                    >
                      Email
                    </label>
                    <input
                      value={userInfo.email}
                      className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="eName"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="cPassword"
                    >
                      Current Password
                    </label>
                    <input
                      disabled
                      className="rounded-md cursor-not-allowed p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="cPassword"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-start">
                    <label
                      className="text-black text-sm font-semibold"
                      htmlFor="nPassword"
                    >
                      New Password
                    </label>
                    <input
                      className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                      type="text"
                      name=""
                      id="nPassword"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-[auto_8rem] grid-cols-[auto_5rem] gap-2 px-1 md:px-4">
                <span className="text-xs md:text-sm font-sans font-medium flex justify-end items-center">
                  Your data will be handled with care
                </span>
                <button disabled={loading ? true : false} className="bg-gradient-to-l hover:bg-gradient-to-r from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white py-1 md:py-2 rounded-md">
                  Update
                </button>
              </div>
    </div>
  )
}

export default DashboardH