import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './Component/layout/Header';
import ContactContainer from './Component/ContactContainer';
import About from './Component/page/About';


function App() {
  return (
    <Router basename="/pwa-contact-manager">
      <div className="App">
        <h1>Contact Manager</h1>
        <Header />
        <Route 
          exact path='/' 
          render={props => (
          <React.Fragment>
            <div className="container">
              <ContactContainer />
            </div>
          </React.Fragment>
          )} 
        />
        <Route 
          path="/about/"
          component={About}
        />
      </div>
    </Router>
  );
}

export default App;
