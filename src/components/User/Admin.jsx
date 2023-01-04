import React from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.user);
  if (userInfo.role === 0)
    return (
      <div className="grid gap-1 lg:grid-cols-2 lg:grid-rows-2">
        <div className="relative px-2 py-1 flex bg-gradient-to-l dark:to-gray-800 dark:from-gray-700 from-[#FE8B96] to-[#FFBB96] h-[14rem] overflow-hidden">
          <span className="text-white text-lg font-semibold text-left">
            Total Income <i class="fa-solid fa-sack-dollar"></i>
          </span>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] rounded-full bg-white/10 right-[-3rem] top-[-3rem]"></div>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] rounded-full bg-white/10 right-[-3rem] bottom-[-3rem]"></div>
        </div>
        <div className="relative px-2 py-1 flex bg-gradient-to-l dark:to-gray-800 dark:from-gray-700 from-[#3096E7] to-[#8AC7F8] min-h-[14rem] lg:row-span-2 overflow-hidden">
          <span className="text-white text-lg font-semibold text-left">
            Total Customers <i class="fa-solid fa-users"></i>
          </span>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] lg:w-[17rem] lg:h-[17rem] rounded-full bg-white/10 right-[-3rem] top-[-3rem]"></div>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] lg:w-[17rem] lg:h-[17rem] rounded-full bg-white/10 right-[-3rem] bottom-[-3rem]"></div>
        </div>
        <div className="relative px-2 py-1 flex bg-gradient-to-l dark:to-gray-800 dark:from-gray-700 from-[#35D1BB] to-[#7FD8D0] h-[14rem] overflow-hidden">
          <span className="text-white text-lg font-semibold text-left">
            Total Orders <i class="fa-solid fa-hand-holding-box"></i>
          </span>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] rounded-full bg-white/10 right-[-3rem] top-[-3rem]"></div>
          <div className="absolute hover:scale-125 transition-all w-[10rem] h-[10rem] rounded-full bg-white/10 right-[-3rem] bottom-[-3rem]"></div>
        </div>
      </div>
    );
};

export default Admin;
