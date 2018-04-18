import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/UserSignUp.css";

const UserPrefForm = () => (
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
        
            <div className="categoriesform-container">
                <div className="form-container">
                    <form action="/users" method="POST">
                        <h2 className="CategoriesCont">Account Setup</h2>
                        {/* <!-- Name --> */}
                        <div className="row">
                            {/* <!-- First Name --> */}
                            <div className="form-group col">
                                <label htmlFor="user_first_name">First Name</label>
                                <input type="text" className="form-control" name="user_first_name" placeholder="Enter First Name"/>
                            </div>
                            {/* <!-- Last Name --> */}
                            <div className="form-group col">
                                <label htmlFor="user_last_name">Last Name</label>
                                <input type="text" className="form-control" name="user_last_name" placeholder="Enter Last Name"/>
                            </div>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="user_email">Email</label>
                                <input type="email" className="form-control" name="user_email" placeholder="Enter Email"/>
                            </div>
                        </div>
                        {/* <!-- Password --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="user_password">Password</label>
                                <input type="password" className="form-control" name="user_password" placeholder="Enter Password"  
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                    required/>
                            </div>
                        </div>
                        {/* Zip Code */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="user_zip">Zip Code</label>
                                <input type="text" className="form-control" name="user_zip" placeholder="Enter Zip Code"/>
                            </div>
                        </div>
                        {/* <h2 className="CategoriesCont">Your tattoo artist preferences</h2>
                        
                        <div className="GenderSelection"> */}
                        {/* User Preference for Artist Gender */}
                        {/* <p>Do you have a tattoo artist gender preference?(leave blank if no preference)</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="male" value="m" />
                                        <label className="form-check-label" htmlFor="gendermale">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="female" value="f" />
                                        <label className="form-check-label" htmlFor="genderfemale">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ArtistExperience"> */}
                        {/* User Preference for Artist Certification */}
                        {/* <p> Do you have a preference for experience?(leave blank if no preference)</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="certified" value="0" />
                                        <label className="form-check-label" htmlFor="certified">Certified</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="notcertified" value="1" />
                                        <label className="form-check-label" htmlFor="notcertified">Not Certified</label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="nextbutton">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
);

export default UserPrefForm;