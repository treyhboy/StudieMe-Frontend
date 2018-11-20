import React, {Component} from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
const socket = io.connect('http://localhost:1234');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');



const Container = styled.div`
display: flex;
flex-flow: column;
height: 100vh;
width: 100vw;
background-color: #F8F8F8;
`
const Header = styled.div`
display: flex;
position: fixed;
height:9vh;
width: 100vw;
background-color: white;
`

const LogoBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 9vh;
min-width: 48%;
padding-left: 3rem;
//background-color: green;
`
const Logo = styled.img`
height: 4rem;
width: auto;
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
const InputBar = styled.div`
display: flex;
position: fixed;
justify-content: space-around;
align-items: center;
bottom: 0px;
height:12%;
width: 100vw;
background-color: white;
`
const Input = styled.input`
height:30%;
width: 75%;
padding: 1rem;
padding-left: 3rem;
font-size: 2rem;
font-family: 'Lato', sans-serif;
font-weight: 100;
background-color: #F8F8F8;
color: gray;
border-radius: 3rem;
box-shadow: none;
border: none;
  outline: none;
::placeholder{
font-size: 2rem;
color: gray;
font-family: 'Lato', sans-serif;
font-weight:100;
}
`
const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height:100%;
width:15%;
border-left:solid #F8F8F8 1px;
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 4rem;
width: 11rem;
border-radius: 3rem;
border: solid 1px #24D89B;
color: white;
background-color:#24D89B;
font-size: 2rem;
font-weight: 300;
transition: .5s;
cursor: pointer;
&:hover{
color: #24D89B;
background-color: white;
}
`
const ChatBox = styled.div`
display: flex;
flex-flow: column;
padding-top: 10vh;
height: 100%;
width: 100%;
`
const MessageBox = styled.div`
display: flex;
padding-left: 5rem;
justify-content: flex-start;
align-items: center;
height: 9rem;
width: 100%;
`
const Message1 = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 4.5rem;
padding-left: 1.5rem;
color: white;
width: 20%;
border-radius: 1rem;
background-color: #24D89B;
`
const Message2 = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 4.5rem;
color: gray;
width: 20%;
padding-left: 1.5rem;
border-radius: 1rem;
background-color: white;
`
const Sender = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
height: 50%;
width: 100%;
font-size: 1.7rem;
font-weight: 400;
//background-color: red;
`



class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={value:"",User:props.User,data:"",chats:[]};
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.changestate = this.changestate.bind(this);
    }
    componentDidMount(){
        let k = "no data";
        socket.emit('name',{User:this.state.User},function () {
            console.log('in this')
        });
        socket.on('recv_message', (data) =>{
            this.changestate(data)
            k = data;
        });

        console.log("kk")

    }
    changestate(data)
    {
        this.setState((prev)=>{
            var p = prev.chats;
            console.log("dec string")
            console.log(data.chat)
            console.log(cryptr.decrypt(data.chat))
            p.push({...data,chat:cryptr.decrypt(data.chat)})
            return {data:data,chats:p}
        })
        console.log("message and chats");
        console.log(this.state.data);
        console.log(this.state.chats);
    }
    handleKeypress(event)
    {
        var key = event.target.value;
        this.setState(prevState => ({
            value:key
        }));
    }
    handlechange(event)
    {

        console.log("changeee")
        console.log(this.state.User);
        console.log("enc string")
        console.log(cryptr.encrypt(this.state.value))
        const k = cryptr.encrypt(this.state.value)
        socket.emit('new_message',{v:k,User:this.state.User},function () {
            console.log('in this')
        });
    }

    render() {
        return (<Container>
                <Header>
                    <LogoBox>
                        <Logo src={require("../Images/Logo.svg")}/>
                    </LogoBox>
                    <LoginBox>
                    </LoginBox>
                </Header>
                <ChatBox>
                    {this.state.chats.map((item, index) => (
                        <MessageBox key={index}>
                            {(item.username===this.state.User)?
                            <Message1>
                                <Sender>
                                    {item.username} :{item.chat}
                                </Sender>
                            </Message1>
                            :
                            <Message2>
                                <Sender>
                                    {item.username} :{item.chat}
                                </Sender>
                            </Message2>}
                        </MessageBox>
                    ))}
                </ChatBox>
                <InputBar>
                    <Input type="text" value={this.state.value} onChange={this.handleKeypress} placeholder={"Enter Message"}/>
                    <ButtonBox>
                        <Button onClick={this.handlechange}>
                            Send
                        </Button>
                    </ButtonBox>
                </InputBar>
            </Container>
        );
    }
}

export default Dashboard;
