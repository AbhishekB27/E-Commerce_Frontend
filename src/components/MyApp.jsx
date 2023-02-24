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
import Footer from "./layout/Footer";
import { logOut } from "../features/user/userSlice";
import AddProduct from "./User/AddProduct";
import TokenExpired from "./Protected/TokenExpired";
import Products from "./product/Products";
import Products2 from "./User/Products";
import ProductD from "./product/ProductD";
import Cart from "./product/Cart";
import PaymentUI from "./product/forms/PaymentUI";
import CheckOutSuccess from "./product/forms/CheckOutSuccess";
import Admin from "./User/Admin";
import ConnectionLost from "./ConnectionLost";


const MyApp = () => {
  const [theme, setTheme] = useState(false);
  const { userToken, userInfo, success, error } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const Dashboard = React.lazy(() => import("./User/Dashboard"));
  const About = React.lazy(() => import("./About"));
  const Contact = React.lazy(() => import("./Contact"));
  const Men = React.lazy(() => import("./Men"));
  const Women = React.lazy(() => import("./Women"));
  const MyAccount = React.lazy(() => import("./User/MyAccount"));
  const Orders = React.lazy(() => import("./User/Orders"));
  const MyOrders = React.lazy(() => import("./product/MyOrders"))
  const Cart = React.lazy(() => import("./product/Cart"));
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

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme(true);
      console.log("true");
    } else {
      console.log("false");
      setTheme(false);
    }
  }, []);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
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
      <div className="min-h-screen relative p-1  md:p-0 h-auto flex flex-col justify-start gap-2 dark:bg-gray-800 text-[#5465ff] dark:text-gray-300 font-ubuntu ">
       {
        navigator.onLine ? <>
        <TokenExpired/>
        <Header setTheme={setTheme} theme={theme} />
        <Routes>
          <Route index path="/" element={<HeroSection />} />
          <Route path="/allProducts/:cate" element={<Products/>} />
          <Route path="/allProducts/product/:pId" element={<ProductD/>} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartItems" element={<Cart />} />
          <Route path="/user/:userId/myOrders" element={<MyOrders />} />
          <Route path="/checkOut-success" element={<CheckOutSuccess/>}/>
          <Route element={<Protected />}>
            <Route path="/user/:userId" element={<Dashboard />}>
              {
                userInfo.role === 0 ? <Route index element={<Admin />} /> :
                <Route index element={<MyAccount />} />
              }
              <Route path="orders" element={<Orders/>} />
              <Route path="products" element={<Products2 />} />
              <Route path="products/addProduct" element={<AddProduct />} />
              {
                userInfo.role === 0 ? <Route path="myAccount" element={<MyAccount />} /> :
                ''
              }
              
            </Route>
          </Route>
          <Route path="*" element={<div>Not Found</div>}/>
        </Routes>
        <Footer />
        </> : <ConnectionLost/>
       }
      </div>
      <ToastContainer />
    </Suspense>
  );
};

export default MyApp;
