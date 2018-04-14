import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AppRoutes from "../App.js";
import "../styles/SplashPage.css";


const SplashPage = () => (
    <header>
        <button type="button" className="signin-text btn btn-secondary">Sign In</button>
            <div className="intro-text">
                <div className="intro-lead-in">Moving Canvas</div>
                <div className="intro-heading"><p2>The modern way to find a tattoo artist.</p2></div>
                <Link to="/home"><button type="button" className="btn btn-secondary">Find a tattoo artist</button></Link>
                <button type="button" className="btn btn-secondary">I'm a tattoo artist </button>          
            </div>
    </header>
);

export default SplashPage;