import React from "react";
import "../styles/reset.css";
import "../styles/ProfilePage.css";

const UserProfilePage = () => (
    <div>
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Moving Canvas</a>
                </div>
                <ul className="nav navbar-right">
                    <li><a href="">Name</a></li>
                </ul>
            </div>
        </nav>

        <div className="button-container">
            <button type="button" className="btn-back">Back</button>
        </div>

        <h1> My Account </h1>

        <div className="picture-container">
            <img src="../images/pexels-photo-106567.jpg" className="avatar" alt="Avatar"/>
        </div>

        <div className="information-container">
            <p className="name">Name:</p>
            <p className="Email">Email:</p>
            <p className="Studio">Location:</p>
        </div>

        <div className="row">
            <p id="fav">Favorites List</p>
        </div>

        <div className="favorite-list">
            <div className="row">
                <div className="thumbnail">
                    <a href="/w3images/nature.jpg">
                        <img src="https://preview.ibb.co/kwRo9c/dotwork.png" alt="Nature" className="cate-img"/>
                        <div className="caption">
                            <p className="col-text">Dotwork</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
);

export default UserProfilePage;