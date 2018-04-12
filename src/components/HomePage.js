import Reach from "react";
import "../styles/HomePage.css";

const HomePage = () => (
        {/* Nav */}
        <nav class="navbar navbar-deafult navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Moving Canvas</a>
                </div>
                <ul class="nav navbar-right">
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
        {/* Top Area Image */}
        <div class= "header-container">
            <div class="header-img">
                <img src="https://static.pexels.com/photos/573294/pexels-photo-573294.jpeg" height="700" width="100%"/>
            </div>
        </div>
        {/* Text over Top Area Image */}
        <div class="welcome-container">
            <p class= "welcome"><b> Matching</b> isn't only for dating.</p>
        </div>
        {/* Category Container */}
        <div class="browse-container">
            <div class="browse-text">
                <p>Choose your desired tattoo style to begin.</p>
            </div>
            {/* Rows of Tattoo Categories Start */}
            <div class="row">
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/lights.jpg">
                            <img src="https://image.ibb.co/kTJPhx/black_and_gray.png" alt="Lights" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Black & Gray</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kwRo9c/dotwork.png" alt="Nature" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Dotwork</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/fjords.jpg">
                            <img src="https://preview.ibb.co/kDokpc/watercolor.png" alt="Fjords" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Watercolor</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://preview.ibb.co/kxHBUc/realism.png" alt="Nature" style="width:200px"/>
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
                            <img src="https://image.ibb.co/k2Eapc/traditional.png" alt="Traditional" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Traditional</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src="https://image.ibb.co/c2zfNx/japanese.png" alt="Japanese" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Japanese</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/kDPKFH/geometric.png" alt="Geometric" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Geometric</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/mDuEhx/tribal.png" alt="Tribal" style="width:200px"/>
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
                            <img src= "https://image.ibb.co/c9vLNx/horror_surrealism.png" alt="Nature" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Horror & Surrealism</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="https://image.ibb.co/hH1YaH/hand_poked.png" alt="hand-poked" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Hand-Poked</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src= "https://image.ibb.co/nKo1Uc/lettering.png" alt="Lettering" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Lettering</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="thumbnail">
                        <a href="/w3images/nature.jpg">
                        <img src="https://image.ibb.co/m5ex2x/fineline.png" alt="Responsive image" style="width:200px"/>
                            <div class="caption">
                                <p class="col-text">Fine-Line</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Next Button */}
        <div class="nextbutton">
            <button type="button" class="btn btn-secondary">Next</button>
        </div>

);

export default HomePage;