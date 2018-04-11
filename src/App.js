import React, { Component } from 'react';
import SplashPage from './components/SplashPage';
import ArtistSignUp from './components/ArtistSignUp';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
