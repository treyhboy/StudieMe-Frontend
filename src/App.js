import React, { Component } from 'react';
// import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkedInPopUp } from './Components/src';
import LinkedInPage from './Components/LinkedInPage';
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
          <BrowserRouter>
              <Switch >
                  <Route exact path="/linkedin" component={LinkedInPopUp} />
                  <Route path="/" component={LinkedInPage} />
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;


// class Demo extends Component {
//     render() {
//         return (
//
//         );
//     }
// }
//
// render(<Demo />, document.querySelector('#demo'));
