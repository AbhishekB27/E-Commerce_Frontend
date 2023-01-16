import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { getproduct } from "../../features/product/productAction";
import Stars from "./Stars";
import RateAndReview from "./RateAndReview";
import { getReview, getReviewById } from "../../features/productReview/reviewAction";

const ProductD = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [review, setReview] = useState(0);
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const { products, success, pLoading } = useSelector(
    (state) => state.products
  );
  const {rLoading,reviews,successR} = useSelector(state => state.reviews)
  const { pId } = useParams();
  useEffect(() => {
    dispatch(getproduct(pId));
    dispatch(getReviewById(pId))
  }, []);
  useEffect(() => {
    if (successR) {
      const totalRating =
        reviews.reduce((a, n) => a + n.stars, 0) /
          reviews.length || 0; // here we calculating total rating for each product according to the reviews
      setReview(totalRating);
    }
  }, [successR]);
  const handleQuantity = (event) => {
    const name = event.target.name;
    if (name === "add") {
      const stock = Number(products[0].stock);
      setQuantity((prev) => {
        prev === stock ? setQuantity(prev) : setQuantity(prev + 1);
      });
    } else {
      setQuantity((prev) => {
        prev === 0 ? setQuantity(0) : setQuantity(prev - 1);
      });
    }
  };
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="container h-full grid lg:grid-cols-2 gap-2">
        <div className="grid place-items-center lg:min-h-[560px]">
          {pLoading ? (
            <div className="max-h-[30rem] w-full flex flex-col gap-3 text-left">
              <span className="h-[30rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
            </div>
          ) : (
            products.map((item) => {
              return (
                <img
                  className="max-h-[30rem]"
                  src={`${item.imageURL}`}
                  alt=""
                />
              );
            })
          )}
        </div>
        <div className="flex md:justify-center lg:justify-start items-center">
          {pLoading ? (
            <div className="max-h-[30rem] w-full flex flex-col gap-3 items-start md:items-center justify-center lg:items-start">
              <span className="h-[2rem] leading-[1] block w-[40%]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2rem] block w-[35%] leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[3rem] block w-[60%] leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[3.2rem] block w-[25%] leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[3rem] block w-full leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2rem] block w-[30%] leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2rem] block w-[45%] leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2rem] block w-full leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2.5rem] block w-full leading-[1]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
            </div>
          ) : (
            products.map((item) => {
              return (
                <div className="min-h-[30rem] lg:min-h-min flex flex-col gap-3 items-start md:items-center lg:items-start lg:justify-start justify-center">
                  <div className=" flex gap-1 justify-start md:justify-center items-center lg:justify-start text-yellow-500 w-full">
                    {" "}
                    {<Stars star={review} />}({reviews.length} Review){" "}
                  </div>
                  <span className="text-lg font-semibold shines">
                    Deal Of The Day
                  </span>
                  <span className="lg:text-4xl md:text-3xl text-xl font-semibold">
                    {item.productName}
                  </span>
                  <span className="lg:text-lg md:text-sm text-xs font-sans font-medium">
                    Brand:<span className=""> {item.brand} </span>
                  </span>
                  <span className="text-sm line-through text-gray-400 leading-[0] font-sans font-normal">
                    <i class="fa-regular fa-indian-rupee-sign"></i>
                    {Number(item.price) + 400}
                  </span>
                  <span className="text-2xl font-sans font-normal">
                    <i class="fa-regular fa-indian-rupee-sign"></i>
                    {item.price}
                  </span>
                  <p className="text-sm lg:text-left md:text-center text-left font-sans">
                    {" "}
                    {item.description}{" "}
                  </p>
                  <div className="flex justify-center w-fit items-center gap-1 text-base font-sans font-medium">
                    Colors :
                    {item.color.map((color) => {
                      return (
                        <div
                          className={`w-[1.3rem] h-[1.3rem] rounded-full hover:ring-4 ring-blue-600/30 dark:ring-gray-300/30 cursor-pointer`}
                          style={{ backgroundColor: color }}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center w-fit items-center gap-1 text-base font-sans font-medium">
                    Sizes :
                    {item.size.map((size) => {
                      return (
                        <div className="min-w-[2.5rem] min-h-[2rem] cursor-pointer dark:hover:bg-gray-300 hover:bg-blue-600/30 hover:border-none hover:text-white dark:hover:text-gray-800 grid place-items-center rounded-sm border px-1 text-base font-normal">
                          {size}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="grid grid-cols-[3.5rem_auto_3.5rem] gap-1 w-full">
                      {" "}
                      <motion.button
                        onClick={handleQuantity}
                        name="add"
                        whileTap={{ scale: 0.8 }}
                        className="rounded-sm py-2 z-10 bg-blue-400 dark:bg-gray-300 dark:text-gray-800 font-semibold text-base md:text-xl text-white"
                      >
                        {"\u002b"}
                      </motion.button>
                      <div className="grid place-items-center font-sans bg-gray-100 font-medium w-full">
                        {" "}
                        <span className="font-sans font-normal">
                          {quantity}
                        </span>{" "}
                      </div>
                      <motion.button
                        onClick={handleQuantity}
                        name="sub"
                        whileTap={{ scale: 0.8 }}
                        className="rounded-sm py-2 bg-blue-400 dark:bg-gray-300 dark:text-gray-800 font-semibold text-base md:text-xl text-white"
                      >
                        {"\u2212"}
                      </motion.button>{" "}
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="bg-blue-400 dark:bg-gray-300 w-full text-white font-semibold text-base md:text-xl dark:text-gray-800 py-2 rounded-sm"
                  >
                    Add To Cart
                  </motion.button>
                </div>
              );
            })
          )}
        </div>
        <RateAndReview/>
      </div>
    </div>
  );
};

export default ProductD;
