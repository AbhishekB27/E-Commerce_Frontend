import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import EmptyA from "./EmptyA.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { setUserAddress } from "../../features/customerAddress/addressAction";

const MyAddresses = () => {
  const { loadingA, addressInfo } = useSelector((state) => state.addresses);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [checked, setChecked] = useState({
    home: false,
    work: false,
  });
  const [address, setAddress] = useState({});
  const handleAddress = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAddress((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleData = (event) => {
    event.preventDefault();
    console.log(address);
    dispatch(setUserAddress({ address, userId }));
  };
  return (
    <div className="w-full px-2 lg:translate-y-[-8rem] translate-y-0 pb-2 space-y-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl dark:bg-gray-900 bg-gray-200 text-blue-600 dark:text-gray-300 lg:translate-x-[-0.5rem] md:rounded">
      <div className="text-left font-semibold grid place-content-start w-full text-lg md:text-2xl">
        My Addresses
        <div className="flex gap-2">
          <span className="text-xs grid place-items-center sm:text-sm font-sans font-normal px-2 py-1 rounded-sm bg-white/70 dark:bg-white/30 w-fit">
            SAVED ADDRESS {addressInfo.length}
          </span>
          <motion.button
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.1 }}
            className="bg-blue-500 dark:bg-gray-300 dark:text-gray-800 w-fit font-sans font-medium text-base text-white px-2 py-1 rounded"
          >
            {" "}
            <i class="fa-regular fa-plus"></i> Add Address
          </motion.button>
        </div>
      </div>
      <div className="grid gap-2">
        {loadingA ? (
          <div className="w-full min-h-[10.5rem]">
            <span className="leading-[1] block w-full h-full">
              {" "}
              <Skeleton
                baseColor="#c0c2c9"
                highlightColor="#E2E8F0"
                width="100%"
                height="100%"
              />{" "}
            </span>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {addressInfo.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="sm:max-w-[30rem] relative w-full flex flex-col overflow-hidden justify-center items-start px-3 py-2 bg-white/70 dark:bg-white/30 font-sans font-normal"
                >
                  <div className="absolute top-[-2.5rem] right-[-2.5rem] w-[5rem] h-[5rem] rotate-45 bg-blue-500 dark:bg-gray-700 text-white">
                    {true ? (
                      <i class="absolute left-[2rem] bottom-[0.55rem] rotate-[-45deg] fa-solid fa-house"></i>
                    ) : (
                      <i class="absolute left-[2rem] bottom-[0.55rem] rotate-[-45deg] fa-solid fa-building"></i>
                    )}
                  </div>
                  <div className="font-medium">Address {index + 1}</div>
                  <div className="text-left flex flex-col">
                    <span>{item.fullName}</span>
                    <div>
                      <span> {item.houseNumber},</span>
                      <span>{item.areaName}</span>
                    </div>
                    {item.city}
                    <div>
                      {" "}
                      <span>{item.state}</span> <span>, {item.pincode}</span>{" "}
                    </div>
                    <span>
                      <span className="font-medium">Mobile</span> -{" "}
                      {item.mobileNumber}
                    </span>
                  </div>
                  <div className="font-medium flex gap-3 justify-start items-center self-end">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.1 }}
                    >
                      <i class="pr-2 fa-solid fa-trash-can"></i>Remove
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      transition={{ duration: 0.1 }}
                    >
                      <i class="pr-2 fa-solid fa-pen-to-square"></i>Edit
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddresses;
