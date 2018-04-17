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
                    <form action="">
                        <h2 className="CategoriesCont">Account Setup</h2>
                        {/* <!-- Name --> */}
                        <div className="row">
                            {/* <!-- First Name --> */}
                            <div className="form-group col">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" className="form-control" id="first_name"/>
                            </div>
                            {/* <!-- Last Name --> */}
                            <div className="form-group col">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" className="form-control" id="last_name"/>
                            </div>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                        </div>
                        {/* <!-- Password --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                        </div>
                        {/* Zip Code */}
                        <div className="row">
                            <div className="form-group col">
                                <label htmlFor="zip">Zip Code</label>
                                <input type="text" className="form-control" id="zip"/>
                            </div>
                        </div>
                        <h2 className="CategoriesCont">Your tattoo artist preferences</h2>
                        
                        <div className="GenderSelection">
                        {/* User Preference for Artist Gender */}
                        <p>Do you have a tattoo artist gender preference?</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="male" value="male" />
                                        <label className="form-check-label" htmlFor="gendermale">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="female" value="female" />
                                        <label className="form-check-label" htmlFor="genderfemale">Female</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="nopreference" value="nogenpreference" />
                                        <label className="form-check-label" htmlFor="nogenpreference">No Preference</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ArtistExperience">
                        {/* User Preference for Artist Certification */}
                        <p> Do you have a preference for experience?</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="certified" value="certified" />
                                        <label className="form-check-label" htmlFor="certified">Certified</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="notcertified" value="notcertified" />
                                        <label className="form-check-label" htmlFor="notcertified">Not Certified</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" name="options" type="radio" id="nocertpreference" value="nocertpreference" />
                                        <label className="form-check-label" htmlFor="nocertpreference">No Preference</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nextbutton">
                            <button type="button" className="btn btn-secondary">Next</button>
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