import React, { useState } from "react";
import Hamburger from "./Hamburger";
import ToggleMode from "./ToggleMode";
import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "../images/EmptyCart.svg";
import ShoppingBag from "../images/shopping.png";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { logOut } from "../../features/user/userSlice";

const Header = ({ setTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  const [cartI, setCart] = useState(false);
  const { userInfo, loading } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const closeMobileMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="flex flex-col gap-1">
      <div className="flex max-[380px]:flex-col max-[380px]:gap-2 lg:z-50 sm:gap-0 sm:flex-row justify-between items-center pb-1 border-b-2 border-[#5465ff] dark:border-gray-300">
        <div className="relative border-[2px] group  md:border-[3px] border-[#5465ff] dark:border-gray-300 cursor-pointer flex justify-center gap-2 items-center before:content-[''] before:absolute before:h-[95px] before:w-[60%] before:left-[-18px] hover:before:translate-x-[100%] before:transition-all overflow-hidden before:rotate-[-28deg] before:bg-gradient-to-l before:from-[#8C5CFF] before:via-[#4C4DFF] before:to-[#0CB6FF] dark:before:bg-gradient-to-l dark:before:to-gray-300 dark:before:from-gray-300 dark:before:text-[#121212]">
          <div className="flex justify-center  gap-2 relative items-end -z-0 p-1 ring-2 ring-inset ring-white dark:ring-[#121212]">
            <i className="fa-solid text-white group-hover:text-[#5465ff] dark:group-hover:text-gray-300 dark:text-[#121212] pl-1 fa-bag-shopping md:text-2xl hover:scale-105 transition-all"></i>
            <span className="text-sm text-white group-hover:text-[#5465ff] dark:group-hover:text-gray-300 dark:text-[#121212] font-medium md:text-lg tracking-wider lg:font-extrabold">
              AB
            </span>
            <span className="text-sm ml-6 font-medium group-hover:text-white dark:group-hover:text-[#121212] md:text-lg tracking-wider lg:font-extrabold">
              STORE
            </span>
          </div>
        </div>
        <div
          className={`grid max-[380px]:w-full sm:w-auto ${
            Object.keys(userInfo ?? {}).length === 0
              ? "grid-cols-[60px_60px_35px_35px] md:grid-cols-[80px_80px_40px_40px] max-[380px]:grid-cols-4 gap-3"
              : "grid-cols-[70px_35px_35px] md:grid-cols-[90px_40px_40px] max-[380px]:grid-cols-3 gap-3"
          }`}
        >
          {Object.keys(userInfo ?? {}).length === 0 ? (
            <>
              {" "}
              <Link to="/signUp">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="bg-gradient-to-l w-full h-full from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:bg-gradient-to-l dark:to-gray-300 dark:from-gray-300 dark:text-[#121212] rounded-md font-semibold text-sm md:text-base lg:text-lg"
                >
                  SignUp
                </motion.button>
              </Link>
              <Link to="/login">
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="bg-gradient-to-l w-full h-full from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:bg-gradient-to-l dark:to-gray-300 dark:from-gray-300 dark:text-[#121212] rounded-md font-semibold text-sm md:text-base lg:text-lg"
                >
                  LogIn
                </motion.button>
              </Link>{" "}
            </>
          ) : loading ? (
            <Skeleton
              style={{ lineHeight: 1, display: "block" }}
              width="100%"
              height="100%"
            />
          ) : (
            <div className="relative grid place-items-center z-20 grid-cols-[auto_auto_25px] bg-gradient-to-l from-[#8C5CFF] via-[#4C4DFF] to-[#0CB6FF] text-white dark:bg-gradient-to-l dark:to-gray-300 dark:from-gray-300 dark:text-[#121212] rounded-md font-semibold text-sm md:text-base lg:text-lg">
              <div className="rounded-full w-[25px] md:w-[30px] h-[25px] md:h-[30px] overflow-hidden">
                {" "}
                <i class="fa-solid fa-user"></i>{" "}
              </div>{" "}
              {loading ? (
                <Skeleton />
              ) : (
                <span>{`${userInfo.firstName
                  .charAt(0)
                  .toUpperCase()}${userInfo.lastName
                  .charAt(0)
                  .toUpperCase()}`}</span>
              )}{" "}
              <button
                className="outline-none"
                // onBlur={() => {
                //   setProfile(
                //     profile === false ? false : profile ? false : true
                //   );
                // }}
              >
                {" "}
                <i
                  onClick={() => {
                    setProfile(profile ? false : true);
                  }}
                  class={`fa-light fa-angle-down cursor-pointer ${
                    profile ? "rotate-0" : "rotate-[-180deg]"
                  } transition-all duration-300`}
                ></i>{" "}
              </button>
              <div
                className={`absolute flex flex-col justify-evenly items-start md:text-base top-[2.4rem] md:top-[3.03rem] overflow-hidden shadow-md dark:drop-shadow-[0_4px_6px_rgba(255,255,255,0.25)] bg-white dark:bg-[#121212] text-blue-500 dark:text-gray-300 w-[16.2rem] md:w-[18.6rem] ${
                  profile ? "h-[10rem] md:h-[15rem]" : "h-[0rem]"
                } transition-all duration-300`}
              >
                <Link className="w-full" to={`/user/${userInfo._id}`}>
                  <div
                    onClick={() => {
                      setProfile(!profile);
                    }}
                    className="flex z-10 justify-start items-center gap-2 px-4 py-2 w-full cursor-pointer hover:bg-[#e2fdff]/50 dark:hover:bg-gray-300/30"
                  >
                    {" "}
                    <i class="fa-solid fa-user"></i> Profile
                  </div>
                </Link>
                <Link className="w-full" to={`/user/${userInfo._id}/myOrders`}>
                  <div
                    onClick={() => {
                      setProfile(!profile);
                    }}
                    className="flex z-10 justify-start items-center gap-2 px-4 py-2 w-full cursor-pointer hover:bg-[#e2fdff]/50 dark:hover:bg-gray-300/30"
                  >
                    {" "}
                    <i class="fa-solid fa-clipboard"></i> MyOrders
                  </div>
                </Link>
                <div
                  // onClick={() => {
                  //   setProfile(!profile);
                  // }}
                  className="flex z-10 justify-start bg-gray-300 dark:bg-white/70  items-center gap-2 px-4 py-2 w-full cursor-not-allowed"
                >
                  {" "}
                  <i class="fa-solid fa-gear"></i> Setting
                </div>
                <button
                  onClick={() => {
                    setProfile(!profile);
                    dispatch(logOut());
                  }}
                  className="flex z-10 justify-start items-center gap-2 px-4 py-2 w-full cursor-pointer hover:bg-[#e2fdff]/50 dark:hover:bg-gray-300/30"
                >
                  {" "}
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
                </button>
              </div>
            </div>
          )}
          <div className="relative grid place-items-center pt-[2px] pr-[2px]  w-auto h-auto gap-2 rounded-lg bg-[#e2fdff] dark:bg-gray-300 text-[#5465ff] dark:text-[#121212]">
            
            {cart.length > 0 ? (
              <div className="absolute top-[-6px]  md:top-[-6px] right-[-6px] border-2 border-white dark:border-[#121212] bg-[#e2fdff] dark:bg-gray-300 text-[#5465ff] dark:text-[#121212] w-[19px] h-[15px] md:w-[20px] md:h-[20px] pb-4 rounded-full text-xs font-bold md:font-extrabold">
                {cart.length}
              </div>
            ) : (
              ""
            )}
            <motion.button
            whileTap={{scale:0.8}}
            transition={{duration:0.1}}
              onClick={() => {
                navigate('/cartItems')
              }}
              className={`grid outline-none place-items-center cursor-pointer `}
            >
              <i class=" text-base md:text-sm lg:text-lg fa-solid fa-cart-shopping"></i>
            </motion.button>
          </div>
          <ToggleMode setTheme={setTheme} theme={theme} />
        </div>
      </div>
      <div className="relative flex z-20 lg:z-auto justify-between lg:flex-row-reverse">
        <Hamburger setMenu={setMenu} menu={menu} />
        {/* This layout is best for all time */}{" "}
        <ol
          className={`top-0 z-40 fixed right-0 left-0 lg:w-[50%] lg:static flex flex-col lg:flex-row justify-around w-full overflow-hidden transition-all duration-500 ${
            !menu
              ? "h-[0] opacity-0"
              : "h-[100vh] bg-white lg:bg-transparent dark:bg-black lg:dark:bg-transparent"
          } lg:h-auto lg:opacity-100 `}
        >
          <Link to="/">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              HOME
            </li>
          </Link>
          <Link to="/allProducts/men">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              MEN
            </li>
          </Link>
          <Link to="/allProducts/women">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              WOMEN
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              CONTACT
            </li>
          </Link>
          <Link to="/about">
            <li
              onClick={closeMobileMenu}
              className="text-lg  font-semibold cursor-pointer lg:bg-gradient-to-r lg:from-[#5465ff] dark:lg:from-gray-300 dark:lg:to-gray-300 lg:to-[#5465ff] lg:bg-left-bottom lg:bg-no-repeat lg:bg-[length:0%_3px] lg:hover:bg-[length:100%_3px] text-[#5465ff] dark:text-gray-300 lg:transition-all"
            >
              ABOUT
            </li>
          </Link>
        </ol>
      </div>
    </header>
  );
};

export default Header;
