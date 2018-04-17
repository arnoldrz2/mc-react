import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";
import "../styles/ProfilePage.css";

const ArtistProfilePage = () => (
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

        <div className="button-container">
            <button type="button" className="btn-back">Back</button>
        </div>

        <h1> My Portfolio </h1>

        <div className="picture-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Italian-tattoo-artist-at-work.jpg" className="avatar" alt="Avatar"/>
        </div>

        <div className="information-container">
            <p className="name">Name:</p>
            <p className="Phone">Phone:</p>
            <p className="Email">Email:</p>
            <p className="Studio">Studio:</p>
        </div>

        <div className="container-upload">
            <div className="panel panel-default">
                <div className="panel-heading"><strong>Upload pictures of your work.</strong></div>
                <div className="panel-body">
                    {/* <!-- Standard Form --> */}
                    <h4>Select files from your computer</h4>
                    <form method="post" encType="multipart/form-data" id="js-upload-form">
                        <div className="form-inline">
                            <div className="form-group">
                                <input type="file" name="files" id="js-upload-files" multiple/>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary" id="js-upload-submit">Upload files</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* <!-- /container --> */}

        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
)

export default ArtistProfilePage;