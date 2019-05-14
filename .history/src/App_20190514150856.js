import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/global/Header'
import Home from './pages/Home';
import About from './pages/About';
import Rules from './pages/Rules';
import Footer from './components/global/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="content">
          <Header />
          <Route exact path={'/'} component={Home} />

          <Route path={'/home'} component={Home} />
          <Route path={'/about'} component={About} />
          <Route path={'/how_to_play'} component={Rules} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
