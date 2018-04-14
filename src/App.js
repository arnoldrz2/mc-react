import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ArtistSignUp from './components/ArtistSignUp';
import HomePage from './components/HomePage';
import UserPrefForm from './components/UserPrefForm';

const Landing = () => (
  <div>
    <LandingPage/>
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

const UserPref = () => (
  <div>
    <UserPrefForm/>
  </div>
)

const AppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/artistsignup" component={ArtSignUp}/>
      <Route path="/userprefform" component={UserPref}/>
    </div>
  </Router>
)

export default AppRoutes;