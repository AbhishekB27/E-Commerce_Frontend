import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { FormButton } from "./FormButton";
import SignUpSchema from "./signUpSchema";
import TextField from "./TextField";
import LoginI from "../images/Login.png";
import LogInSchema from "./loginSchema";

const Login = () => {
  const [eye, setEye] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    acceptTerms: false,
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full grid place-items-center mt-1 lg:mt-0">
      <div className="container flex flex-col justify-center lg:grid lg:grid-cols-2 items-center space-y-5 min-h-[34rem] px-2 py-1">
        <div className="hidden lg:grid lg:place-items-center">
          <img className="object-center object-cover" src={LoginI} alt="" />
        </div>
        <div className="w-full grid place-items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={LogInSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="lg:w-full md:w-[70%] w-full space-y-3">
                <div className="text-left text-xl font-sans h-fit w-full font-medium md:col-span-2">
                  Login
                  <p className="text-left text-sm md:text-base font-normal md:font-normal md:font-sans">
                    {" "}
                    Welcome back 👋 Login to start Shop 'til You Drop: Explore
                    Our Incredible Selection of Ecommerce Products!.
                  </p>
                </div>
                <TextField
                  label="Email"
                  name="email"
                  type="text"
                  icon={
                    <i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-envelope"></i>
                  }
                />
                <TextField
                  label="Password"
                  name="password"
                  type={`${eye ? "text" : "password"}`}
                  icon={
                    <i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-key"></i>
                  }
                  eyeButton={
                    <i
                      onClick={() => {
                        setEye(!eye);
                      }}
                      class={`fa-solid ${
                        eye ? "fa-eye" : "fa-eye-slash text-gray-300"
                      } cursor-pointer absolute right-[0.5rem] top-[0.95rem]`}
                    ></i>
                  }
                />
                <FormButton name="Login" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
