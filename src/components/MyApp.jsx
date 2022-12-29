import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./layout/Header";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import "react-toastify/dist/ReactToastify.css";
import { getUserProfile } from "../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import Protected from "./Protected/Protected";
import { getAddresses } from "../features/customerAddress/addressAction";
import HeroSection from "./HomeSection/HeroSection";

const MyApp = () => {
  const [theme, setTheme] = useState(false);
  const { userToken, userInfo, success } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const UserProfile = React.lazy(() => import("./User/UserProfile"));
  const About = React.lazy(() => import("./About"));
  const Contact = React.lazy(() => import("./Contact"));
  const Men = React.lazy(() => import("./Men"));
  const Women = React.lazy(() => import("./Women"));
  const Dashboard = React.lazy(() => import("./User/DashboardH"));
  const MyOrders = React.lazy(() => import("./User/MyOrders"));
  const MyAddresses = React.lazy(() => import("./User/MyAddresses"));
  useEffect(() => {
    if (userToken) {
      dispatch(getUserProfile());
    }
  }, [userToken, dispatch]);

  useEffect(() => {
    if (success) {
      dispatch(getAddresses(userInfo._id));
    }
  }, [success]);

  const isDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
  console.log(isDarkMode);
  useEffect(() => {
    if (isDarkMode) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);
  useEffect(() => {
    if (!theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-items-center">
          {" "}
          <div className="w-[3rem] h-[3rem] rounded-full border-t-blue-500/30 animate-spin border-4 border-blue-500"></div>{" "}
        </div>
      }
    >
      <div className="min-h-screen h-auto p-1 dark:bg-[#121212] text-[#5465ff] dark:text-gray-300 font-ubuntu ">
        <Header setTheme={setTheme} theme={theme} />
        <Routes>
          <Route index path="/" element={<HeroSection />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route element={<Protected />}>
            <Route path="/user/:userId" element={<UserProfile />}>
              <Route index element={<Dashboard />} />
              <Route path="myOrders" element={<MyOrders />} />
              <Route path="myAddresses" element={<MyAddresses />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </Suspense>
  );
};

export default MyApp;
