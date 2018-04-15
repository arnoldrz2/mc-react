import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ArtistSignUp from './components/ArtistSignUp';
import HomePage from './components/HomePage';
import UserPrefForm from './components/UserPrefForm';
import UserProfilePage from './components/UserProfilePage';
import ArtistProfilePage from './components/ArtistProfilePage';
import LoginPage from './components/LoginPage';

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

const UserProfile = () => (
  <div>
    <UserProfilePage/>
  </div>
)

const ArtistProfile = () => (
  <div>
    <ArtistProfilePage/>
  </div>
)

const Login = () => (
  <div>
    <LoginPage/>
  </div>
)

const AppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/artistsignup" component={ArtSignUp}/>
      <Route path="/userprefform" component={UserPref}/>
      <Route path="/userprofile" component={UserProfile}/>
      <Route path="/artistprofile" component={ArtistProfile}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)

export default AppRoutes;