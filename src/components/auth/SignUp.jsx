import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { FormButton } from './FormButton';
import SignUpSchema from './signUpSchema';
import TextField from './TextField';

const SignUp = () => {
    const [eye, setEye] = useState(false)
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
        console.log(data);
      }
  return (
    <div className='w-full grid place-items-center mt-1'>
        <div className='container border space-y-5 min-h-[35rem] px-2'>
            <div className='text-left text-xl font-sans font-medium'>Register</div>
            <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
            >
                {
                    ({errors,touched}) => (
                        <Form className='space-y-3'>
                            <TextField
                            label="UserName"
                            name="userName"
                            type="text"
                            icon={<i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>}
                            />
                            <TextField
                            label="FirstName"
                            name="firstName"
                            type="text"
                            icon={<i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>}
                            />
                            <TextField
                            label="LastName"
                            name="lastName"
                            type="text"
                            icon={<i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-user"></i>}
                            />
                            <TextField
                            label="Email"
                            name="email"
                            type="text"
                            icon={<i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-envelope"></i>}
                            />
                            <TextField
                            label="Password"
                            name="password"
                            type={`${eye ? 'text' : 'password'}`}
                            icon={<i class="fa-solid absolute left-[0.5rem] top-[0.95rem] fa-key"></i>}
                            eyeButton={<i onClick={()=>{setEye(!eye)}} class={`fa-solid ${eye ? 'fa-eye' : 'fa-eye-slash text-gray-300'} cursor-pointer absolute right-[0.5rem] top-[0.95rem]`}></i>}
                            />
                            <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type={`${eye ? 'text' : 'password'}`}
                            icon={<i class="fa-light absolute left-[0.5rem] top-[0.95rem] fa-key"></i>}
                            eyeButton={<i onClick={()=>{setEye(!eye)}} class={`fa-solid ${eye ? 'fa-eye' : 'fa-eye-slash text-gray-300'} cursor-pointer absolute right-[0.5rem] top-[0.95rem]`}></i>}
                            />
                            <FormButton name='Register'/>
                        </Form>
                    )
                }
            </Formik>
        </div>
    </div>
  )
}

export default SignUp