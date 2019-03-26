import React, { Component } from "react";
import { Router, BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { createBrowserHistory } from "history";
import axios from "axios";
import Grofers from "./Components/Grofers";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import { LinkedInPopUp } from "./Components/Helpers";

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
`;

class App extends Component {
  state = {
    isAuthenticated: "loading",
    token: "",
    tokenError: "",
    User: "",
    Data: "",
    PP: ""
  };

  componentDidMount() {
    if (this.state.isAuthenticated === "loading") {
      let token = JSON.parse(sessionStorage.getItem("LiToken"));

      if (token) {
        this.setState({
          token: token
        });
        axios
          .post(`https://studieme-node.herokuapp.com/verify`, { token: token })
          .then(res => {
            this.setState({
              isAuthenticated: res.data.status,
              User: res.data.name,
              Data: res.data.data,
              PP: res.data.data.pictureUrl
            });
          });
      } else {
        this.setState({
          isAuthenticated: false
        });
      }
    }
  }

  Authtrue = (token, user, data) => {
    this.setState({
      token: token,
      isAuthenticated: true,
      User: user,
      Data: data,
      PP: data.pictureUrl
    });
  };

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <div>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/linkedin" component={LinkedInPopUp} />
              <Route exact path="/Grofers" component={Grofers}/>
              <Route
                path="/"
                render={() =>
                  this.state.isAuthenticated === "loading" ? (
                    <div>loading...</div>
                  ) : this.state.isAuthenticated ? (
                    <Dashboard
                      Authtrue={this.Authtrue}
                      User={this.state.User}
                      PP={this.state.PP}
                      isAuthenticated={this.state.isAuthenticated}
                      Data={this.state.Data}
                    />
                  ) : (
                    <Home
                      Authtrue={this.Authtrue}
                      isAuthenticated={this.state.isAuthenticated}
                    />
                  )
                }
              />
            </Switch>
          </BrowserRouter>
        </div>
      </Router>
    );
  }
}

export default App;
