import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import ProductImg from "./ProductImg.jpg";
import Stars from "./Stars";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/product/productAction";
import ProductCard from "./ProductCard";
import { getReview } from "../../features/productReview/reviewAction";

const ProductsWrapper = () => {
  const dispatch = useDispatch();
  const { pLoading, success, products,filter } = useSelector(
    (state) => state.products
  );
  console.log(products)
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div
      className={`h-auto w-full text-gray-800 dark:text-gray-300 p-1 grid grid-cols-[repeat(auto-fit,_minmax(230px,1fr))] gap-1 border-l border-gray-300`}
    >
      {pLoading
        ? Array(8)
            .fill(0)
            .map((item) => {
              return (
                <div className="flex flex-col justify-start items-center gap-1 h-[20rem]">
                  <span className="leading-[1] h-[56%]  block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-[70%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-[80%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1] h-[12%]  block w-[50%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1] h-[10%] block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                </div>
              );
            })
        : products != null
        ? filter.map((item) => {
            return (
              <ProductCard
               pImage={item.imageURL}
               pName={item.productName}
               pDescription={item.description}
               pPrice={item.price}
               reviews={item.reviews}
               productId={item._id}
               />
            );
          })
        : Array(8)
            .fill(0)
            .map((item) => {
              return (
                <div className="flex flex-col justify-start items-center gap-1 h-[20rem]">
                  <span className="leading-[1] h-[56%]  block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-[70%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-[80%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1]  block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1] h-[12%]  block w-[50%]">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                  <span className="leading-[1] h-[10%] block w-full">
                    {" "}
                    <Skeleton width="100%" height="100%" />{" "}
                  </span>
                </div>
              );
            })}
            {
                (success && products.length <=4 ) ? Array(6) // if length is less than 4
                .fill(0)
                .map((item) => {
                  return (
                    <div className="flex flex-col justify-start items-center gap-1 h-[20rem]">
                      <span className="leading-[1] h-[56%]  block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1]  block w-[70%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1]  block w-[80%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1]  block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1] h-[12%]  block w-[50%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1] h-[10%] block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                    </div>
                  );
                }) : ""
            }
    </div>
  );
};

export default ProductsWrapper;
