import React from "react";
import { motion } from "framer-motion";
import ProductImg from "./ProductImg.jpg";
import Stars from "./Stars";
import { Link } from "react-router-dom";

const ProductCard = ({ pImage, pName, pDescription, pPrice,reviews,productId }) => {
  console.log(productId)
  const totalRating = reviews.reduce((a,n)=> a + n.stars,0)/reviews.length // here we calculating total rating for each product according to the reviews
  return (
    <div class="border flex flex-col justify-between border-gray-300 group relative min-h-[20rem] cursor-pointer rounded">
      <img
        className="w-full h-[60%] object-center object-cover transition-all"
        src={pImage}
        alt=""
        loading="lazy"
      />
      <div className="text-yellow-300 text-xs translate-y-1 flex justify-center items-center gap-1">
        <span className="font-sans font-medium">{isNaN(totalRating) ? 0 : totalRating.toFixed(1)}</span>
        {<Stars star={totalRating} />}
        <span className="font-sans font-medium">5.0</span>
      </div>
      <div className="p-1 font-sans font-medium relative">
        {/* <div className="absolute text-[11px] font-sans font-medium bg-white px-2 py-[2px] rounded-xl top-[-1.8rem] text-green-500">Free Shipping</div> */}
        {/* <span> Pink Feather Jacket </span> */}
        <span> {pName} </span>
        <p className="truncate text-sm font-poppins">
          {/* "Stay warm and stylish with our women's jackets, available
                    in a variety of colors and designs." */}
          {pDescription}
        </p>
        <div className="flex flex-col">
          {" "}
          <span className="line-through text-xs">
            Rs.{Number(pPrice) + 400}
          </span>
          <span>Rs.{pPrice}</span>{" "}
        </div>
        <Link to={`/allProducts/${productId}`}>
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="bg-blue-500 dark:bg-gray-300 dark:text-gray-800 text-white w-full py-1 rounded"
        >
          Buy Now
        </motion.button>
        </Link>
      </div>
      <div class="absolute text-white top-0 flex h-[20%] w-full items-center justify-between overflow-hidden rounded-t-xl bg-black/3 px-2 transition-all duration-200 lg:h-[0] lg:group-hover:h-[20%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductCard;
