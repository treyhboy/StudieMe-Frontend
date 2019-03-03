import React, { Component } from 'react';
import styled from 'styled-components';
import {Route,Link,Redirect} from 'react-router-dom';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 92%;
width: 100%;
`
const Box = styled.div`
display: flex;
flex-flow: column;
height: 85%;
width: 85%;
border-radius: 1rem;
background-color: white;
`
const Row = styled.div`
display: flex;
flex-flow: Row;
height: 80%;
width: 100%;
`
const Sec1 = styled.div`
display: flex;
flex-flow: column;
height: 100%;
width: 25%;
`
const HeadingBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10%;
width: 100%;
`
const Heading = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: 200;
font-size: 2.5rem;
border-bottom: solid #f6f6f6 1px;
color: #24D89B;
height: 75%;
`
const PicBox = styled.div`
display: flex;
//justify-content: center;
align-items: center;
  flex-flow: column;
height: 70%;
margin-top: 3rem;
padding-top: 3%;
width: 100%;
border-right: solid 2px #f6f6f6;
`
const Pic = styled.img`
display: flex;
height: 10rem;
width: auto;
border-radius: 100%;
margin-bottom: 4rem;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 9rem;
  border-radius: 1rem;
  border: solid 1px #24d89b;
  color: white;
  background-color: #24d89b;
  font-size: 1.5rem;
  font-weight: 200;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: #24d89b;
    background-color:white;
  }
`;
const Sec2 = styled.div`
display: flex;
height: 100%;
width: 75%;
`
const SecCol = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
height: 90%;
width: 45%;
margin-left: 5rem;
margin-top: 7%;
`
const SecRow = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
height: 20%;
padding: .8rem;
width: 100%;
`
const Tag = styled.span`
  
  color: #9B9B9B;
  font-size: 1.5rem;
  font-weight: 200;
  transition: 0.5s;
  cursor: pointer;
`;
const Input = styled.div`
  display: flex;
  padding-left: 2rem;
  align-items: center;
  height: 4rem;
  width: ${(props)=>props.width||"20rem"};
  border-radius: 1rem;
  color: #9B9B9B;
  background-color: #f6f6f6;
  font-size: 1.5rem;
  font-weight: 200;
  transition: 0.5s;
  cursor: pointer;
`;
const EndRow = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 20%;
width: 30%;
margin-left: 65%;
margin-right: 5%;
`
const Button2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 11rem;
  border-radius: 1rem;
  color: ${props=>props.color||"#D0021B"};
  background-color: white;
  font-size: 1.5rem;
  font-weight: 200;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    //color: white;
    //text-decoration: underline ;
    // background-color:${props=>props.color||"#D0021B"};
  }
`;


class Feedback extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(
            <Container>
                <Box>college dest selected liked
                    <Row>
                        <Sec1>
                            <HeadingBox>
                                <Heading>
                                    Feedback Form
                                </Heading>
                            </HeadingBox>
                            <PicBox>
                                <Pic src={require('./p.jpg')}/>

                            </PicBox>
                        </Sec1>
                        <Sec2>
                            <SecCol>
                                <SecRow>
                                    <Tag>First Name</Tag>
                                    <Input>
                                        Tarun
                                    </Input>
                                </SecRow>
                                <SecRow >
                                    <Tag>Email</Tag>
                                    <Input width={"30rem"}>
                                        taruntrehen@gmail.com
                                    </Input>
                                </SecRow>
                                <SecRow>
                                    <Tag>College</Tag>
                                    <Input>
                                        New Delhi,India
                                    </Input>
                                </SecRow>
                                <SecRow>
                                    <Tag>Destination</Tag>
                                    <Input width={"27rem"}>
                                        Software and Web Developer
                                    </Input>
                                </SecRow>
                                <SecRow>
                                    <Tag>Selected</Tag>
                                </SecRow>
                            </SecCol>
                            <SecCol>

                                <SecRow>

                                </SecRow>


                                <SecRow>
                                </SecRow>
                            </SecCol>
                        </Sec2>
                    </Row>
                    <EndRow>
                        <Button2 color={"#24d89b"}>
                            Save
                        </Button2>
                        <Button2>
                            Logout
                        </Button2>
                        <Button2>
                            Delete
                        </Button2>
                    </EndRow>
                </Box>
            </Container>)
    }
}

export default Feedback;