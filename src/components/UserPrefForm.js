import React from "react";
import "../styles/UserPrefForm.css";

const UserPrefForm = () => (

    <div class="categoriesform-container">
        <h2 class="CategoriesCont">Your tattoo artist preferences</h2>
        <div class="form-container">
            <p class="GenderSelection">Do you have a tattoo artist gender preference?</p>
                <div class="row">
                <div class="col">
                    <form action="#">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="male" id="gendermale"/>
                            <label class="form-check-label" for="gendermale">Male</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="female" id="genderfemale"/>
                            <label class="form-check-label" for="genderfemale">Female</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="nogenpreference" id="nogenpreference"/>
                            <label class="form-check-label" for="nogenpreference">No Preference</label>
                        </div>
                    </form>
                </div>
            </div>
        <p class="ArtistExperience"> Do you have a preference for experience?</p>
            <div class="row">
                <div class="col">
                    <form action="#">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="certified" id="certified"/>
                            <label class="form-check-label" for="certified">Certified</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="notcertified" id="notcertified"/>
                            <label class="form-check-label" for="notcertified">Not Certified</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="nocertpreference" id="nocertpreference"/>
                            <label class="form-check-label" for="nocertpreference">No Preference</label>
                        </div>
                    </form>
                </div>
            </div>
            <div class="nextbutton">
                <button type="button" class="btn btn-secondary">Next</button>
            </div>
        </div>
    </div>
);

export default UserPrefForm;