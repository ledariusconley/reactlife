import React, {Component} from 'react';
import NavBar from './nav';
import Home from './home';
import Menu from './menu';
import About from './about';

import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call
    Route,
    Link
    // etc.
  } from 'react-router-dom';

class Routes extends Component {
    render(){
      return(
        <Router>
          <div>
            <NavBar />
            <hr />
            <Route name="Home" exact path="/" component={Home}/>
            <Route name="Menu" path="/menu" component={Menu}/>
            <Route name="About" path="/about" component={About} />
          </div>
        </Router>
      );
    }
  }

  export default Routes