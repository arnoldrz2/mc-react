import React from "react";

const ArtistSignUp = () => (
  <div class="container">
    {/* <!-- Text at the top of page --> */}
    <div class="row">
      <div class="col">
        <p class="SignUp">Are you ready to make yourself more accessible? Display your tattoo portfolio on Moving Canvas.</p>
        <p class="start"><i>Let's start here.</i></p>
      </div>
    </div>

    {/* <!-- Artist Form --> */}
    <form>

      {/* <!-- Name --> */}
      <div class="row">
        {/* <!-- First Name --> */}
        <div class="form-group col">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name"/>
        </div>
        {/* <!-- Last Name --> */}
        <div class="form-group col">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name"/>
        </div>
      </div>

      {/* <!-- Gender Select --> */}
      <div class="row">
        <div class="col">
          <label for="artist_gender">Artist Gender</label>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="male" id="male" value="male"/>
              <label class="form-check-label" for="male">Male</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="female" id="female" value="female"/>
                <label class="form-check-label" for="female">Female</label>
            </div>
        </div>
      </div>

      {/* <!-- Email --> */}
      <div class="row">
          <div class="form-group col">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email"/>
          </div>
      </div>

      {/* <!-- Password --> */}
      <div class="row">
        <div class="form-group col">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password"/>
        </div>
      </div>

      {/* <!-- Phone --> */}
      <div class="row">
        <div class="form-group col">
          <label for="telephone">Telephone</label>
          <input type="tel" class="form-control" id="telephone"/>
        </div>
      </div>

      {/* <!-- Studio --> */}
      <div class="row">
          <div class="form-group col">
            <label for="studio">Studio</label>
            <input type="text" class="form-control" id="studio"/>
          </div>
      </div>

      {/* <!-- Certified --> */}
      <div class="row">
          <div class="col">
            <label for="certified">Are you a certified tattoo artist?</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="certified" id="certified" value="certified"/>
                <label class="form-check-label" for="certified">Certified</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="not-certified" id="not-certified" value="not-certified"/>
                <label class="form-check-label" for="not-certified">Not-Certified</label>
              </div>
          </div>
      </div>

      {/* <!-- Apprentice --> */}
      <div class="row">
          <div class="col">
            <label for="Apprentice">Are you an apprentice to a tattoo artist?</label>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="apprentice" id="apprentice" value="apprentice"/>
                <label class="form-check-label" for="apprentice">Apprentice</label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="not-apprentice" id="not-apprentice" value="not-apprentice"/>
                <label class="form-check-label" for="not-apprentice">Not An Apprentice</label>
              </div>
          </div>
      </div>

    </form>
  </div>
);

export default ArtistSignUp