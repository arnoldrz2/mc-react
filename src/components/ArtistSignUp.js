import React from "react";

const ArtistSignUp = () => (
    <div class="container">
    {/* <!-- Text at the top of page --> */}
    <div class="row">
      <div class="col s12">
        <p class="SignUp">Are you ready to make yourself more accessible? Display your tattoo portfolio on Moving Canvas.</p>
        <p class="start"><i>Let's start here.</i></p>
      </div>
    </div>

    {/* <!-- Artist Form --> */}
    <form class="col s12">

      {/* <!-- Name --> */}
      <div class="row">
        {/* <!-- First Name --> */}
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        {/* <!-- Last Name --> */}
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>

      {/* <!-- Gender Select --> */}
      <div class="row">
        <div class="col s12">
          <label for="artist_gender">Artist Gender</label>
            <p>
              <input name="group1" type="radio" id="female" />
              <label for="female">Female</label>
            </p>
            <p>
              <input name="group1" type="radio" id="male" />
              <label for="male">Male</label>
            </p>
        </div>
      </div>

      {/* <!-- Email --> */}
      <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate"/>
            <label for="email">Email</label>
          </div>
      </div>

      {/* <!-- Password --> */}
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>

      {/* <!-- Phone --> */}
      <div class="row">
        <div class="input-field col s12">
          <input id="telephone" type="tel" class="validate"/>
          <label for="telephone">Phone</label>
        </div>
      </div>

      {/* <!-- Studio --> */}
      <div class="row">
          <div class="input-field col s12">
            <input id="studio" type="text" class="validate"/>
            <label for="studio">Studio</label>
          </div>
      </div>

      {/* <!-- Certified --> */}
      <div class="row">
          <div class="col s12">
            <label for="certified">Are you a certified tattoo artist?</label>
              <p>
                <input name="group2" type="radio" id="certified" />
                <label for="certified">Certified</label>
              </p>
              <p>
                <input name="group2" type="radio" id="not-certified" />
                <label for="not-certified">Not Certified</label>
              </p>
          </div>
      </div>

      {/* <!-- Apprentice --> */}
      <div class="row">
          <div class="col s12">
            <label for="Apprentice">Are you an apprentice to a tattoo artist?</label>
              <p>
                <input name="group3" type="radio" id="apprentice" />
                <label for="apprentice">Apprentice</label>
              </p>
              <p>
                <input name="group3" type="radio" id="not-apprentice" />
                <label for="not-apprentice">Not An Apprentice</label>
              </p>
          </div>
      </div>

    </form>

  </div>
);

export default ArtistSignUp