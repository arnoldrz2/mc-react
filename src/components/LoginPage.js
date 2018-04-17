import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/LoginPage.css";

const LoginPage = () => (
    <div>
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/home"><p className="navbar-brand">Moving Canvas</p></Link>
                </div>
                <ul className="nav navbar-right">
                    <Link to="/login"><li><p>Login</p></li></Link>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="background"></div>
                <p id="topwelcome">Hey you, welcome back!</p>

                <form>
                    <div className="total-form">
                        {/* <!-- In the callback, you would hide the gSignInWrapper element on a
                        successful sign in --> */}
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" name="psw" className="form-control" id="pwd"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                        </div>

                        <div className="checkbox">
                            <label><input type="checkbox"/> Remember me</label>
                        </div>
                            <button type="Log In" className="btn btn-secondary">Login</button>
                    </div>

                        <div id="gSignInWrapper">
                            <span className="label">Sign in with:</span>
                            <div id="customBtn" className="customGPlusSignIn">
                                <span className="icon"></span>
                                <span id="google">Google</span>
                            </div>
                        </div>

                </form>


            <div id="signup">
                <p>Don't have an account? Sign Up</p>
                <Link to="/artistsignup"><button type="button" className="btn btn-secondary">Sign up as an artist</button></Link>
                <Link to="/usersignup"><button type="button" className="btn btn-secondary">Sign up as a user.</button></Link>
            </div>

        </div>
        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
)

export default LoginPage;