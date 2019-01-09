import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const BlogContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 2rem;
height: 90%;
width: 90%;
`

class Blogs extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(<Content>
                <BlogContainer/>
        </Content>)
    }
}

export default Blogs;