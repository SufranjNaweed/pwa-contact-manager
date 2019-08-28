import React from 'react';
import './App.css';

import Header from './Component/layout/Header';
import ContactContainer from './Component/ContactContainer';


function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <Header />
      <div className="container">
        <ContactContainer />
      </div>
    </div>
  );
}

export default App;
