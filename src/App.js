import React from 'react';
import './App.css';
import ContactContainer from './Component/ContactContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>Contact</li>
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
