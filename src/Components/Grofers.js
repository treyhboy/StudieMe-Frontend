import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #2e6da4;
  height: 100vh;
  width: 100vw;
`;

class Grofers extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input:""
        };
        this.handleDeg = this.handleDeg.bind(this)

    }


    componentDidMount() {

    }

    handleDeg = event => {
        console.log(event.target.value)


    }

    render() {
        return (
            <Container/>
        );
    }
}

export default Grofers;

