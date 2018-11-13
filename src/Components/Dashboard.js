import React, {Component} from 'react';
import styled from 'styled-components';

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
    }

    render() {
        return (<Container>
                <Header>
                </Header>
            </Container>
        );
    }
}

export default Dashboard;
