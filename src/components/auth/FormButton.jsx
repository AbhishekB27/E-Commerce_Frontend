import React from "react";
import { Field, ErrorMessage } from "formik";

export const FormButton = ({ name }) => {
  return (
    <div className="flex flex-col justify-start items-start font-sans font-normal">
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
          <button
            className={`relative grid place-items-center text-white dark:text-[#121212]  bg-blue-600 dark:bg-gray-300 px-2 w-full h-[40px] font-medium rounded-md`}
            type="submit"
          >
            {false ? name : <div className="w-[35px] border-[4px] rounded-full border-t-gray-500 animate-spin h-[35px]"></div>}
          </button>
      </div>
    </div>
  );
};
