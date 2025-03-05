import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { loginUser } from '../features/user/userSlice';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const loginSchema = yup.object({
    email: yup.string().email("Email Should be Valid").required("Email Address is Required"),
    password: yup.string().required("Passoword is Required")
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector((state) => state.auth);
    const { isSuccess } = authState;

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            if (isSuccess === true) {
                navigate("/")
            } 
        }
    })
    return (
        <>
            <div className="signup-container">
                <form id="signupForm" onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onBlur={formik.handleBlur("email")}
                        onChange={formik.handleChange("email")}
                        value={formik.values.email} />
                    {/* <div className='error'>{formik.touched.email && formik.errors.email}</div> */}

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onBlur={formik.handleBlur("password")}
                        onChange={formik.handleChange("password")}
                        value={formik.values.password} />

                    <button type="submit">Login</button>
                    <Link to="/signup" className='d-block text-decoration-none text-center mt-2'>Don't have an account! <span className='text-decoration-underline'>Register</span></Link>
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

export default Login;
