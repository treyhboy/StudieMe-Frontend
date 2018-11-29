import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import {createBrowserHistory} from 'history';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value1:"",value2:"",value3:""};
        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlechange3 = this.handlechange3.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onClick1 = this.onClick1.bind(this)
    }
    handlechange1(event)
    {
        let k = event.target.value;
        this.setState({
                value1:k
            }
        )
    }
    handlechange2(event)
    {
        let k = event.target.value;
        this.setState({
                value2:k
            }
        )
    }
    handlechange3(event)
    {
        let k = event.target.value;
        this.setState({
                value3:k
            }
        )
    }
    onClick(){
        axios.post(`http://127.0.0.1:5000/`,{'data':[this.state.value1,this.state.value2,this.state.value3]})
            .then(res => {
                console.log(res)
            })
    }
    onClick1(){
        console.log(this.state.value1)
        console.log(this.state.value2)
        console.log(this.state.value3)
    }

    render() {
        return (
            <Router history={createBrowserHistory()} >
                <div>
                    <input placeholder={"Enter "} value={this.state.value1} onChange={this.handlechange1}/>
                    <button onClick={this.onClick1}>Button</button>
                    <input placeholder={"Enter "} value={this.state.value2} onChange={this.handlechange2}/>
                    <button onClick={this.onClick1}>Button</button>
                    <input placeholder={"Enter "} value={this.state.value3} onChange={this.handlechange3}/>
                    <button onClick={this.onClick1}>Button</button>
                    <button onClick={this.onClick}>Send</button>
                </div>
            </Router>
        );
    }
}

export default App;
