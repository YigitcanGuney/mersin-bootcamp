import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Login() {
    return (
        <div className="background-colors pt-5 text-center" style={{ height: "100vh" }}>
            <div className="container ">
                <div className="row ">
                    <div className="col-sm-4 offset-sm-4 text-start bg-light p-5">
                        <h3 className="fw-bold">Welcome Back</h3>
                        <p className="text-muted">Login with email</p>
                        <input placeholder="Email" className="w-100 px-3 py-1 mt-3" type="text" />
                        <input placeholder="Password" className="w-100 px-3 py-1 mt-3" type="text" />
                        <p className="text-end">
                        <a href="#" className="btn btn-outline-dark mt-3 ">Login</a>
                        </p>
                        <div className="d-flex mt-3 justify-content-between">
                            <label style={{fontSize : "0.9rem"}} id="remember" class="checkbox-container mt-1 text-muted"> Remember Me
                                <input type="checkbox" id="remember" name="remember" />
                                <span class="checkmark"></span>
                            </label>
                            <span style={{fontSize : "0.9rem"}} className=" mt-1 ">
                                <a className="fw-bold text-muted text-decoration-none" href="#">Forgot Password ?</a>
                            </span>

                        </div>
                       
                    </div>
                </div>
            </div>
            <p className="mt-3 text-muted">
                Or create an <a className="text-muted fw-bold text-decoration-none" href="#">account</a>
                </p>
        </div>
    )
}

export default Login
