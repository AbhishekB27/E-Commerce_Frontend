import { useFormik } from "formik";
import { motion } from "framer-motion";
import React from "react";
import ContactSchema from "./contactSchema";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const handleForm = (data) => {
    console.log(data);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactSchema,
    onSubmit: handleForm,
  });
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.3}}
    className="min-h-[560px] flex items-start justify-center">
      <div className="container flex flex-col justify-start h-full">
        <form
          onSubmit={formik.handleSubmit}
          className="grid lg:grid-cols-[auto_45%] h-full gap-y-1 bg-blue-600 dark:bg-gray-700 py-5 px-4"
        >
          <div className="flex flex-col justify-around items-center lg:items-start pl-5 text-white dark:text-gray-300">
            <div className="lg:text-left grid place-items-center lg:block ">
              <h1 className="text-2xl font-poppins">
                "Get in Touch, We're Here to Help"
              </h1>
              <h5 className="w-[45%]">
                Fill up the form and our team will get back to you within 24
                hours.
              </h5>
            </div>
            <div className="grid space-y-5 font-sans font-medium text-center lg:text-left">
              <h6 className="w-full space-x-1 p-2 rounded-md hover:ring-2 dark:ring-gray-300 ring-white">
                {" "}
                <i class="fa-solid fa-phone"></i> <span>+0123 4567 8901</span>{" "}
              </h6>
              <h6 className="w-full space-x-1 p-2 rounded-md hover:ring-2 dark:ring-gray-300 ring-white">
                {" "}
                <i class="fa-solid fa-envelope"></i>{" "}
                <span>abStore12@gmail.com</span>{" "}
              </h6>
              <h6 className="w-full text-left space-x-1 p-2 rounded-md hover:ring-2 dark:ring-gray-300 ring-white">
                {" "}
                <i class="fa-solid fa-location-dot"></i>{" "}
                <span>H.No 114, Prashad Farm Road Nakraunda</span>{" "}
              </h6>
            </div>
            <div className="flex text-2xl space-x-5">
              <h2 className="w-[3rem] h-[3rem] grid place-items-center rounded-full transition-colors duration-200 dark:hover:bg-gray-300 dark:hover:text-gray-800 hover:bg-white hover:text-blue-600 cursor-pointer">
                {" "}
                <i class="fa-brands fa-facebook-f"></i>{" "}
              </h2>
              <h2 className="w-[3rem] h-[3rem] grid place-items-center rounded-full transition-colors duration-200 dark:hover:bg-gray-300 dark:hover:text-gray-800 hover:bg-white hover:text-blue-600 cursor-pointer">
                {" "}
                <i class="fa-brands fa-twitter"></i>{" "}
              </h2>
              <h2 className="w-[3rem] h-[3rem] grid place-items-center rounded-full transition-colors duration-200 dark:hover:bg-gray-300 dark:hover:text-gray-800 hover:bg-white hover:text-blue-600 cursor-pointer">
                {" "}
                <i class="fa-brands fa-instagram"></i>{" "}
              </h2>
            </div>
          </div>
          <div className="flex flex-col bg-white dark:bg-gray-800 dark:text-gray-300 text-blue-600 rounded-md p-5">
            <div className="flex flex-col text-left">
              <label className="font-sans font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 outline-none bg-blue-100 dark:bg-gray-100 focus:ring-2 dark:ring-gray-300 ring-blue-300 rounded"
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <div className="h-[1.4rem] w-full col-end-3">
                {formik.errors.name && formik.touched.name ? (
                  <div className="text-left text-red-500 text-sm px-1">
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col text-left">
              <label className="font-sans font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 outline-none bg-blue-100 dark:bg-gray-100 focus:ring-2 dark:ring-gray-300 ring-blue-300 rounded"
                type="text"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="h-[1.4rem] w-full col-end-3">
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-left text-red-500 text-sm px-1">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col text-left">
              <label className="font-sans font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                type="text"
                className="resize-none bg-blue-100 dark:bg-gray-100 focus:ring-2 dark:ring-gray-300 ring-blue-300 p-2 outline-none rounded h-[12rem]"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <div className="h-[1.4rem] w-full col-end-3">
                {formik.errors.message && formik.touched.message ? (
                  <div className="text-left text-red-500 text-sm px-1">
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-full">
              {" "}
              <motion.button
                whileTap={{ scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="px-5 sm:w-auto w-full float-right rounded py-2 bg-blue-600 text-white dark:bg-gray-300 dark:text-gray-800 font-sans font-medium"
                type="submit"
              >
                Send Message
              </motion.button>{" "}
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
