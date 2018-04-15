import React from "react";
import "../styles/reset.css";
import "../styles/UserPrefForm.css";

const UserPrefForm = () => (

    <div className="categoriesform-container">
        <h2 className="CategoriesCont">Your tattoo artist preferences</h2>
        <div className="form-container">
            <p className="GenderSelection">Do you have a tattoo artist gender preference?</p>
                <div className="row">
                    <div className="col">
                        <form action="#">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="male" id="gendermale"/>
                                <label className="form-check-label" for="gendermale">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="female" id="genderfemale"/>
                                <label className="form-check-label" for="genderfemale">Female</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="nogenpreference" id="nogenpreference"/>
                                <label className="form-check-label" for="nogenpreference">No Preference</label>
                            </div>
                        </form>
                    </div>
                </div>
            <p className="ArtistExperience"> Do you have a preference for experience?</p>
                <div className="row">
                    <div className="col">
                        <form action="#">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="certified" id="certified"/>
                                <label className="form-check-label" for="certified">Certified</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="notcertified" id="notcertified"/>
                                <label className="form-check-label" for="notcertified">Not Certified</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="nocertpreference" id="nocertpreference"/>
                                <label className="form-check-label" for="nocertpreference">No Preference</label>
                            </div>
                        </form>
                    </div>
                </div>
            <div className="nextbutton">
                <button type="button" className="btn btn-secondary">Next</button>
            </div>
        </div>
    </div>
);

export default UserPrefForm;