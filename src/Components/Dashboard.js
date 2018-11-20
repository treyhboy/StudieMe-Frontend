import React, {Component} from 'react';
import styled from 'styled-components';
import {Route,Switch,Link,Redirect} from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
display: flex;
flex-flow: row;
height: 100vh;
width: 100vw;
background-color: #F8F8F8;
`
const Header = styled.div`
display: flex;
height: 8%;
width: 100%;
background-color: white;
border-bottom: solid 1px #f8f8f8;
`
const HeaderLogo = styled.div`
display: flex;
height: 100%;
width: 79%;
align-items: center;
//background-color: red;
`

const Logo = styled.img`
height: 4rem;
width: auto;
margin-left: 2rem;
`
const Notification = styled.img`
height: 3.3rem;
width: auto;
`

const HeaderNot = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 5%;
border-right: solid 1px #f8f8f8;
border-left: solid 1px #f8f8f8;
&:hover{
background-color: #F8F8F8;
}
//background-color: steelblue;
`
const HeaderUser = styled.div`
display: flex;
height: 100%;
width: 16%;
&:hover{
background-color: #F8F8F8;
}
//background-color: salmon;
`
const UserPhoto = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 25%;
//background-color: aqua;
`
const UserName = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 60%;
//background-color: antiquewhite;
font-weight: 200;
color: gray;
font-size: 2rem;
letter-spacing: 1.5px;
`
const UserButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 15%;
//background-color: orange;

`
const PP = styled.img`
height: 4rem;
width: auto;
`
const Down = styled.img`
height: 1.3rem;
width: auto;
`
const Nav = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 5%;
border-right: solid 1px #f8f8f8;
background-color: white;
`
const NavToggle = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 8%;
width: 100%;
&:hover{
background-color: #F8F8F8;
}
border-bottom: solid 1px #f8f8f8;
`
const NavIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10rem;
width: 100%;
&:hover{
background-color: #F8F8F8;
}
`
const Icon = styled.img`
height: 3rem;
width: auto;
`
const Toggle = styled.img`
height: 2rem;
width: auto;
`
const Main = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 95%;
`
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
//background-color: red;
`
const InputParent = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-flow: column;
height: 50%;
width: 50%;
border: solid 1px #f8f8f8;
border-radius: 1rem;
background-color: white;
`

const Input = styled.input`
height: 5rem;
width: 80%;
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
const ContentCol1 = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 66%;

`
const Col1Row1 = styled.div`
display: flex;
height: 45%;
width: 100%;

`
const Row1Pie = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 45%;
`
const Pie = styled.img`
height: 28rem;
width: auto;
`
const Row1Graph = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 55%;
//background-color: tan;
`
const Graph = styled.img`
height: 28rem;
width: auto;
`

const Col1Row2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 55%;
width: 100%;
//background-color: palegreen;
`
const Prof = styled.div`
display: flex;
flex-flow: column;
height: 80%;
width: 91%;
border-radius: 1rem;
border: solid 1px #f8f8f8;
background-color: white;
`
const ProfHead = styled.div`
display: flex;
align-items: center;
height: 12%;
width: 100%;
font-size: 2.3rem;
padding-left:3rem ;
font-weight: 200;
color:gray;
//border-bottom: solid 1px #E3DEDE;
`
const ProfContent = styled.div`
display: flex;
flex-flow: column;
height: 88%;
width: 100%;

//background-color: red;
`
const ContentRow = styled.div`
display: flex;
height: 10%;
width: 100%;
border-top: solid 1px #f8f8f8;
`


const ContentCol2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 34%;
`
const College = styled.div`
display: flex;
flex-flow: column;
height: 91%;
width: 91%;
border-radius: 1rem;
border: solid 1px #f8f8f8;
margin-bottom: 1rem;
background-color: white;
`
const CollegeHead = styled.div`
display: flex;
align-items: center;
height: 10%;
width: 100%;
font-size: 2.8rem;
padding-left:3rem ;
font-weight: 200;
color:gray;
//border-bottom: solid 1px #E3DEDE;
`
const CollegeContent = styled.div`
display: flex;
flex-flow: column;
height: 90%;
width: 100%;

//background-color: red;
`
const CollegeRow = styled.div`
display: flex;
height: 10%;
width: 100%;
border-top: solid 1px #f8f8f8;
`




class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={User:props.User,value:"",status:false};
        this.handlechange = this.handlechange.bind(this);
        this.handleclick = this.handleclick.bind(this);
    }
    handlechange(event)
    {
        let k = event.target.value;
        this.setState({
            value:k
        }
    )
    }
    handleclick()
    {
        console.log(this.state.value)
        axios.post(`http://localhost:1234/api`,{'data':this.state.value})
            .then(res => {
                this.setState({
                    status:true
                })
                console.log(res);
                console.log(res.data);
            })

    }

    render() {
        return (<Container>
                <Nav>
                    <NavToggle>
                        <Toggle src={require('../Images/Toggle icon.svg')}/>
                    </NavToggle>
                    <NavIcon>
                        <Icon src={require('../Images/home.svg')}/>
                    </NavIcon>
                    <NavIcon>
                        <Icon src={require('../Images/order.svg')}/>
                    </NavIcon>
                    <NavIcon>
                        <Icon src={require('../Images/settings.svg')}/>
                    </NavIcon>
                    <NavIcon>
                        <Icon src={require('../Images/man.svg')}/>
                    </NavIcon>
                </Nav>
                <Main>
                    <Header>
                        <HeaderLogo>
                            <Logo src={require('../Images/Logo.svg')}/>
                        </HeaderLogo>
                        <HeaderNot>
                            <Notification src={require('../Images/notification.svg')}/>
                        </HeaderNot>
                        <HeaderUser>
                            <UserPhoto>
                                <PP src={require('../Images/pp.svg')}/>
                            </UserPhoto>
                            <UserName>
                                {this.state.User}
                            </UserName>
                            <UserButton>
                                <Down src={require('../Images/caret-down.svg')}/>
                            </UserButton>
                        </HeaderUser>
                    </Header>
                    <Route exact path="/" render={() =>this.state.status ? (
                        <Redirect to="/dashboard"/>
                    ) :(<Content>
                        <InputParent>
                            <Input placeholder={"Enter Resume Data"} value={this.state.value} onChange={this.handlechange}/>
                            <EnterButton onClick={this.handleclick}>
                                Send
                            </EnterButton>
                        </InputParent>
                    </Content>)
                    }
                    />
                    <Route path="/dashboard" render={() => !this.state.status ? (
                        <Redirect to="/"/>
                    ) :(<Content>
                        <ContentCol1>
                            <Col1Row1>
                                <Row1Pie>
                                    <Pie src={require('../Images/chart.svg')}/>
                                </Row1Pie>
                                <Row1Graph>
                                    <Graph src={require('../Images/Graph2.svg')}/>
                                </Row1Graph>
                            </Col1Row1>
                            <Col1Row2>
                                <Prof>
                                    <ProfHead>
                                        Top 10 Matched Professors
                                    </ProfHead>
                                    <ProfContent>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                        <ContentRow>
                                        </ContentRow>
                                    </ProfContent>
                                </Prof>
                            </Col1Row2>
                        </ContentCol1>
                        <ContentCol2>
                            <College>
                                <CollegeHead>
                                    Top 10 Matched Colleges
                                </CollegeHead>
                                <CollegeContent>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                    <CollegeRow>
                                    </CollegeRow>
                                </CollegeContent>
                            </College>
                        </ContentCol2>
                    </Content>)
                    }
                    />

                </Main>
            </Container>
        );
    }
}

export default Dashboard;
