import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import User from "../images/User.png";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import storage from "../../firebase";
import { updateUser } from "../../features/user/userAction";

const Dashboard = () => {
  const { userInfo, loading, success } = useSelector((state) => state.user);
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    if(success){
      setImageName(userInfo.avtar.aName)
      setImageUrl(userInfo.avtar.aURL)
    }
  }, [userInfo,dispatch])
  
  const handleProfile = (event) => {
    //delete the previous image if there is one
    if (imageUrl) {
      const deleteRef = ref(storage, `images/${imageName}`);
    // console.log(imageName)
      //delete the file
      deleteObject(deleteRef)
        .then(() => {
          console.log("File deleted successfully");
        })
        .catch((error) => {
          console.log("Uh-oh, an error occurred!: " + error.message);
        });
    }
    //upload the new user image
    const file = event.target.files[0];
    // console.log(file)
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error.message);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(updateUser({uData:{avtar:{aName:file.name,aURL:downloadURL}},uId:userInfo._id}))
          // console.log("File available at", downloadURL);
        });
      }
    );
  };
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
        <div className="relative flex justify-center items-center md:justify-start bg-gradient-to-l w-full h-full from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] dark:from-gray-700 dark:to-gray-800">
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
        <div className="grid md:grid-cols-1 lg:place-items-start gap-3 lg:grid-cols-[25rem_auto]">
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
              <div className="relative grid place-items-center p-[2px]">
                <div
                  className={`absolute w-full h-full ${
                    userInfo.role === 0 ? "shines2" : ""
                  } rounded`}
                ></div>
                <span className="bg-white dark:bg-gray-800 z-10 px-2 text-lg flex justify-center items-center gap-2 font-semibold md:text-2xl">
                  {fullName}
                  {userInfo.role === 1 ? (
                    <i class="fa-solid fa-user md:text-base text-sm"></i>
                  ) : (
                    <i class="fa-solid fa-chess-king text-sm md:text-base"></i>
                  )}
                </span>
              </div>
              <span className="text-xs translate-y-[-0.25rem] px-2 font-sans font-medium">
                {userInfo.email}
              </span>
              <motion.button
                whileTap={{ scale: 0.8 }}
                disabled={loading ? true : false}
                className="bg-gradient-to-l dark:from-gray-300 dark:to-gray-300 from-[#8C5CFF] via-[#4C4DFF] w-[8rem] group  md:py-2 to-[#0CB6FF] overflow-hidde text-white dark:text-gray-700 rounded relative group"
              >
                <span className="absolute group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800 text-gray-300 px-3 py-1 rounded top-[-2rem] right-[2rem] z-10 opacity-0 before:content-[''] before:absolute before:top-[100%] before:left-[45%] before:border-solid before:border-[5px] before:border-transparent before:border-t-gray-800 dark:before:border-t-gray-300/30">
                  image
                </span>
                <input
                  className="w-[0] h-[0]"
                  onChange={handleProfile}
                  type="file"
                  name=""
                  id="file"
                />
                <label
                  className="w-full h-full cursor-pointer px-2 md:px-4"
                  htmlFor="file"
                >
                  <i class="fa-duotone fa-image"></i>{" "}
                  <i class="fa-solid fa-plus pl-2 group-hover:scale-125 transition-all"></i>
                </label>
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
                  } text-blue-600 lg:h-auto w-full font-sans font-medium lg:w-auto top-[2rem] flex lg:block flex-col justify-evenly items-center transition-all bg-white dark:bg-gray-800 dark:text-gray-300 z-10 lg:overflow-visible overflow-hidden`}
                >
                  {/* <Link to={`/user/${userInfo._id}/myOrders`}>
                    {" "}
                    <button className="w-full outline-none  lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-300/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold flex justify-start items-center gap-2 px-3 py-1">
                      <i class="fa-light fa-box"></i>My Orders
                    </button>{" "}
                  </Link> */}
                  {userInfo.role === 0 ? (
                    <>
                      <Link to={`/user/${userInfo._id}`}>
                        {" "}
                        <button className="w-full outline-none overflow-hidden transition-all lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-800/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg  grid grid-cols-[1rem_auto] place-items-center place-content-start gap-2 px-3 py-1">
                          <i class="fa-solid text-sm fa-house"></i>{" "}
                          <span>Dashboard</span>
                        </button>{" "}
                      </Link>
                      <Link to={`/user/${userInfo._id}/products`}>
                        <button
                          onClick={() => setToggle(!toggle)}
                          className="w-full outline-none lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-300/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold grid grid-cols-[1rem_auto] place-items-center place-content-start gap-2 px-3 py-1"
                        >
                          <i class="fa-regular fa-box-open"></i>
                          <span>Products</span>{" "}
                        </button>
                      </Link>
                      <Link to={`/user/${userInfo._id}/products/addProduct`}>
                        <button
                          className={`w-full outline-none lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-300/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold grid grid-cols-[1rem_auto] place-items-center place-content-start gap-2 px-3 py-1`}
                        >
                          <i class="fa-solid fa-hand-holding-box"></i>
                          <span>Add Product</span>{" "}
                        </button>
                      </Link>
                      <Link to={`/user/${userInfo._id}/orders`}>
                        <button
                          className={`w-full outline-none lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-300/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold grid grid-cols-[1rem_auto] place-items-center place-content-start gap-2 px-3 py-1`}
                        >
                          <i class="fa-solid fa-clipboard"></i>
                          <span>Orders</span>{" "}
                        </button>
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                  <Link
                    to={`/user/${userInfo._id}${
                      userInfo.role === 0 ? "/myAccount" : ""
                    }`}
                  >
                    {" "}
                    <button className="w-full outline-none lg:hover:bg-blue-600/30 lg:dark:hover:bg-gray-300/30 cursor-pointer text-left max-[320px]:text-sm text-base md:text-lg font-semibold grid grid-cols-[1rem_auto] place-items-center place-content-start gap-2 px-3 py-1">
                      <i class="fa-solid fa-user"></i> <span>My Account</span>
                    </button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* <div className="relative w-full"> */}
          {/* <div className="lg:translate-y-[-8rem] translate-y-0 pb-2 md:p-3 lg:rounded-md top-[-8rem] md:min-h-[27rem] md:shadow-xl bg-slate-100 lg:translate-x-[-0.5rem] md:rounded w-full"> */}
          <Outlet />
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
