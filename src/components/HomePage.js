import React from "react";
import "../styles/HomePage.css";

const HomePage = () => (
    <div className="hpwrap">
        <nav class="navbar navbar-deafult navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="">Moving Canvas</a>
                </div>
                <ul class="nav navbar-right">
                    <li><a href="">Sign In</a></li>
                </ul>
            </div>
        </nav>
        <div class="header-container">
            <div class="header-img">
                {/* Top Area Image */}
                <img src="https://static.pexels.com/photos/573294/pexels-photo-573294.jpeg" height="700" width="100%" alt="backgroundimg" />
            </div>
        </div>
        <div class="welcome-container">
            {/* Text over Top Area Image */}
            <p class="welcome">Find your <b>Artist.</b></p>
        </div>
        <div class="browse-container">
            {/* Category Container */}
            <div class="browse-text">
                <p>Choose your desired tattoo style to begin.</p>
            </div>
            {/* Rows of Tattoo Categories Start */}
            <div class="row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/lights.jpg">
                            <img src="https://image.ibb.co/kTJPhx/black_and_gray.png" class="cate-img" alt="Lights"/>
                            <div class="caption">
                                <p class="col-text">Black & Gray</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kwRo9c/dotwork.png" class="cate-img" alt="Nature"/>
                            <div class="caption">
                                <p class="col-text">Dotwork</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/fjords.jpg">
                            <img src="https://preview.ibb.co/kDokpc/watercolor.png" class="cate-img" alt="Fjords"/>
                            <div class="caption">
                                <p class="col-text">Watercolor</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kxHBUc/realism.png" class="cate-img" alt="Nature"/>
                            <div class="caption">
                                <p class="col-text">Realism</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/k2Eapc/traditional.png" class="cate-img" alt="Traditional"/>
                            <div class="caption">
                                <p class="col-text">Traditional</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src="https://image.ibb.co/c2zfNx/japanese.png" class="cate-img" alt="Japanese"/>
                            <div class="caption">
                                <p class="col-text">Japanese</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/kDPKFH/geometric.png" class="cate-img" alt="Geometric"/>
                            <div class="caption">
                                <p class="col-text">Geometric</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/mDuEhx/tribal.png" class="cate-img" alt="Tribal"/>
                            <div class="caption">
                                <p class="col-text">Tribal</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src= "https://image.ibb.co/c9vLNx/horror_surrealism.png" class="cate-img" alt="Nature"/>
                            <div class="caption">
                                <p class="col-text">Horror & Surrealism</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/hH1YaH/hand_poked.png" class="cate-img" alt="hand-poked"/>
                            <div class="caption">
                                <p class="col-text">Hand-Poked</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src= "https://image.ibb.co/nKo1Uc/lettering.png" class="cate-img" alt="Lettering"/>
                            <div class="caption">
                                <p class="col-text">Lettering</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src="https://image.ibb.co/m5ex2x/fineline.png" class="cate-img" alt="fineline"/>
                            <div class="caption">
                                <p class="col-text">Fine-Line</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="nextbutton">
            {/* Next Button */} 
            <button type="button" class="btn btn-secondary">Next</button>
        </div>
    </div>

);

export default HomePage;