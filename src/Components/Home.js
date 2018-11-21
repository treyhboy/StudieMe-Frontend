import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkedIn } from './Helpers';
import axios from 'axios';
// import PropTypes from 'prop-types';

const Container = styled.div`
display: flex;
flex-flow: column;
height: 82rem;
width: 100vw;
//background-color: red;
`
const Header = styled.div`
display: flex;
height: 8rem;
width: 100vw;
//background-color: yellow;
`
const LogoBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 8rem;
min-width: 48%;
padding-left: 3rem;
//background-color: green;
`
const Logo = styled.img`
height: 4.5rem;
width: auto;
`
const NavBox = styled.div`
display: flex;
height: 8rem;
min-width: 30%;
//background-color: purple;
`
const NavItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 8rem;
min-width: 25%;
font-size: 2rem;
font-weight: 200;
color: gray;
//background-color: purple;
`
const LoginBox = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: row;
height: 8rem;
width: 22%;
//background-color: orange;
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: ${props=>props.height||"4rem"};
width: ${props=>props.width||"11rem"};
border-radius: 1rem;
border: solid 1px #24D89B;
color: ${props=>props.color};
background-color: ${props=>props.bcolor};
font-size: ${props=>props.size||"2rem"};
font-weight: 200;
transition: .5s;
&:hover{
color: ${props=>props.bcolor};
background-color: ${props=>props.color};
}
`
const About = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row;
width: 100vw;
height: 80%;
`
const Sec = styled.div`
display: flex;
justify-content: ${props=>props.item};
align-items: ${props=>props.content};
flex-flow: row;
width: 50vw;
height: 100%;

//background-color: orange;
`
const Mockup = styled.img`
height: 65rem;
width: auto;
`
const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
box-sizing:border-box;
width: 70%;
height: 30rem;

`
const DesHead = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: column;
height: 20%;
width: 100%;
font-size: 3.5rem;
font-weight: lighter;
color: gray;

`
const DesMain = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: column;
height: 60%;
width: 100%;
font-size: 2.2rem;
font-weight: lighter;
color: gray;

`
const DesButton = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: column;
height: 20%;
width: 100%;

`


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {isAuthenticated:this.props.isAuthenticated,code:"",codeError:''};
        this.login = this.login.bind(this);
    }

    handleSuccess = (data) => {
        this.setState({
            code: data.code,
        });
        var d = data.code;
        axios.post(`http://localhost:1234/login`,{da:"hello world",d})
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.status);
                console.log(res.data.data);
                console.log(res.data.token);
                console.log(res.data.name)
                if(res.data.status) {
                    sessionStorage.setItem("LiToken",JSON.stringify(res.data.token))
                    this.props.Authtrue(res.data.token, res.data.name, res.data.data);
                }
            })
    }

    handleFailure = (error) => {
        this.setState({
            code: '',
            codeError: error.errorMessage,
        });
    }

    login()
    {
        console.log("IN login");
        fetch("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=81k5i16hicsnq3&scope=r_basicprofile&state=123456&redirect_uri=http://localhost:3002/"
            ,{mode: 'cors'})

        // .then(res => res.json())
        .then(
            (result) => {
                console.log(result.code);
            },
            (error) => {
                console.log("error1")
                console.log(error)
            }
        )}
    render() {
        return (
            <Container>
                <Header>
                    <LogoBox>
                        <Logo src={require("../Images/Logo.svg")}/>
                    </LogoBox>
                    <NavBox>
                        <NavItem>
                            About Us
                        </NavItem>
                        <NavItem>
                            Product
                        </NavItem>
                        <NavItem>
                            FAQs
                        </NavItem>
                        <NavItem>
                            Contact Us
                        </NavItem>
                    </NavBox>
                    <LoginBox>
                        <Button color={"#24D89B"} bcolor={"white"}>
                            SignUp
                        </Button>
                        <LinkedIn
                            clientId="81k5i16hicsnq3"
                            onFailure={this.handleFailure}
                            onSuccess={this.handleSuccess}
                            redirectUri={`${window.location.origin}/linkedin`}
                        >
                        </LinkedIn>
                    </LoginBox>
                </Header>
                <About>
                    <Sec content={"center"} item={"center"}>
                        <Description>
                            <DesHead>
                                A New Chatting Experience
                            </DesHead>
                            <DesMain>
                                Express yourself fullest to the people who matter most to you. A whole new way to chat with your loved ones.Express yourself fullest to the people who matter most to you. A whole new way to chat with your loved ones.
                            </DesMain>
                            <DesButton>
                                <Button height={"5rem"} width={"18rem"} bcolor={"#24D89B"} color={"white"} size={"2.5rem"}>
                                    Get Started
                                </Button>
                            </DesButton>
                        </Description>
                    </Sec>
                    <Sec item={"center"}>
                        <Mockup src={require("../Images/Mockup.svg")}/>
                    </Sec>
                </About>
            </Container>

        );
    }
}

export default Home;
