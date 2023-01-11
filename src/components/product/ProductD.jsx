import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { getproduct } from "../../features/product/productAction";
import Stars from "./Stars";

const ProductD = () => {
  const dispatch = useDispatch();
  const { products, success, pLoading } = useSelector(
    (state) => state.products
  )
  const { pId } = useParams();
  useEffect(() => {
    dispatch(getproduct(pId));
  }, []);
  console.log(products);
  return (
    <div className="min-h-[560px] grid place-items-center">
      <div className="container h-full grid lg:grid-cols-2 gap-2">
        <div className="grid place-items-center">
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
        <div className="grid place-items-center">
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
                <div className="min-h-[30rem] lg:min-h-min flex flex-col gap-3 text-left md:text-center lg:text-left">
                  <div className=" flex gap-1 justify-start md:justify-center items-center lg:justify-start text-yellow-500 w-full">
                    {" "}
                    {<Stars star={4} />}(5 Reviews){" "}
                  </div>
                  <span className="text-lg font-semibold shines">
                    Deal Of The Day
                  </span>
                  <span className="text-4xl font-semibold">
                    {item.productName}
                  </span>
                  <span className="text-lg line-through text-gray-400 leading-[0] font-sans font-normal">
                    Rs.{Number(item.price) + 400}
                  </span>
                  <span className="text-2xl font-sans font-normal">
                    Rs.{item.price}
                  </span>
                  <p className="text-lg font-sans"> {item.description} </p>
                  <div className="flex justify-center w-fit items-center gap-1 text-base font-sans font-medium">
                    Colors :
                    {item.color.map((color) => {
                      return (
                        <div
                          className={`w-[1.3rem] h-[1.3rem] rounded-full bg-[${color.toString()}]`}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center w-fit items-center gap-1 text-base font-sans font-medium">
                    Sizes :
                    {item.size.map((size) => {
                      return (
                        <div className="min-w-[2.5rem] min-h-[2rem] grid place-items-center rounded-sm border px-1 text-base font-normal">
                          {size}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-base font-sans font-medium">
                      {" "}
                      Quantity : <span>2</span>{" "}
                    </div>
                    <div className="space-x-1">
                      {" "}
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        className="w-[3rem] h-[2rem] rounded-sm bg-blue-400 text-white"
                      >
                        {" "}
                        <i class="fa-regular fa-plus"></i>{" "}
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        className="w-[3rem] h-[2rem] rounded-sm bg-blue-400 text-white"
                      >
                        {" "}
                        <i class="fa-regular fa-minus"></i>{" "}
                      </motion.button>{" "}
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="bg-blue-400 text-white py-2 rounded-sm"
                  >
                    Add To Cart
                  </motion.button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductD;
