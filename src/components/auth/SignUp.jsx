import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormButton } from "./FormButton";
import SignUpSchema from "./signUpSchema";
import TextField from "./TextField";
import SignUpI from "../images/SignUp.png";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../features/user/userAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { loading, error, success } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success]);

  console.log(error);
  const dispatch = useDispatch();
  const [eye, setEye] = useState(false);
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };
  const handleSubmit = (data) => {
    data.email = data.email.toLowerCase();
    console.log(data);
    console.log(error);
    dispatch(signUpUser(data));
  };
  return (
    <div className="w-full min-h-[560px] grid place-items-center mt-1 lg:mt-0">
      <div className="container flex flex-col justify-center lg:grid lg:grid-cols-2 items-center space-y-5 min-h-[34rem] px-2 py-1">
        <div className="hidden lg:grid lg:place-items-center">
          <img className="object-center object-cover" src={SignUpI} alt="" />
        </div>
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="grid w-full md:grid-cols-2 gap-3">
                <div className="text-left text-xl font-sans h-fit w-full font-medium md:col-span-2">
                  Register
                </div>
                <TextField
                  label="UserName"
                  name="userName"
                  type="text"
                  icon={
                    <i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>
                  }
                />
                <TextField
                  label="FirstName"
                  name="firstName"
                  type="text"
                  icon={
                    <i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>
                  }
                />
                <TextField
                  label="LastName"
                  name="lastName"
                  type="text"
                  icon={
                    <i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>
                  }
                />
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
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={`${eye ? "text" : "password"}`}
                  icon={
                    <i class="fa-light absolute left-[0.5rem] top-[0.95rem] fa-key"></i>
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
                <FormButton name="Register" loading={loading ?? false} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
