import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import ProductImg from "./ProductImg.jpg";
import Stars from "./Stars";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/product/productAction";
import ProductCard from "./ProductCard";
import { getReview } from "../../features/productReview/reviewAction";
import { useParams } from "react-router-dom";
import { filterCategory, filterGender } from "../../features/product/productSlice";

const ProductsWrapper = () => {
  const dispatch = useDispatch();
  const { pLoading, successP, products,filter } = useSelector(
    (state) => state.products
  );
  const {cate} = useParams()
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    if(['men','women'].includes(cate) && successP){
      dispatch(filterGender({gender: cate === 'men' ? 'Male' :'Female'}))
    }else{
      const categoryName = cate.charAt(0).toUpperCase() + cate.slice(1)
      dispatch(filterCategory({ category: categoryName }));
      console.log(categoryName)
    }
  }, [cate,successP])
  
  return (
    <div
      className={`h-auto w-full text-gray-800 dark:text-gray-300 p-1 grid gap-x-2 gap-y-2 grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] ${filter.length <=3 ? 'grid-cols-[repeat(auto-fill,_minmax(200px,1fr))]':''} place-content-start lg:border-l border-gray-300`}
    >
      {pLoading
        ? Array(8)
            .fill(0)
            .map((item) => {
              return (
                <div className="max-h-[24rem] space-y-2">
                     <div className="flex flex-col justify-start items-center gap-1">
                     <span className="leading-[1] h-[15rem]  block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                     </div>
                      <div className="flex flex-col justify-start items-center gap-1 h-full">
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
                      <span className="leading-[1] h-[8%]  block w-[50%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1] h-[9%] block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      </div>
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
                <div className="max-h-[24rem] space-y-2">
                     <div className="flex flex-col justify-start items-center gap-1">
                     <span className="leading-[1] h-[15rem]  block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                     </div>
                      <div className="flex flex-col justify-start items-center gap-1 h-full">
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
                      <span className="leading-[1] h-[8%]  block w-[50%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1] h-[9%] block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      </div>
                    </div>
              );
            })}
            {
                (successP && filter.length <=3 ) ? Array(4-filter.length) // if length is less than 4
                .fill(0)
                .map((item) => {
                  return (
                    <div className="max-h-[24rem] space-y-2">
                     <div className="flex flex-col justify-start items-center gap-1">
                     <span className="leading-[1] h-[15rem]  block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                     </div>
                      <div className="flex flex-col justify-start items-center gap-1 h-full">
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
                      <span className="leading-[1] h-[8%]  block w-[50%]">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      <span className="leading-[1] h-[9%] block w-full">
                        {" "}
                        <Skeleton width="100%" height="100%" />{" "}
                      </span>
                      </div>
                    </div>
                  );
                }) : ""
            }
    </div>
  );
};

export default ProductsWrapper;
