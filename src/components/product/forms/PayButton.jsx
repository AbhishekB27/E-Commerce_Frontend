import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stripeCheckout } from "../../../features/checkout/checkoutAction";
import Loader from "../../Loader";
const PayButton = ({cartItems}) => {
    const {userInfo,userToken} = useSelector(state => state.user)
    const {checkoutL} = useSelector(state => state.checkout)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const handleCheckout = () => {
    if(!userToken){
      navigate('/login')
    }else{
      dispatch(stripeCheckout({cartItems,uId:userInfo._id}))
    }
  };
  return (
    <motion.button
      onClick={() => {
        handleCheckout()
      }}
        className={`w-full text-sm md:text-base md:mt-0 mt-2 h-[2.5rem] text-white font-sans font-normal md:font-medium ${checkoutL ? 'cursor-not-allowed grid place-items-center' : ''} dark:bg-gray-300 dark:text-gray-800 bg-blue-600 px-4 py-2 rounded-md`}
      whileTap={{ scale: 0.8 }}
      disabled={checkoutL ? true : false}
    >
      {checkoutL ? <Loader/> : <> <i class="fa-solid fa-shield-halved"></i> Secure Checkout </>}
    </motion.button>
  );
};

export default PayButton;
