import React from 'react';
import './App.css';

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
        <div className="contact-container">
          <div className="contact-item">
            <div className="img-container">
              <img src="" alt="avatar"/>
            </div>

            <div className="content">
              <p className="text-center">NAME</p>
              <p className="">USERNAME</p>
              <a href="">EMAIL</a>
              <a href="">Website</a>

              {/* address button to see more */}
              <p>address</p>
              <ul>
                <li>street : </li>
                <li>suite : </li>
                <li>zipcode : </li>
                <li>city : </li>
                <li>zipcode : </li>
              </ul>

              {/* button call */}
              <a href="">TEL</a>


              {/* A JSX comment */}
            </div>

            <div className="deleteButton">
              X
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
