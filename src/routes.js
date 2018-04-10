import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import SplashPage from './components/SplashPage';
import ArtistSignUp from './components/ArtistSignUp';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={SplashPage} />
      <Route path="/artistsignup" component={ArtistSignUp} />
    </Route>
  );