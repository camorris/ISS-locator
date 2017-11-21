import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Home from './Home'
import About  from './About'
import Contact from './Contact'


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="navigation">
          <ul>
            <li> <Link to="/" className="navlinks">ISS Location</Link> </li>
            <li> <Link to="/about" className="navlinks" >Purpose</Link> </li>
            <li> <Link to="/contact" className="navlinks">Contact</Link></li>
          </ul>
        </div>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
       
      </div>
    );
  }
}

export default App;
