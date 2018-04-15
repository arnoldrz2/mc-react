import React from "react";
import "../styles/reset.css";
import "../styles/ProfilePage.css";

const ArtistProfilePage = () => (
    <div>
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="home002.html">Moving Canvas</a>
                </div>
                <ul className="nav navbar-right">
                    <li><a href="">Name</a></li>
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
                    <form method="post" enctype="multipart/form-data" id="js-upload-form">
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

        <div className="submitbutton">
            <button type="button" className="btn btn-secondary">Next</button>
        </div>

        <footer>
            <p className="footer">Copyright Moving Canvas 2018</p>
        </footer>
    </div>
)

export default ArtistProfilePage;