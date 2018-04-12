import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import ArtistSignUp from './components/ArtistSignUp';
import HomePage from './components/HomePage';


const Splash = () => (
  <div>
    <SplashPage/>
  </div>
)

const Home = () => (
  <div>
    <HomePage/>
  </div>
)

const ArtSignUp = () => (
  <div>
    <ArtistSignUp/>
  </div>
)

const AppLinks = () => (
  <Router>
    <div>
      <Route exact path="/" component={Splash}/>
      <Route path="/home" component={Home}/>
      <Route path="/artistsignup" component={ArtSignUp}/>
    </div>
  </Router>
)
export default AppLinks;