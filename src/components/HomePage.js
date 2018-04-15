import React from "react";
import "../styles/reset.css";
import "../styles/HomePage.css";

const HomePage = () => (
    <div className="hpwrap">
        <nav className="navbar navbar-deafult navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">Moving Canvas</a>
                </div>
                <ul className="nav navbar-right">
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </nav>

        <div className= "header-container">
            <div className="header-img">
                <img src="../images/architecture-black-and-white-buildings-316902.jpg" alt="background" height="600" width="100%"/>
            </div>
        </div>

        <div className="welcome-container">
            <p className="welcome"><b> Find the best tattoo artists in your location. </b></p>
        </div>

        <div className="howdoesitwork">
            <div className="row">
                <div className="col-md">
                    <p id="one">1</p>
                    <p id="exone">Select your preferred categories</p>
                </div>
            </div>
        </div>

        <div className="browse-container">
            <div className="browse-text">
                <p>Choose your desired tattoo style to begin.</p>
            </div>

            <div className="row">
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/lights.jpg">
                            <img src="https://image.ibb.co/kTJPhx/black_and_gray.png" alt="Lights" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Black & Gray</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kwRo9c/dotwork.png" alt="Nature" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Dotwork</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/fjords.jpg">
                            <img src="https://preview.ibb.co/kDokpc/watercolor.png" alt="Fjords" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Watercolor</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kxHBUc/realism.png" alt="Nature" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Realism</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/k2Eapc/traditional.png" alt="Traditional" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Traditional</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/c2zfNx/japanese.png" alt="Japanese" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Japanese</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/kDPKFH/geometric.png" alt="Geometric" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Geometric</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src="https://image.ibb.co/mDuEhx/tribal.png" alt="Tribal" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Tribal</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src= "https://image.ibb.co/c9vLNx/horror_surrealism.png" alt="Nature" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Horror & Surrealism</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/hH1YaH/hand_poked.png" alt="hand-poked" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Hand-Poked</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src= "https://image.ibb.co/nKo1Uc/lettering.png" alt="Lettering" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Lettering</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/m5ex2x/fineline.png" alt="fineline" className="cate-img"/>
                            <div className="caption">
                                <p className="col-text">Fine-Line</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="nextbutton">
            <button type="button" className="btn btn-secondary">Next</button>
        </div>
    </div>

);

export default HomePage;