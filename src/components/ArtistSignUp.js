import React from "react";
import "../styles/reset.css";

const ArtistSignUp = () => (
  <div className="container">
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
          <label for="first_name">First Name</label>
          <input type="text" className="form-control" id="first_name"/>
        </div>
        {/* <!-- Last Name --> */}
        <div className="form-group col">
          <label for="last_name">Last Name</label>
          <input type="text" className="form-control" id="last_name"/>
        </div>
      </div>

      {/* <!-- Gender Select --> */}
      <div className="row">
        <div className="col">
          <label for="artist_gender">Artist Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="male" id="male" value="male"/>
              <label className="form-check-label" for="male">Male</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="female" id="female" value="female"/>
                <label className="form-check-label" for="female">Female</label>
            </div>
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

      {/* <!-- Phone --> */}
      <div className="row">
        <div className="form-group col">
          <label for="telephone">Telephone</label>
          <input type="tel" className="form-control" id="telephone"/>
        </div>
      </div>

      {/* <!-- Studio --> */}
      <div className="row">
          <div className="form-group col">
            <label for="studio">Studio</label>
            <input type="text" className="form-control" id="studio"/>
          </div>
      </div>

      {/* <!-- Certified --> */}
      <div className="row">
          <div className="col">
            <label for="certified">Are you a certified tattoo artist?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="certified" id="certified" value="certified"/>
                <label className="form-check-label" for="certified">Certified</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="not-certified" id="not-certified" value="not-certified"/>
                <label className="form-check-label" for="not-certified">Not-Certified</label>
              </div>
          </div>
      </div>

      {/* <!-- Apprentice --> */}
      <div className="row">
          <div className="col">
            <label for="Apprentice">Are you an apprentice to a tattoo artist?</label>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="apprentice" id="apprentice" value="apprentice"/>
                <label className="form-check-label" for="apprentice">Apprentice</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="not-apprentice" id="not-apprentice" value="not-apprentice"/>
                <label className="form-check-label" for="not-apprentice">Not An Apprentice</label>
              </div>
          </div>
      </div>
      <div className="nextbutton">
          <button type="button" className="btn btn-secondary">Next</button>
      </div>
    </form>
  </div>
);

export default ArtistSignUp;