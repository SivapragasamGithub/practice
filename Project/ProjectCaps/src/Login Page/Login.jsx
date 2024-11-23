import React from "react";
import "../Login Page/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            let error = {};
            if (!values.email) {
                error.email = "Please enter a valid Email.";
            }
            if (!values.password) {
                error.password = "Password is required.";
            }
            return error;
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:3000/login", values);

                if (response.status === 200) {
                    const { message, email, _id } = response.data;

                    // Store token and user information in localStorage
                    localStorage.setItem("authToken", message);
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("userId", _id);
                    console.log("the type of_id is:", typeof (_id));


                    alert("Login successful!");
                    navigate(`/Profile/${_id}`); // Redirect to Profile page
                }
            } catch (error) {
                if (error.response && error.response.data.message) {
                    alert(error.response.data.message);
                } else {
                    alert("An error occurred. Please try again.");
                    console.error("Login error:", error);
                }
            }
        },
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center text-uppercase mb-5 fw-bold fs-5">
                                Sign In
                            </h5>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                    {formik.errors.email && (
                                        <small className="text-danger">{formik.errors.email}</small>
                                    )}
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                    {formik.errors.password && (
                                        <small className="text-danger">{formik.errors.password}</small>
                                    )}
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Sign in
                                    </button>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link
                                        className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-bold mt-3 link-underline-primary border border-primary p-2"
                                        to="/user-register"
                                    >
                                        Candidate Sign up
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link
                                        className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-bold mt-2 link-underline-primary border border-primary p-2"
                                        to="/Company-register"
                                    >
                                        Employer Sign up
                                    </Link>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link
                                        className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-bold m-3"
                                        to={"/reset-page"}
                                    >
                                        Reset Password
                                    </Link>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button
                                        className="btn btn-google btn-login text-uppercase fw-bold"
                                        type="button"
                                    >
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <button
                                        className="btn btn-facebook btn-login text-uppercase fw-bold"
                                        type="button"
                                    >
                                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
