import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import ArtistSignUp from './components/ArtistSignUp';
import HomePage from './components/HomePage';


const Home = () => (
  <div>
    <SplashPage/>
  </div>
)

const About = () => (
  <div>
    <ArtistSignUp/>
  </div>
)

const Topic = () => (
  <div>
    <HomePage/>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topic}/>
    </div>
  </Router>
)
export default BasicExample






// export default App;


// Extra Code Below

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* {this.props.children} */}
//         <SplashPage/>
//       </div>
//     );
//   }
// }