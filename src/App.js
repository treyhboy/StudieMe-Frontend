import React, { Component } from 'react';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Blogs from './Components/Blogs';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Router} from 'react-router-dom';
import { LinkedInPopUp } from './Components/Helpers';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import {createBrowserHistory} from 'history';

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
        this.state = {isAuthenticated:false,token:"",tokenError:"",User:"",Data:"",PP:""};
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
                            User:res.data.name,
                            Data:res.data.data,
                            PP:res.data.data.pictureUrl
                        })
                        console.log(this.state)
                    })
            }
            else {
                this.setState({
                    isAuthenticated: false
                })
                console.log(this.state)
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
            Data:data,
            PP:data.pictureUrl
        });


    }
    isAuth(token)
    {

    }

    render() {
    return (
        <Router  history={createBrowserHistory()} >
      <div>
        <GlobalStyle/>
          <BrowserRouter>
              <Switch >
                  <Route exact path="/linkedin" component={LinkedInPopUp} />
                      <Route path="/" render={() =>
                          this.state.isAuthenticated==="loading"?<div>loading...</div>:
                              (this.state.isAuthenticated?
                              <Dashboard Authtrue={this.Authtrue} User={this.state.User} PP={this.state.PP} isAuthenticated={this.state.isAuthenticated} Data={this.state.Data}/>
                              :<Home Authtrue={this.Authtrue} isAuthenticated={this.state.isAuthenticated} />)}
                             />
              </Switch>
          </BrowserRouter>
      </div>
        </Router>
    );
  }
}

export default App;
