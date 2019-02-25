import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const InputParent = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: column;
height: 35%;
width: 40%;
border: solid 1px #f8f8f8;
border-radius: 1rem;
background-color: white;
`
const Input = styled.input`
height: 5rem;
width: 60%;
border: none;
outline: none;
font-size: 2rem;
border-bottom: solid 1px gray;
color: gray;
`
const EnterButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 4.5rem;
width: 14rem;
color: white;
font-weight: 200;
background-color: #24D89B;
border: solid 1px #24D89B;
&:hover{
background-color: white;
color: #24D89B;
}
font-size: 1.8rem;
border-radius: 3rem;
`

class Gre extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(<Content>
            <InputParent>
                <Input placeholder={"Enter Resume Data"} value={this.props.value} onChange={this.props.handlechange}/>
                <Input placeholder={"Enter Gre Score"} value={this.props.gre} onChange={this.props.handlegre}/>

                <EnterButton onClick={this.props.handleclick}>
                    Send
                </EnterButton>

            </InputParent>
        </Content>)
    }
}

export default Gre;