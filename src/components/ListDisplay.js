import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "../styles/reset.css";

const ListDisplay = () => (
    <div>
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">Moving Canvas</p>
                </div>
                <ul className="nav navbar-right">
                    <Link to="/login"><li><a>Login</a></li></Link>
                </ul>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <h2>Check it~</h2>
            </div>
            {/* First Row */}
            <div className="row">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>            
            </div>
            {/* Second Row */}
            <div className="row">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>            
            </div>
            {/* Third Row */}
            <div className="row">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src="..." alt="..."/>
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>Artist Info Goes Here</p>
                            <p><a href="" className="btn btn-primary" role="button">Button</a> <a href="" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
);

export default ListDisplay;