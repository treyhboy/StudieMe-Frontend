import React, {Component} from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
const socket = io.connect('http://localhost:1234');


const Container = styled.div`
display: flex;
flex-flow: column;
height: 82rem;
width: 100vw;
background-color: red;
`
const Header = styled.div`
display: flex;
height: 8rem;
width: 100vw;
background-color: yellow;
`

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={value:"",User:props.User,data:""};
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handlechange = this.handlechange.bind(this);
        this.changestate = this.changestate.bind(this);
        // chat();


    }
    componentDidMount(){
        let k = "no data";
        socket.on('RECEIVE_MESSAGE', (data) =>{
            console.log(data);
            this.changestate(data)
            k = data;
        });
        console.log("kk")

    }
    changestate(data)
    {
        this.setState({
            data:data
        })
        console.log("in change state");
        console.log(this.state.data);
    }
    handleKeypress(event)
    {
        var key = event.target.value;
        // var k = String.fromCharCode((96 <= key && key <= 105) ? key-48 : key)
        this.setState(prevState => ({
            value:key
        }));
    }
    handlechange(event)
    {
        // let k = event.target.value;
        // this.setState({
        //     value: k
        // });
        console.log("changeee")
        console.log(this.state.User);
        socket.emit('some',{v:this.state.value,User:this.state.User},function () {
            console.log('in this')
        });
    }

    render() {
        return (<Container>
                <Header>
                </Header>
                <input type="text" value={this.state.value} onChange={this.handleKeypress}/>
                <button onClick={this.handlechange}>ok</button>
            </Container>
        );
    }
}

export default Dashboard;
