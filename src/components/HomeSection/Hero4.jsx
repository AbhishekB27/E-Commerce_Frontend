import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../features/product/productAction";
import Image1 from "./FeaturedProduct1.jpg";
import Image2 from "./FeaturedProduct2.jpg";
import Image3 from "./FeaturedProduct3.jpg";
import Image4 from "./FeaturedProduct4.jpg";
import Image5 from "./FeaturedProduct5.jpg";
import Image6 from "./FeaturedProduct6.jpg";

const Hero4 = () => {
  const dispatch = useDispatch();
  const { pLoading, successP, products } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const featuredProduct = products.filter(
    (item) => item.featuredProduct === true
  );
  const imageUrl = featuredProduct.map(item => ({url:item.imageURL,pId:item._id}))
  // console.log(imageUrl);
  console.log(featuredProduct);
  return (
    <div className="space-y-2 grid place-items-center">
      <div className="flex flex-col text-xl md:text-3xl lg:text-4xl font-poppins ">
        <h1>Our Awesome Products</h1>
        <h1>Choose Best One</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] place-items-center w-full md:w-[90%] lg:w-[70%]  gap-3">
        {
          pLoading ? Array(3).fill(0).map(item => {
            return(
              <div className="w-full h-[25rem]">
          <span className="leading-[1] block w-full h-full">
            {" "}
            <Skeleton
              width="100%"
              height="100%"
            />{" "}
          </span>
        </div>
            )
          }) : 
          products.filter((item,index) => item.featuredProduct === true && index > 20)
          .map(item => {return(
            <div className="max-w-[17rem max-h-[25rem h-full w-full relative group overflow-hidden">
              <div className="absolute bg-black/30 md:opacity-0 md:group-hover:opacity-100 md:group-hover:h-auto md:h-0 md:group-hover:py-2 transition-opacity duration-200 bottom-0 z-10 w-full py-2 md:py-0">
              <Link to={`/allProducts/product/${item._id}`}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="md:px-8 md:py-2 px-4 py-1 text-sm md:text-lg mt-[0.1rem] font-sans font-medium rounded-3xl bg-slate-100 dark:text-gray-800"
              >
                Buy Now
              </motion.button>
              </Link>
            </div>
              <img className="w-full h-full object-cover hover:scale-110 transition-all" src={item.imageURL} alt="" />
            </div>
          )})
        }
      </div>
      {/* {imageUrl.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-2 gap-y-2">
          <div className="bg-rose-500 lg:h-[20rem] overflow-hidden md:row-span-2 lg:row-auto sm:col-span-2 relative group">
            {" "}
            <div className="absolute bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity bottom-0 z-10 w-full py-2">
              <Link to={`/allProducts/product/${imageUrl[0].pId}`}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="px-8 py-2 text-lg mt-[0.1rem] font-sans font-medium rounded-3xl bg-slate-100 dark:text-gray-800"
              >
                Buy Now
              </motion.button>
              </Link>
            </div>{" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[0].url}
              alt=""
            />{" "}
          </div>
          <div className="bg-rose-500 overflow-hidden md:col-span-2 lg:col-auto lg:row-span-2">
            {" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[1].url}
              alt=""
            />{" "}
          </div>
          <div className="bg-pink-500 lg:h-[20rem] overflow-hidden md:row-span-2 md:col-span-2 lg:col-auto lg:row-auto">
            {" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[2].url}
              alt=""
            />{" "}
          </div>
          <div className="bg-purple-500 h-[20rem] overflow-hidden lg:col-auto md:col-span-2">
            {" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[3].url}
              alt=""
            />{" "}
          </div>
          <div className="bg-fuchsia-500 md:h-[20rem] overflow-hidden sm:row-span-2 md:col-span-2 lg:col-auto">
            {" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[4].url}
              alt=""
            />{" "}
          </div>
          <div className="bg-rose-500 h-[20rem] overflow-hidden lg:row-span-2 lg:col-auto md:col-span-2">
            {" "}
            <motion.img
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
              src={imageUrl[5].url}
              alt=""
            />{" "}
          </div>
        </div>
      ) : (
        <div className="w-full h-[10rem] md:h-[30rem]">
          <span className="leading-[1] block w-full h-full">
            {" "}
            <Skeleton
              // baseColor="#c0c2c9"
              // highlightColor="#E2E8F0"
              width="100%"
              height="100%"
            />{" "}
          </span>
        </div>
      )} */}
    </div>
  );
};

export default Hero4;
