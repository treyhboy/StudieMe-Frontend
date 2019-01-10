import React, { Component } from 'react';
import styled from 'styled-components';
import {Route,Switch,Link,Redirect} from 'react-router-dom';

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const Container = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
align-items: center;
height: 100%;
width: 90%;
`
const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 8%;
width: 100%;
color: #24D89B;
font-size: 3rem;
font-family: 'Lato', sans-serif;
font-weight: lighter;
`
const BlogContainer = styled.div`
display: flex;
justify-content: center;
flex-flow: column;
align-items: center;
height: 92%;
width: 100%;
`
const BlogRow = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 50%;
width: 100%;
`

const Blog= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: column;
background-color: white;
border-radius: 1rem;
height: 90%;
width: 28%;
`
const BlogImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 22rem;
width: 100%;
`
const Image = styled.img`
height: ${(props=>props.h)};
border-radius: 1rem 1rem 0px 0px;
width: ${(props=>props.w)};
`
const BlogName = styled.div`
display: flex;
flex-flow: column;
align-items: center;
height: 30%;
width: 100%;
`
const BlogHeading = styled.div`
display: flex;
align-items: center;
color: gray;
font-size: 2.5rem;
font-family: 'Lato', sans-serif;
font-weight: lighter;
height: 60%;
width: 95%;
`
const BlogAuther = styled.div`
display: flex;
align-items: center;
color: #24D89B;
font-size: 1.5rem;
font-family: 'Lato', sans-serif;
font-weight: lighter;
height: 30%;
width: 95%;
`



class BlogSelection extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(<Content>
            <Container>
                <Header>
                    Lectures
                </Header>
                <BlogContainer>
                    <BlogRow>
                        <Blog>
                            <Link to={"/Blog/1"}>
                                <BlogImage>
                                    <Image src={require('./1200px-Node.js_logo.svg.png')} h={"15rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    Thinking out with Node Js
                                </BlogHeading>
                                <BlogAuther>
                                    Stephin Grinder
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                        <Blog>
                            <Link to={"/Blog/2"}>
                                <BlogImage>
                                    <Image src={require('./1200px-ISO_C++_Logo.svg.png')} h={"13rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    C++ the easy way
                                </BlogHeading>
                                <BlogAuther>
                                    Kevin Spencer
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                        <Blog>
                            <Link to={"/Blogs"}>
                                <BlogImage>
                                    <Image src={require('./nodejs-601628d09d.png')} h={"20rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    Dive deep into Javascript
                                </BlogHeading>
                                <BlogAuther>
                                    Stephin Grinder
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                    </BlogRow>
                    <BlogRow>
                        <Blog>
                            <Link to={"/Blogs"}>
                                <BlogImage>
                                    <Image src={require('./1_qzvOZZgHq_allGVXq8RWeQ.png')} h={"12rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    Advanced Data science with R
                                </BlogHeading>
                                <BlogAuther>
                                    Alen Pogart
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                        <Blog>
                            <Link to={"/Blogs"}>
                                <BlogImage>
                                    <Image src={require('./java8_logo.png')} h={"18rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    Advanced Java Programming
                                </BlogHeading>
                                <BlogAuther>
                                    Richard parker
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                        <Blog>
                            <Link to={"/Blogs"}>
                                <BlogImage>
                                    <Image src={require('./python-7be70baaac.png')} h={"20rem"} w={"auto"}/>
                                </BlogImage>
                            </Link>
                            <BlogName>
                                <BlogHeading>
                                    Python Programming Basics
                                </BlogHeading>
                                <BlogAuther>
                                    Megan Foukner
                                </BlogAuther>
                            </BlogName>
                        </Blog>
                    </BlogRow>
                </BlogContainer>
            </Container>

        </Content>)
    }
}

export default BlogSelection;