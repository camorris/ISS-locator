import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Home from './Home'
import About  from './About'
import Contact from './Contact'
import Location from './Location'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/location">ISS Location</Link>
          </div>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/location' component={Location}/>
      </div>
    );
  }
}

export default App;
