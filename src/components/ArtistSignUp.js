import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/ArtistSignUp.css";

const ArtistSignUp = () => (
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
                <h2 className="CategoriesCont">Account Setup</h2>
                {/* <!-- Text at the top of page --> */}
                <div className="row">
                  <div className="col">
                    <p className="SignUp">Are you ready to make yourself more accessible? Display your tattoo portfolio on Moving Canvas.</p>
                    <p className="start"><i>Let's start here.</i></p>
                  </div>
                </div>

                {/* <!-- Artist Form --> */}
                <form action="/artists" method="POST">
                  {/* <!-- Name --> */}
                  <div className="row">
                    {/* <!-- First Name --> */}
                    <div className="form-group col">
                      <label htmlFor="artist_first_name">First Name</label>
                      <input type="text" className="form-control" name="artist_first_name" placeholder="Enter First Name"/>
                    </div>
                    {/* <!-- Last Name --> */}
                    <div className="form-group col">
                      <label htmlFor="artist_last_name">Last Name</label>
                      <input type="text" className="form-control" name="artist_last_name" placeholder="Enter Last Name"/>
                    </div>
                  </div>

                  {/* <!-- Email --> */}
                  <div className="row">
                      <div className="form-group col">
                        <label htmlFor="artist_email">Email</label>
                        <input type="email" className="form-control" name="artist_email" placeholder="Enter Email"/>
                      </div>
                  </div>

                  {/* <!-- Password --> */}
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="artist_password">Password</label>
                      <input type="password" className="form-control" name="artist_password" placeholder="Enter Password"  
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                          required/>
                    </div>
                  </div>

                  {/* <!-- Phone --> */}
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="artist_phone">Telephone</label>
                      <input type="tel" className="form-control" name="artist_phone" placeholder="Enter Phone Number"/>
                    </div>
                  </div>


                  {/* <!-- Studio --> */}
                  <div className="row">
                      <div className="form-group col">
                        <label htmlFor="artist_studio">Studio</label>
                        <input type="text" className="form-control" name="artist_studio" placeholder="Enter Studio Name"/>
                      </div>
                  </div>

                  {/* <!-- Gender Select --> */}
                  <div className="row">
                    <div className="col GenderSelection">
                      <p>Gender</p>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="options1" id="male" value="m"/>
                          <label className="form-check-label" htmlFor="gendermale">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="options1" id="female" value="f"/>
                            <label className="form-check-label" htmlFor="genderfemale">Female</label>
                        </div>
                    </div>
                  </div>

                  {/* <!-- Certified --> */}
                  <div className="row">
                      <div className="col ArtistExperience">
                        <p>Are you a certified tattoo artist?</p>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="options2" id="certified" value="0"/>
                            <label className="form-check-label" htmlFor="certified">Certified</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="options2" id="not-certified" value="1"/>
                            <label className="form-check-label" htmlFor="notcertified">Not-Certified</label>
                          </div>
                      </div>
                  </div>

                  <div className="nextbutton">
                      <button type="submit" className="btn btn-secondary">Next</button>
                  </div>
                </form>
            </div>
        </div>
        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
);

export default ArtistSignUp;