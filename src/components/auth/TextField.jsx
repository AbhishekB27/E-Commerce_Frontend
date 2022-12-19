import React from "react";
import { Field, ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(meta.error)
  console.log(meta.touched)
  return (
    <div className="font-sans">
      <div className="relative">
        {props.icon}
        {props.eyeButton ?? ""}
        <Field
          className={`w-full ${meta.error && meta.touched
            ? "ring-4 ring-red-300/30 border-red-300"
            : meta.touched
            ? "ring-4 ring-green-300/30 border-green-300"
            : ""} px-2 pl-7 py-2 peer rounded-md border-2 border-gray-300 outline-none placeholder:text-transparent`}
          placeholder={label}
          {...field}
          id={props.name}
          {...props}
        />
        <label
          className="absolute cursor-text px-1 left-[1rem] top-[-0.74rem] bg-white peer-placeholder-shown:top-[0.68rem] peer-placeholder-shown:left-[2rem] transition-all duration-300"
          htmlFor={props.name}
        >
          {" "}
          {label}{" "}
        </label>
      </div>
      <div className="w-fit h-[25px] text-xs">
        <ErrorMessage
          name={props.name}
          component="div"
          className="text-red-500 w-fit h-fit"
        />
      </div>
    </div>
  );
};

export default TextField;
