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
                <form>
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

                  {/* <!-- Phone --> */}
                  <div className="row">
                    <div className="form-group col">
                      <label htmlFor="telephone">Telephone</label>
                      <input type="tel" className="form-control" id="telephone"/>
                    </div>
                  </div>


                  {/* <!-- Studio --> */}
                  <div className="row">
                      <div className="form-group col">
                        <label htmlFor="studio">Studio</label>
                        <input type="text" className="form-control" id="studio"/>
                      </div>
                  </div>

                  {/* <!-- Gender Select --> */}
                  <div className="row">
                    <div className="col GenderSelection">
                      <p>Gender</p>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="options" id="male" value="male"/>
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="options" id="female" value="female"/>
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                  </div>

                  {/* <!-- Certified --> */}
                  <div className="row">
                      <div className="col ArtistExperience">
                        <p>Are you a certified tattoo artist?</p>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="options" id="certified" value="certified"/>
                            <label className="form-check-label" htmlFor="certified">Certified</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="options" id="not-certified" value="not-certified"/>
                            <label className="form-check-label" htmlFor="not-certified">Not-Certified</label>
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

export default ArtistSignUp;