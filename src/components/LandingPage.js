import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/LandingPage.css";


const LandingPage = () => (
    <header>
        <div id="signbutton">
            <Link to="/login"><button type="button" className="signin-text btn btn-secondary">Sign In</button></Link>
        </div>
            <div className="intro-text">
                <div className="intro-lead-in">Moving Canvas</div>
                <div className="intro-heading"><p>The modern way to find a tattoo artist.</p></div>
                    <div className="forthebuttons">
                        <Link to="/home"><button type="button" className="btn btn-secondary">Find a tattoo artist</button></Link>
                        <Link to="/login"><button type="button" className="btn btn-secondary">I'm a tattoo artist </button></Link>
                    </div>
            </div>
    </header>
);

export default LandingPage;