import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormButton } from "./FormButton";
import TextField from "./TextField";
import LoginI from "../images/Login.png";
import LogInSchema from "./loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/user/userAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loading, error, userToken,userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userToken) {
      navigate(`/`);
    }
  }, [navigate, userToken]);

  const [eye, setEye] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    acceptTerms: false,
  };
  const handleSubmit = (data) => {
    data.email = data.email.toLowerCase();
    console.log(data);
    console.log(error);
    dispatch(userLogin(data));
  };
  console.log(error);
  return (
    <div className="w-full min-h-[560px] grid place-items-center mt-1 lg:mt-0">
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
                <div className="w-full space-y-2 text-left">
                  <span className="font-normal font-sans">Sign In With</span>
                  <div className="grid grid-cols-3 gap-3 place-items-center">
                    <div className="border border-gray-300 cursor-pointer w-full rounded-md py-2 text-center">
                      <i class="fa-brands fa-google"></i>
                    </div>
                    <div className="border border-gray-300 cursor-pointer w-full rounded-md py-2 text-center">
                      <i class="fa-brands fa-github"></i>
                    </div>
                    <div className="border border-gray-300 cursor-pointer w-full rounded-md py-2 text-center">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                  </div>
                  <div className="relative after:content-[''] before:absolute before:w-full before:border-[1px] before:top-[0.8rem] before:left-0 before:-z-10 before:border-gray-300 text-center">
                    {" "}
                    <span className="bg-white font-sans dark:bg-gray-800 z-10 translate-y-2 p-2">
                      or continue with
                    </span>{" "}
                  </div>
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
                <FormButton name="Login" loading={loading ?? false} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
