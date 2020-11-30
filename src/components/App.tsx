import logo from '../logo.svg';
import './App.css';
import React, { ReactElement } from 'react';

function App(): ReactElement {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Wokring hard on Version 1 of the Household Account Book
              </p>
          </header>
      </div>
  );
}

export default App;
