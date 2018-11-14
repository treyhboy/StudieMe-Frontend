import React, { Component } from 'react';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinkedInPopUp } from './Components/Helpers';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';

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
    constructor(props) {
        super(props);
        this.state = {isAuthenticated:"loading",token:"",tokenError:"",User:"",Data:""};
        this.Authtrue = this.Authtrue.bind(this);
        this.isAuth = this.isAuth.bind(this);
    }
    componentDidMount()
    {
        console.log("in mount")
        if(this.state.isAuthenticated==="loading") {
            console.log("in c1")
            var token = JSON.parse(sessionStorage.getItem('LiToken'))
            if (token) {
                console.log("token true")
                this.setState({
                    token: token
                })
                axios.post(`http://localhost:1234/verify`, {token: token})
                    .then(res => {
                        console.log(res)
                        this.setState({
                            isAuthenticated: res.data.status,
                            User:res.data.name
                        })
                        console.log(this.state.isAuthenticated)
                        console.log(this.state.User)
                    })
            }
            else {
                this.setState({
                    isAuthenticated: false
                })
            }
        }

    }
    Authtrue(token,user,data)
    {
        console.log("in auth true")
        console.log(token)
        console.log(user)
        console.log(data)
        this.setState({
            token:token,
            isAuthenticated:true,
            User:user,
            Data:data
        });


    }
    isAuth(token)
    {

    }

    render() {
    return (
      <div>
        <GlobalStyle/>
          <BrowserRouter>
              <Switch >
                  <Route exact path="/linkedin" component={LinkedInPopUp} />
                      <Route path="/" render={() =>
                          this.state.isAuthenticated==="loading"?<div>loading...</div>:
                              (this.state.isAuthenticated?
                              <Dashboard Authtrue={this.Authtrue} User={this.state.User} isAuthenticated={this.state.isAuthenticated} />
                              :<Home Authtrue={this.Authtrue} isAuthenticated={this.state.isAuthenticated} />)}
                             />
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
