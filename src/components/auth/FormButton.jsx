import React from "react";
import { Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";

export const FormButton = ({ name,loading }) => {
  return (
    <div className="flex flex-col justify-start items-start md:col-span-2 font-sans font-normal">
      <div className="">
        <Field
          name="acceptTerms"
          type="checkbox"
          className=""
          id="acceptTerms"
        />
        <label htmlFor="acceptTerms" className=" pl-1">
          I have read and agree to the Terms
        </label>
        <div className="w-fit h-[25px] text-sm">
          <ErrorMessage
            name="acceptTerms"
            component="div"
            className="text-red-500 w-fit h-fit"
          />
        </div>
      </div>

      <div className=" w-full h-full flex justify-center items-center">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`w-full h-[2.5rem] text-white dark:text-[#121212] bg-blue-600 dark:bg-gray-300 outline-none py-1 font-sans font-medium rounded-md`}
          type="submit"
          disabled={loading}
        >
          {!loading ? 
            name
           : 
            <div className="flex justify-center items-center gap-2">
              <div className="w-[2rem] h-[2rem] animate-spin border-[4px] border-t-gray-400 rounded-full"></div>{" "}
            </div>
          }
        </motion.button>
      </div>
    </div>
  );
};
