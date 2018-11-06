import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  html{
  font-size: 10px;
  font-family: 'Lato', sans-serif;
  
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Home/>
      </div>
    );
  }
}

export default App;
