import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 3rem;
  color: white;
  text-align: center;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 1.6rem;
  text-align: center;
  width: 400px;
  color: white;
  margin: 40px auto;
`;

const Subs = styled.div`
  margin: 40px auto;
  color: white;
  width: 400px;
`;

const Email = styled.input`
  width: 290px;
  height: 45px;
  text-align: center;
`;

const Button = styled.button`
  width: 105px;
  height: 50px;
  color: white;
  background-color: #24d89b;
  // outline: none;
  // shadow: none;
  border: none;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 32% 17% 17% 17% 17%;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 35px;
  color: white;

  div {
    margin: 5px 0;
  }

  div:first-child {
    font-weight: bold;
    margin: 20px 0;
  }
`;

const Div1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const Div2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
`;

const Div3 = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
`;

const Div4 = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
`;

const Div5 = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  background: url(${props => props.bg});
  background-size: cover;
  height: 100%;
  width: 100%;
  
  padding-top: 300px;
`;

const HomeFooter = () => {
  const bgfooter = require("../Images/footer.jpg");

  return (
    <Background bg={bgfooter}>
      <Title>Get In Touch</Title>
      <Desc>
        lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </Desc>
      <Subs>
        <Email type="email" placeholder="Enter Your Email" />
        <Button>Subscribe</Button>
      </Subs>
      <Container>
        <Div1>Edu-Link</Div1>
        <Div2>
          <div>About</div>
          <div>Our Story</div>
          <div>Blog</div>
          <div>Partners</div>
        </Div2>
        <Div3>
          <div>Support</div>
          <div>Learn</div>
          <div>Pricing</div>
          <div>Terms and Support</div>
        </Div3>
        <Div4>
          <div>Products</div>
          <div>Our Lesson</div>
          <div>Our Test</div>
          <div>Subject</div>
        </Div4>
        <Div5>
          <div>Contact</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Map Location</div>
        </Div5>
      </Container>
    </Background>
  );
};

export default HomeFooter;
