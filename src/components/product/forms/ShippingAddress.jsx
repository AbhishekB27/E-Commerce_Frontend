import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import AddressSchema from "./addressSchema";
import EmptyA2 from "./EmptyA2.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAddress, setUserAddress } from "../../../features/customerAddress/addressAction";
import { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import { addShipping } from "../../../features/checkout/checkOutSlice";
import { useNavigate } from "react-router-dom";
const ShippingAddress = () => {
  const initialValues = {
    addressType: "home",
    addressTitle: "",
    fullName: "",
    contactNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    address: "",
  };
  // const { cart,totalPrice } = useSelector((state) => state.cart);
  // useEffect(() => {
  //   dispatch(addItemToCheckout({items:cart,totalPrice:totalPrice}))
  // }, [])
  
  const { userInfo, loadingA } = useSelector((state) => state.user);
  const { addressInfo } = useSelector((state) => state.addresses);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (data) => {
    dispatch(setUserAddress({ address: data, userId: userInfo._id }));
    console.log(data);
  };
  const [address, setAddress] = useState({});
  const handleAddress = (event)=>{
    const filterAddress = addressInfo.filter(item => item._id === event.target.id)
    setAddress(...filterAddress)
  }
  const addAddress = ()=>{
    console.log(address)
    if(Object.keys(address).length === 0){
      alert("Please select address")
    }else{
      dispatch(addShipping({shippingAddress:address}))
      navigate('/checkout/payment')
    }
  }
  return (
    <div className="space-y-2 min-h-[28.8rem]">
      <div className="text-3xl relative bg-blue-600/70 dark:bg-gray-700 dark:text-gray-300 text-white py-2 font-sans font-medium">
        Shipping Address
        <i class="fa-light fa-circle-info cursor-pointer absolute top-[0.8rem] right-[5px] m- text-lg font-bold group"> <span className="absolute z-10 invisible w-[12rem] min-h-[5rem] grid place-items-center group-hover:visible transition-opacity text-sm font-sans font-normal dark:bg-gray-300/30 dark:text-gray-300 bg-gray-800/70 text-gray-300 px-3 py-1 rounded bottom-[-5.5rem] right-[-0.1rem] before:content-[''] before:absolute before:bottom-[100%] before:left-[92%] before:border-solid before:border-[5px] before:border-transparent before:border-b-gray-800/70 dark:before:border-b-gray-300/30">
        You can add only two address. If you want to add more first you delete previous one.
        </span> </i>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 px-3 gap-3">
        <Formik
          initialValues={initialValues}
          validationSchema={AddressSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="w-full grid place-items-center">
              <div className="w-full px-2 lg:px-6 dark:text-gray-300 bg-slate-100 dark:bg-gray-700 rounded-md space-y-2 py-2">
                <div className="md:text-lg text-left text-blue-600 dark:text-gray-300 text-sm font-sans font-normal md:font-medium">
                  Add New Address
                </div>
                <div className="w-full dark:text-gray-300 relative grid font-sans grid-cols-2 gap-1 p-2 rounded-md bg-gray-300 dark:bg-gray-800">
                  <Field
                    id="home"
                    className="w-0 h-0 hidden peer/check1"
                    name="addressType"
                    value="home"
                    type="radio"
                  />
                  <label
                    className="w-full cursor-pointer dark:peer-checked/check1:text-gray-800 peer-checked/check1:font-medium px-3 py-1 rounded-md z-10"
                    htmlFor="home"
                  >
                    Individual
                  </label>
                  <div className="bg-white dark:bg-white/70 transition-all duration-700 peer-checked/check1:translate-x-0 -z-0 translate-x-[97%] w-[50%] h-[80%] absolute top-[0.3rem] left-[0.3rem] rounded-md"></div>
                  <Field
                    id="office"
                    className="w-0 h-0 hidden peer/check2"
                    name="addressType"
                    value="office"
                    type="radio"
                  />
                  <label
                    className="w-full px-3 py-1 dark:peer-checked/check2:text-gray-800 peer-checked/check2:font-medium cursor-pointer rounded-md z-0"
                    htmlFor="office"
                  >
                    Corporate
                  </label>
                  {errors.addressType && touched.addressType ? (
                    <div className="text-red-700">{errors.addressType}</div>
                  ) : null}
                </div>
                <div className="grid w-full gap-y-1 gap-x-2 grid-cols-1 lg:grid-cols-2">
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.addressTitle && touched.addressTitle
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="addressTitle"
                      placeholder="AddressTitle"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.addressTitle && touched.addressTitle ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.addressTitle}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.fullName && touched.fullName
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="fullName"
                      placeholder="fullname"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.fullName && touched.fullName ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.fullName}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-2">
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.contactNumber && touched.contactNumber
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="contactNumber"
                      placeholder="Phn-No."
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.contactNumber && touched.contactNumber ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.contactNumber}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.city && touched.city
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="city"
                      placeholder="City"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.city && touched.city ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.city}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.state && touched.state
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="state"
                      placeholder="State"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.state && touched.state ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.state}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.zip && touched.zip
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="zip"
                      placeholder="Zip"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.zip && touched.zip ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.zip}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div>
                    <Field
                      className={`w-full dark:bg-gray-800 px-2 py-2 outline-none ${
                        errors.country && touched.country
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      name="country"
                      placeholder="Country"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.country && touched.country ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.country}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-2">
                    <Field
                      as="textarea"
                      component="textarea"
                      name="address"
                      className={`w-full dark:bg-gray-800 resize-none h-[8rem] px-2 py-2 outline-none ${
                        errors.address && touched.address
                          ? "ring-2 ring-red-400/90"
                          : null
                      } focus:ring-2 ring-blue-500 rounded-md`}
                      placeholder="Enter Address Here"
                    />
                    <div className="h-[1.4rem]">
                      {" "}
                      {errors.address && touched.address ? (
                        <div className="text-left text-red-500 text-sm px-1">
                          {errors.address}
                        </div>
                      ) : null}{" "}
                    </div>
                  </div>
                  <button
                    className={`col-span-1 ${addressInfo.length === 2 ? 'cursor-not-allowed' : ''} lg:col-span-2 bg-blue-500 dark:bg-gray-300 dark:text-gray-800 font-sans font-medium text-white py-2 rounded-md`}
                    type="submit"
                    disabled={addressInfo.length === 2 ? true : false}
                  >
                    {loadingA ? "Loading" : "Submit"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {loadingA ? (
          <div className="w-full h-[9rem]">
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
        ) : addressInfo.length === 0 ? (
          <div className="flex justify-center items-center flex-col space-y-2">
            <img className="h-[16rem] w-[22rem]" src={EmptyA2} alt="" />
            <span className="text-lg font-sans font-medium">
              No Address Found
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {addressInfo.map((address) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={address._id}
                  className="relative bg-slate-100 dark:bg-gray-700 rounded-md grid text-left gap-2 px-3 py-2"
                >
                  <span className="text-blue-600 dark:text-gray-300 text-base font-sans font-medium">
                    {address.addressTitle}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans font-medium">
                      {address.fullName}
                    </span>
                    <span>{address.address},</span>
                    <span>
                      {address.city}, {address.zip},
                    </span>
                    <span>
                      {address.state}, {address.country}
                    </span>
                  </div>
                  <input
                    className="absolute cursor-pointer top-0 right-0 m-2"
                    type="radio"
                    name={`address`}
                    id={`${address._id}`}
                    onChange={handleAddress}
                  />
                  <motion.button
                  onClick={()=>{dispatch(deleteUserAddress(address._id))}}                  
                  whileTap={{scale:0.8}}
                  transition={{duration:0.1}}
                  className=" absolute bottom-0 m-2 right-0 group"> <i class="fa-solid fa-trash-can group-hover:text-red-500"></i> </motion.button>
                </motion.div>
              );
            })}
            <motion.button
            whileTap={{scale:0.8}}
            onClick={addAddress}
            transition={{duration:0.1}}
            className="bg-blue-600 text-white dark:text-gray-800 dark:bg-gray-300 py-2 px-4 rounded-md w-fit font-sans font-medium">Continue <i class="fa-light fa-chevrons-right translate-y-[0.1rem]"></i></motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;
