import React from "react";
import "../styles/reset.css";

const LoginPage = () => (
    <div className="container">
        <div className="background"></div>
            <p className="topwelcome">Hey you, welcome back!</p>

            <form>
                <div className="total-form">
                    {/* <!-- In the callback, you would hide the gSignInWrapper element on a
                    successful sign in --> */}
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>

                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" name="psw" className="form-control" id="pwd"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox"/> Remember me</label>
                    </div>
                        <button type="Log In" className="btn btn-secondary">Log In</button>
                </div>

                    <div id="gSignInWrapper">
                        <span className="label">Sign in with:</span>
                        <div id="customBtn" className="customGPlusSignIn">
                            <span className="icon"></span>
                            <span className="buttonText">Google</span>
                        </div>
                    </div>

                    <div id="name"></div>
            </form>

        <p className="signup">Don't have an account? Sign Up</p>
    </div>
)

export default LoginPage;