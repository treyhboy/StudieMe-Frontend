import React, { Component } from 'react';
import styled from 'styled-components';

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
width: 80%;
height: 35rem;

`
const DesHead = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
height: 20%;
width: 100%;
font-size: 4rem;
font-weight: lighter;
color: gray;

`
const DesMain = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
height: 60%;
width: 85%;
font-size: 2.5rem;
font-weight: lighter;
color: gray;

`
const DesButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
height: 20%;
width: 100%;

`



class Home extends Component {
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
                        <Button bcolor={"#24D89B"} color={"white"}>
                            Login
                        </Button>
                    </LoginBox>
                </Header>
                <About>
                    <Sec content={"center"} item={"center"}>
                        <Description>
                            <DesHead>
                                Study Abroad Made Easy
                            </DesHead>
                            <DesMain>
                                Wanna study abroad we are here to help you our AI powered college recommender and student support help you find the right college and updates you every day on the events and news about your dream college just sign in make your account and leave the rest on us
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
