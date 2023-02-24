import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import User from "../images/User.png";
import "react-loading-skeleton/dist/skeleton.css";
import Admin from "./Admin";
import { motion } from "framer-motion";
import { Formik, useFormik } from "formik";
import UserDataSchema from "./userDataSchema";
import { updateUser } from "../../features/user/userAction";

const MyAccount = () => {
  const { userInfo, loading, success } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const fullName =
    Object.keys(userInfo ?? {}).length === 0
      ? undefined
      : `${userInfo.firstName} ${userInfo.lastName}`;
      const handleUser = (data) => {
        console.log(data)
        dispatch(updateUser({uData:data,uId:userInfo._id}))
      }
    let formik = useFormik({
      initialValues:{
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:''
      },
      validationSchema: UserDataSchema,
      onSubmit:handleUser
    })  
    useEffect(() => {
      formik.setValues(
        {
          firstName:userInfo.firstName,
          lastName:userInfo.lastName,
          userName:userInfo.userName,
          email:userInfo.email,
          password:''
        }
      )
    }, [success])
    
  return (
    <div className="lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl dark:bg-gray-900 bg-gray-200 lg:translate-x-[-0.5rem] md:rounded w-full grid gap-2 space-y-1 md:space-y-0">
      {/* <Admin /> */}
      <div className="text-center text-lg font-semibold md:text-left border-b-2 border-blue-500 dark:border-b-gray-300">
        My Account
      </div>
      <div className="grid grid-cols-[5rem_auto] rounded-md dark:bg-gray-800 bg-slate-200">
        <div className="text-2xl md:text-4xl flex justify-center items-center">
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
          <div className="flex items-start flex-col">
            <span className="font-semibold dark:bg-transparent bg-slate-200 text-sm md:text-base lg:text-xl text-left relative">
              {fullName}{" "}
              <span className="text-sm">
                {" "}
                ({userInfo.role === 0 ? "Admin" : "User"}){" "}
              </span>
            </span>
            <p className="text-xs md:text-sm font-sans font-medium text-left">
              Please make sure these details are up to date as they'll be used
              for your porduct orders.
            </p>
          </div>
        )}
      </div>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2 p-1 md:p-4">
        <div className="grid gap-5">
          <div className="flex flex-col gap-1 justify-center items-start">
            <label className="text-sm font-semibold" htmlFor="fName">
              FirstName
            </label>
            <input
              value={formik.values.firstName}
              onChange={formik.handleChange}
              className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name="firstName"
              id="fName"
            />
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.firstName && formik.touched.firstName)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.firstName}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <label className="text-sm font-semibold" htmlFor="lName">
              LastName
            </label>
            <input
              value={formik.values.lastName}
              onChange={formik.handleChange}
              className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name="lastName"
              id="lName"
            />
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.lastName && formik.touched.lastName)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.lastName}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <label className="text-sm font-semibold" htmlFor="uName">
              UserName
            </label>
            <input
              value={formik.values.userName}
              onChange={formik.handleChange}
              className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name="userName"
              id="uName"
            />
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.userName && formik.touched.userName)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.userName}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="flex flex-col gap-1 justify-center items-start">
            <label className="text-sm font-semibold" htmlFor="eName">
              Email
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email} 
              className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name="email"
              id="eName"
            />
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.email && formik.touched.email)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.email}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <label
              className="text-sm font-semibold"
              htmlFor="cPassword"
            >
              Current Password
            </label>
            <input
              disabled
              placeholder="********"
              className="rounded-md cursor-not-allowed p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name=""
              id="cPassword"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start">
            <label
              className="text-sm font-semibold"
              htmlFor="nPassword"
            >
              New Password
            </label>
            <input
              className="rounded-md p-2 w-full shadow-md outline-none text-sm text-gray-400 font-semibold font-poppins"
              type="text"
              name="password"
              id="nPassword"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <div className="h-[1.4rem] w-full col-end-3">
                  {" "}
                  {(formik.errors.password && formik.touched.password)  ? (
                    <div className="text-left text-red-500 text-sm px-1">
                      {formik.errors.password}
                    </div>
                  ) : null}{" "}
                </div>
          </div>
        </div>
      <div className="grid md:grid-cols-[auto_8rem] col-span-2 grid-cols-[auto_5rem] gap-2">
        <span className="text-xs md:text-sm font-sans font-medium flex justify-end items-center">
          Your data will be handled with care
        </span>
        <motion.button
        type="submit"
        whileTap={{scale:0.8}}
        transition={{duration:0.1}}
          disabled={loading ? true : false}
          className="bg-gradient-to-l py-1 md:py-2 hover:bg-gradient-to-r dark:text-gray-800 font-sans font-medium dark:to-gray-300 dark:from-gray-300 from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white rounded-md"
        >
         {loading ? "Loading..." : "Update"}
        </motion.button>
      </div>
      </form>
    </div>
  );
};

export default MyAccount;
