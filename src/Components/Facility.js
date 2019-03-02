import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 350px;
  height: 250px;
  text-align:center;
  margin: 25px 40px;
  border-radius: 1rem;
  transition: all 0.5s;
  &:hover{
  box-shadow:1px 1px 10px .5px #C7C6C7;
  }
`;

const BoxSvg = styled.img`
  height: 4.5rem;
  width: auto;
  margin-top: 25px;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-top: 15px;
  font-weight: lighter;
  font-family: 'Lato', sans-serif;
`;

const Body = styled.div`
  font-size: 1.6rem;
  margin: 10px 30px;
    font-weight: lighter;
  text-align: justify;
  color: grey;
`;

const Facility = ({ img, title, content, active }) => {
  return (
    <Box active={active}>
      <BoxSvg src={img} />
      <Title>{title}</Title>
      <Body>{content}</Body>
    </Box>
  );
};

export default Facility;
