import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/UserSignUp.css";

const UserPrefForm = () => (
    <div>
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">Moving Canvas</p>
                </div>
                <ul className="nav navbar-right">
                    <Link to="/login"><li><a>Login</a></li></Link>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="categoriesform-container">
                <div className="form-container">
                    <form action="">
                        <h2 class="CategoriesCont">Account Setup</h2>
                        {/* <!-- Name --> */}
                        <div className="row">
                            {/* <!-- First Name --> */}
                            <div className="form-group col">
                                <label for="first_name">First Name</label>
                                <input type="text" className="form-control" id="first_name"/>
                            </div>
                            {/* <!-- Last Name --> */}
                            <div className="form-group col">
                                <label for="last_name">Last Name</label>
                                <input type="text" className="form-control" id="last_name"/>
                            </div>
                        </div>
                        {/* <!-- Email --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                        </div>
                        {/* <!-- Password --> */}
                        <div className="row">
                            <div className="form-group col">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                        </div>
                        {/* Zip Code */}
                        <div className="row">
                            <div className="form-group col">
                                <label for="zip">Zip Code</label>
                                <input type="text" className="form-control" id="zip"/>
                            </div>
                        </div>
                        <h2 className="CategoriesCont">Your tattoo artist preferences</h2>
                        {/* User Preference for Artist Gender */}
                        <p className="GenderSelection">Do you have a tattoo artist gender preference?</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <label className="form-check-label" for="gendermale">Male</label>
                                        <input className="form-check-input" type="checkbox" value="male" id="gendermale"/>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="genderfemale">Female</label>
                                        <input className="form-check-input" type="checkbox" value="female" id="genderfemale"/>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="nogenpreference">No Preference</label>
                                        <input className="form-check-input" type="checkbox" value="nogenpreference" id="nogenpreference"/>
                                    </div>
                                </div>
                            </div>
                        {/* User Preference for Artist Certification */}
                        <p className="ArtistExperience"> Do you have a preference for experience?</p>
                            <div className="row">
                                <div className="col">
                                    <div className="form-check">
                                        <label className="form-check-label" for="certified">Certified</label>
                                        <input className="form-check-input" type="checkbox" value="certified" id="certified"/>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="notcertified">Not Certified</label>
                                        <input className="form-check-input" type="checkbox" value="notcertified" id="notcertified"/>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label" for="nocertpreference">No Preference</label>
                                        <input className="form-check-input" type="checkbox" value="nocertpreference" id="nocertpreference"/>
                                    </div>
                                </div>
                            </div>
                        <div className="nextbutton">
                            <button type="button" className="btn btn-secondary">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default UserPrefForm;