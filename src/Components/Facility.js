import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  width: 350px;
  height: 250px;
  ${props =>
    props.active &&
    css`
      box-shadow: 0px 0px 7px 3px gray;
    `}
  text-align: center;
  margin: 25px 40px;
  transition: all 0.5s;
`;

const BoxSvg = styled.img`
  height: 4.5rem;
  width: auto;
  margin-top: 25px;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-top: 15px;
`;

const Body = styled.div`
  font-size: 1.6rem;
  margin: 10px 30px;
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
