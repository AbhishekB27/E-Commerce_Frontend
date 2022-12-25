import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import User from "../images/User.png";
import "react-loading-skeleton/dist/skeleton.css";
import DashboardH from "./DashboardH";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { userInfo, loading, success } = useSelector((state) => state.user);
  const fullName =
    Object.keys(userInfo ?? {}).length === 0
      ? undefined
      : `${userInfo.firstName} ${userInfo.lastName}`;
  const [bar, setBar] = useState(false);
  const dashMenu = () => {
    setBar(!bar);
  };
  return (
    <div className="w-full grid place-items-center">
      <div className="container grid p-1 md:grid-rows-[11rem_4.5rem_auto] max-[320px]:grid-rows-[11rem_2.5rem_auto] grid-rows-[11rem_3.5rem_auto] h-auto">
        <div className="relative flex justify-center items-center md:justify-start bg-gradient-to-l w-full h-full from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF]">
          <div className="max-[320px]:w-[4rem] overflow-hidden max-[320px]:h-[4rem] w-[6rem] h-[6rem] md:h-[8rem] md:w-[8rem]  translate-y-[5.4rem] md:translate-x-[3.5rem] bg-slate-100 rounded-full">
            {loading ? (
              <Skeleton
                style={{ lineHeight: 1, display: "block" }}
                width="100%"
                height="100%"
              />
            ) : (
              <img
                className="w-[6rem] h-[6rem] max-[320px]:w-[4rem] max-[320px]:h-[4rem] md:h-[8rem] md:w-[8rem] object-contain"
                src={userInfo.avtar.aURL ?? User}
                alt=""
              />
            )}
          </div>
        </div>
        <div className=""></div>
        <div className="grid md:grid-cols-1 gap-3 lg:grid-cols-[25rem_auto]">
          {loading ? (
            <div className="grid gap-2 place-items-center md:place-items-start md:translate-x-[3.5rem]">
              <span className="leading-[1] h-[1.5rem]  block w-[60%]">
                {" "}
                <Skeleton width="100%" height="100%" />{" "}
              </span>
              <span className="leading-[1] h-[1.5rem]  block w-[45%]">
                {" "}
                <Skeleton width="100%" height="100%" />{" "}
              </span>
              <span className="leading-[1] h-[1.5rem]  block w-[30%]">
                {" "}
                <Skeleton width="100%" height="100%" />{" "}
              </span>
            </div>
          ) : (
            <div
              className={`flex relative flex-col gap-1 justify-center items-center md:items-start lg:translate-x-[3.5rem]`}
            >
              <span className="text-lg font-semibold md:text-2xl">
                {fullName}
              </span>
              <span className="text-xs translate-y-[-0.25rem] font-sans font-medium">
                {userInfo.email}
              </span>
              <motion.button
                whileTap={{ scale: 0.8 }}
                disabled={loading ? true : false}
                className="bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white px-2 md:px-4 md:py-1  rounded"
              >
                Edit Profile
              </motion.button>
              <div className="relative flex flex-col gap-2 bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] w-full lg:w-[88%]">
                <button
                  className="w-fit text-xl ml-1 block lg:hidden text-white"
                  onClick={dashMenu}
                >
                  {!bar ? (
                    <i class="fa-solid fa-bars"></i>
                  ) : (
                    <i class="fa-solid fa-xmark"></i>
                  )}
                </button>
                <div
                  className={`absolute lg:static ${
                    bar ? "h-[13.15rem]" : "h-0"
                  } text-blue-600 lg:h-auto w-full lg:w-auto top-[2rem] flex lg:block flex-col justify-evenly items-center transition-all bg-white z-10 lg:overflow-visible overflow-hidden`}
                >
                  <Link to={`/user/${userInfo._id}`}>
                    {" "}
                    <button className="w-full outline-none border-b-2 border-b-transparent focus:border-blue-600 lg:hover:bg-blue-600/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold flex justify-start items-center gap-2 px-3 py-1">
                      <i class="fa-solid fa-house"></i>Dashboard
                    </button>{" "}
                  </Link>
                  <Link to={`/user/${userInfo._id}/myOrders`}>
                    {" "}
                    <button className="w-full outline-none border-b-2 border-b-transparent focus:border-blue-600 lg:hover:bg-blue-600/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold flex justify-start items-center gap-2 px-3 py-1">
                      <i class="fa-light fa-box"></i>My Orders
                    </button>{" "}
                  </Link>
                  <Link to={`/user/${userInfo._id}/myAddresses`}>
                    {" "}
                    <button className="w-full outline-none border-b-2 border-b-transparent focus:border-b-blue-600 lg:hover:bg-blue-600/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold flex justify-start items-center gap-2 px-3 py-1">
                      <i class="fa-solid fa-location-dot"></i>My Address
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="relative">
            <div className="lg:absolute pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 lg:translate-x-[-0.5rem] md:rounded w-full">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
