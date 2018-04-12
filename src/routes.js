import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import App from './App';
import SplashPage from './components/SplashPage';
import ArtistSignUp from './components/ArtistSignUp';

export default (
    <Route path="/" component={App}>
      <Route component={SplashPage} />
      <Route path="/artistsignup" component={ArtistSignUp} />
    </Route>
  );