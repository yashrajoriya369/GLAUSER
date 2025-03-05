import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from '../features/user/userSlice';

const signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().email("Email should be valid").required("Email Address is Required"),
  mobile: yup.string().required("Mobile No. is Required"),
  password: yup.string().required("Password is Required")
})

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const newUser = useSelector((state) => state.auth)
  const { isSuccess, isError, createdUser } = newUser;

  useEffect(() => {
    if (isSuccess && createdUser) {
      toast.info("User Added Successfully!")
    }
    if (isError) {
      toast.error("Something Went Wrong!")
    }
  }, [isError, isSuccess, createdUser])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: ""
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      setTimeout(function () {
        navigate("/login");
      }, 2000)
    }
  })
  return (
    <>
      <div className="signup-container">
        <form id="signupForm" onSubmit={formik.handleSubmit}>
          <h1>Signup</h1>
          <div className='d-flex gap-3'>
            <input type="text" id="firstname" name="firstname" placeholder='First Name' autoComplete='off'
              onBlur={formik.handleBlur("firstname")}
              onChange={formik.handleChange("firstname")}
              value={formik.values.firstname} />

            <input type="text" id="lastname" name="lastname" placeholder='lastname' autoComplete='off' onBlur={formik.handleBlur("lastname")}
              onChange={formik.handleChange("lastname")}
              value={formik.values.lastname} />

          </div>

          <input type="number" pattern='[0-9]*' id="mobile" name="mobile" autoComplete='off' placeholder='mobile' onBlur={formik.handleBlur("mobile")}
            onChange={formik.handleChange("mobile")}
            value={formik.values.mobile} />

          <input type="email" id="email" name="email" placeholder='email' autoComplete='off' onBlur={formik.handleBlur("email")}
            onChange={formik.handleChange("email")}
            value={formik.values.email} />

          <input type="password" id="password" name="password" placeholder='password' autoComplete='off' onBlur={formik.handleBlur("password")}
            onChange={formik.handleChange("password")}
            value={formik.values.password} />

          <button type="submit">Signup</button>
          <Link to="/login" className='d-block text-center mt-2'>Already have an Account</Link>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={250}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default SignUp
