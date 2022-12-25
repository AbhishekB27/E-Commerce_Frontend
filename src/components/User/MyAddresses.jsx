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
    <form onSubmit={handleData} className="w-full px-2">
      <div className="md:text-2xl space-x-2 text-lg font-semibold text-left">
        Add Delivery Address{" "}
        <i class="fa-solid fa-truck-fast text-sm md:text-base"></i>
        <i class="fa-solid fa-location-dot text-sm md:text-base"></i>
      </div>
      <div className="">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 p-1 md:p-4 ">
          <div className="grid gap-5">
            <div className="flex flex-col gap-1 justify-center items-start">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="fName"
              >
                FullName
              </label>
              <input
                onChange={handleAddress}
                className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                type="text"
                name="fullName"
                id="fName"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center items-start">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="pName"
              >
                Phone Number
              </label>
              <input
                onChange={handleAddress}
                className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                type="text"
                name="mobileNumber"
                id="pName"
              />
            </div>
            <div className="grid grid-cols-2 max-[290px]:grid-cols-1 gap-3">
              <div className="flex flex-col gap-1 justify-center items-start">
                <label
                  className="text-black text-sm font-semibold"
                  htmlFor="pcode"
                >
                  Pincode
                </label>
                <input
                  onChange={handleAddress}
                  className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                  type="text"
                  name="pincode"
                  id="pCode"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center items-start">
                <label
                  className="text-black text-sm font-semibold"
                  htmlFor="lName"
                >
                  Use My Location
                </label>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  disabled
                  className="rounded-md cursor-not-allowed p-2 group w-full shadow-md bg-gradient-to-l hover:bg-gradient-to-r from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white outline-none text-sm font-semibold font-poppins"
                >
                  <i class="fa-solid fa-location-crosshairs group-hover:scale-125 transition-all"></i>
                </motion.button>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="grid grid-cols-2 max-[290px]:grid-cols-1 gap-3">
              <div className="flex flex-col gap-1 justify-center items-start">
                <label
                  className="text-black text-sm font-semibold"
                  htmlFor="sName"
                >
                  State
                </label>
                <input
                  onChange={handleAddress}
                  className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                  type="text"
                  name="state"
                  id="sName"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center items-start">
                <label
                  className="text-black text-sm font-semibold"
                  htmlFor="cName"
                >
                  City
                </label>
                <input
                  onChange={handleAddress}
                  className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                  type="text"
                  name="city"
                  id="cName"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-center items-start">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="bName"
              >
                House No., Building Name
              </label>
              <input
                onChange={handleAddress}
                className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                type="text"
                name="houseNumber"
                id="bName"
              />
            </div>
            <div className="flex flex-col gap-1 justify-center items-start">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="rName"
              >
                Road name, Area, Colony
              </label>
              <input
                onChange={handleAddress}
                className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
                type="text"
                name="areaName"
                id="rName"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 max-[430px]:grid-cols-1 lg:col-span-2 gap-3">
            <div className="flex relative flex-col gap-1 justify-center items-start">
              <label
                className="text-black text-sm font-semibold"
                htmlFor="tAddress"
              >
                Type of Address
              </label>
              <input
                onChange={handleAddress}
                className=" absolute peer appearance-none"
                type="checkbox"
                checked={checked.home}
                onClick={() => setChecked({ home: true, work: false })}
                name="type"
                id="home"
                value="home"
              />
              <label
                className="rounded-md peer-checked:border-blue-600 peer-checked:text-blue-600 cursor-pointer border border-[#ccc] p-2 w-full outline-none text-sm text-gray-400 font-semibold font-poppins"
                htmlFor="home"
              >
                <i class="fa-solid fa-house px-2"></i>Home
              </label>
            </div>
            <div className="flex relative flex-col gap-1 justify-end items-center">
              <input
                onChange={handleAddress}
                className=" absolute peer appearance-none"
                type="checkbox"
                checked={checked.work}
                onClick={(event) => {
                  setChecked({
                    home: false,
                    work: true,
                    value: event.target.value,
                  });
                }}
                name="type"
                id="work"
                value="work"
              />
              <label
                className="rounded-md peer-checked:border-blue-600 peer-checked:text-blue-600 cursor-pointer border border-[#ccc] p-2 w-full outline-none text-sm text-gray-400 font-semibold font-poppins"
                htmlFor="work"
              >
                <i class="fa-regular fa-building px-2"></i>Work
              </label>
            </div>
            <div className="flex flex-col border border-transparent gap-1 justify-end items-center">
              <motion.button
                disabled={loadingA ? true : false}
                whileTap={{ scale: 0.8 }}
                type="submit"
                className="rounded-md p-2 group w-full shadow-md bg-gradient-to-l hover:bg-gradient-to-r from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white outline-none text-sm font-semibold font-poppins"
              >
                Add Address{" "}
                <i class="fa-solid fa-plus pl-1 group-hover:scale-125 transition-all"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-left font-semibold text-blue-600 text-lg md:text-2xl">
          Saved Addresses :
        </div>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
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
          ) : addressInfo.length > 0 ? (
            addressInfo.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  className="sm:max-w-[30rem] relative w-full flex flex-col overflow-hidden justify-center items-start px-3 py-2 border-2 border-dashed border-green-400 bg-green-500/30 font-sans font-normal"
                >
                  <div className="absolute top-[-2.5rem] right-[-2.5rem] w-[5rem] h-[5rem] rotate-45 bg-green-500 text-white">
                    {true ? (
                      <i class="absolute left-[2rem] bottom-[0.55rem] rotate-[-45deg] fa-solid fa-house"></i>
                    ) : (
                      <i class="absolute left-[2rem] bottom-[0.55rem] rotate-[-45deg] fa-solid fa-building"></i>
                    )}
                  </div>
                  <div className="font-medium">Address {index + 1}</div>
                  <div className="text-left">
                    <span>{item.fullName}</span>
                    <span> ,{item.houseNumber}</span>
                    <span>
                      , {item.areaName}, {item.city}
                    </span>
                    <div>
                      {" "}
                      <span>{item.state}</span> <span>, {item.pincode}</span>{" "}
                    </div>
                    <span>
                      <span className="font-medium">Mobile</span> -{" "}
                      {item.mobileNumber}
                    </span>
                  </div>
                  <div className="font-medium flex gap-3 justify-start items-center">
                    <button>
                      <i class="pr-2 fa-solid fa-trash-can"></i>Remove
                    </button>
                    <button>
                      <i class="pr-2 fa-solid fa-pen-to-square"></i>Edit
                    </button>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="grid place-items-center border-2 border-dashed border-blue-600 font-semibold">
              {" "}
              <img
                className="w-[6rem] md:w-[10rem] h-[6rem] md:h-[10rem]"
                src={EmptyA}
                alt=""
              />{" "}
              No Address{" "}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default MyAddresses;
