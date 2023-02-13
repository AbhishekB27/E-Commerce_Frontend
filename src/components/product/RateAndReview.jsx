import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addReview, updateReview } from "../../features/productReview/reviewAction";
import Stars from "./Stars";

const RateAndReview = () => {
  const expression = [
    {
      icon: (
        <i class="fa-solid text-blue-600 dark:text-gray-300 text-3xl fa-face-angry-horns"></i>
      ),
      message: "Terrible",
    },
    {
      icon: (
        <i class="fa-solid text-blue-600 dark:text-gray-300 text-3xl fa-face-angry"></i>
      ),
      message: "Bad",
    },
    {
      icon: (
        <i class="fa-solid text-blue-600 dark:text-gray-300 text-3xl fa-face-smile"></i>
      ),
      message: "Okay",
    },
    {
      icon: (
        <i class="fa-solid text-blue-600 dark:text-gray-300 text-3xl fa-face-sunglasses"></i>
      ),
      message: "Good",
    },
    {
      icon: (
        <i class="fa-solid text-blue-600 dark:text-gray-300 text-3xl fa-face-grin-stars"></i>
      ),
      message: "Excelent",
    },
  ];
  const { userInfo, success } = useSelector((state) => state.user);
  const { reviews, rLoading, successR } = useSelector((state) => state.reviews);
  const dispatch = useDispatch();
  const [star, setStar] = useState([]);
  useEffect(() => {
    setStar([]);
    if (successR) {
      for (let i = 1; i <= 5; i++) {
        const star = reviews.filter((rev) => rev.stars === i);
        setStar((prev) => {
          return [...prev, star];
        });
      }
    }
  }, [successR,reviews,dispatch]);
  const [rating, setRating] = useState(0); // for reveiw star
  const [review, setReview] = useState({
    // for user reveiw data
    description: '',
    stars:0,
    user:'',
    product:''
  });
  const [reviewStar, setReviewStar] = useState(0);
  const [button, setButton] = useState(true) // it is for user already reviewed
  const { pId } = useParams();
  useEffect(() => {
    if(success){
      console.log('hello')
      if(successR){
      console.log('hello world')
      // here we calculating total rating for a product according to the all reviews
      const totalRating = reviews.reduce((a, n) => a + n.stars, 0) / reviews.length || 0;
      setReviewStar(totalRating); 
      //here we check the user already posted a review
      const userReview = reviews.filter(rev => rev.user._id === userInfo._id)
      setReview(prev => {return {...prev,user:userInfo._id,product:pId}})
      if(userReview.length > 0){
        setReview(prev => {return {...prev,description:userReview[0].description,stars:userReview[0].stars,rId:userReview[0]._id}})
        setRating(userReview[0].stars)
        setButton(false)
        }else{
          const myObj = review
          delete myObj.rId
          console.log({...review,...myObj})
          setReview(prev => {return {...myObj,...prev,description:'',stars:0}})
          setRating(0)
          setButton(true)
        }
      }
    } 

  }, [successR,success,reviews,dispatch]);

  const handleReview = () => {
      if(button){
        console.log(review)
        if(Object.values(review).every(val => val)){   // here we are checking review data is empty or not
        dispatch(addReview(review)) 
          console.log("ready to post review")
        }else{
          alert("Please insert review")
        }
      }else{
        console.log(review)
        if(Object.values(review).every(val => val)){
          dispatch(updateReview(review))
          console.log("ready to update post review")
        }else{
          alert("Please insert review")
        }
      }
  };

  return (
    <div className="w-full font-poppins lg:col-span-2 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5">
      {rLoading ? (
        <>
          <div className="w-full md:max-w-[40rem] h-full grid gap-2 place-items-center px-3 py-2 rounded-lg">
            <div className="w-full space-y-1 grid place-items-center gap-2">
              <span className="h-[3rem] leading-[1] block w-[60%]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2.5rem] leading-[1] block w-[45%]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[2rem] leading-[1] block w-[25%]">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
            </div>
            <div className="w-full space-y-1">
              <span className="h-[1.5rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[1.5rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[1.5rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[1.5rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
              <span className="h-[1.5rem] leading-[1] block w-full">
                {" "}
                <Skeleton width="100%" height="100%" borderRadius="6px" />{" "}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:max-w-[40rem] h-full grid gap-2 place-items-center px-3 py-2 rounded-lg dark:bg-gray-700 bg-slate-200">
            <div className="grid place-items-center gap-2">
              <span className="text-xl md:text-2xl lg:text-3xl">
                Customer Reviews
              </span>
              <div className="flex justify-between items-center gap-2 px-4 py-2 text-yellow-500 rounded-3xl dark:bg-gray-800">
                {<Stars star={reviewStar} />}
                <span className="md:text-base text-sm text-blue-600 dark:text-gray-300">
                  {reviewStar} out of 5
                </span>
              </div>
              <span className="text-xs md:text-sm">
                {reviews.length} customer ratings
              </span>
            </div>
            <div className=" w-full space-y-2">
              {star.map((item, index) => {
                return (
                  <div className="grid grid-cols-[3rem_auto_3rem] place-items-center">
                    <span className="text-xs md:text-sm">{index + 1} Star</span>
                    <div className="w-full text-sm bg-slate-100 rounded-sm overflow-hidden">
                      <div
                        style={{ width: `${(item.length / 100) * 100}%` }}
                        className="bg-yellow-500 h-3 md:h-4 lg:h-5"
                      ></div>
                    </div>
                    <span className="text-xs md:text-sm">
                      {((item.length / 100) * 100).toFixed(0)}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <div className="w-full relative md:max-w-[40rem] grid gap-2 place-items-center px-3 py-2 rounded-lg dark:bg-gray-700 bg-slate-200">
      <i class="fa-light fa-circle-info cursor-pointer absolute top-0 right-[5px] m- text-lg font-bold group"> <span className="absolute w-[12rem] min-h-[5rem] grid place-items-center group-hover:opacity-100 transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800/70 text-gray-300 px-3 py-1 rounded bottom-[-5rem] right-[-0.1rem] opacity-0 before:content-[''] before:absolute before:bottom-[100%] before:left-[92%] before:border-solid before:border-[5px] before:border-transparent before:border-b-gray-800/70 dark:before:border-b-gray-300/30">
        Previous Review Default. If Customer already reviewed the product.
        </span> </i>
        <span className="text-xl md:text-2xl lg:text-3xl">Rate And Review</span>
        <span className="text-sm md:text-lg lg:text-xl">
          Your Opinion matter to us!
        </span>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm md:text-base font-sans">
            Rating({rating}/5)
          </span>
          <div className="md:text-2xl text-lg flex flex-row-reverse gap-1 text-gray-400">
            {[5, 4, 3, 2, 1].map((item) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => {
                    setRating(item);
                    setReview((prev) => {
                      return { ...prev, stars: item };
                    });
                  }}
                  className={`fas fa-star ${
                    item <= rating ? "text-yellow-400" : "text-gray-400"
                  } peer peer-hover:text-yellow-400 hover:text-yellow-400 cursor-pointer`}
                ></motion.div>
              );
            })}
          </div>
          <div className="grid place-items-center">
            <span>{rating === 0 ? "" : expression[rating - 1].icon}</span>
            <span className="text-lg font-semibold font-ubuntu">
              {rating === 0 ? "" : expression[rating - 1].message}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center text-left">
          <div className="w-full">Review</div>
          <textarea
            onChange={(event) => {
              setReview((prev) => {
                return { ...prev, description: event.target.value };
              });
            }}
            className="resize-none rounded-sm outline-none w-full min-h-[10rem] px-2 py-1 dark:bg-gray-800"
            placeholder="Write review here"
            name=""
            value={review.description}
            id=""
            cols="0"
            rows="0"
          ></textarea>
        </div>
        <div className="flex flex-col gap-2 w-full font-medium font-sans">
          {" "}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleReview}
            className="rounded-md py-2 text-white dark:bg-gray-300 dark:text-gray-800 bg-blue-600"
          >
            {rLoading ? 'Loading' : button ? "Post" : "Update"}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="rounded-md py-2 bg-gray-100 text-blue dark:bg-gray-800 dark:text-gray-300"
          >
            Cancel
          </motion.button>{" "}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,1fr))] md:col-span-2 gap-2 w-full">
        {reviews.map((item) => {
          return (
            <div className="bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-sm text-blue-600 px-2 py-1">
              <div className="flex justify-between items-end">
                <div className="text-sm flex gap-2 flex-row justify-center items-center">
                  <i class="fa-solid fa-user text-2xl md:text-3xl lg:text-4xl"></i>
                  <div className="flex flex-col justify-center items-start">
                    <span>{item.user.userName}</span>
                    <span className="text-xs text-yellow-500 flex gap-1 justify-center items-center">
                      <Stars star={item.stars} />
                      <span>{item.stars}.0</span>
                    </span>
                  </div>
                </div>
                <div className="text-xs md:text-sm">1 days ago</div>
              </div>
              <div className="text-left flex justify-start items-end">
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RateAndReview;
