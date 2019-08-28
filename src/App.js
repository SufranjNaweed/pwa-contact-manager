import React from 'react';
import './App.css';
import ContactContainer from './Component/ContactContainer';

function App() {
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <header className="App-header">
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </header>

      <div className="container">
        <ContactContainer />
      </div>
    </div>
  );
}

export default App;
