import React from 'react';
import './App.css';

import Header from './Component/layout/Header';
import ContactContainer from './Component/ContactContainer';
import AddContact from './Component/AddContact';

function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <Header />
      <div className="container">
        <AddContact />
        <ContactContainer />
      </div>
    </div>
  );
}

export default App;
