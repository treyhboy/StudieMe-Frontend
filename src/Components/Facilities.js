import React from "react";
import styled from "styled-components";

import Facility from "./Facility";

const FacilityCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height:100%;
  width: 100%;
  //background-color: #2e6da4;
`;

const FacilityHead = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: lighter;
  font-family: 'Lato', sans-serif;
  color: gray;
`;

const Hr = styled.hr`
  text-align: center;
  width: 120px;
  margin-bottom: 60px;
`;

const Facilities = () => {
  const pic1 = require("../Images/pic1.svg");
  const pic2 = require("../Images/pic2.svg");
  const pic3 = require("../Images/pic3.svg");
  const pic4 = require("../Images/pic4.svg");
  const pic5 = require("../Images/pic5.svg");
  const pic6 = require("../Images/pic6.svg");

  return (
    <>
      <FacilityHead>Our Facilities</FacilityHead>
      <Hr />
    <FacilityCont>
      <Facility
          img={pic1}
          title="Regular Updates"
          content="Our portal is designed to continiously bring new and regularly updated content for better results "
          active={false}
      />
      <Facility
          img={pic2}
          title="AI Powered"
          content="Machine Learning algorithms are accurately predicting colleges best suiting your profile."
          active={true}
      />
      <Facility
          img={pic3}
          title="20000+ Colleges"
          content="We bring you colleges from all over the world."
          active={false}
      />
      <Facility
          img={pic4}
          title="No Hidden T&C"
          content="No complicated procedures and hidden terms and conditions.."
          active={false}
      />
      <Facility
          img={pic5}
          title="Free Access"
          content="It is a free online portal made by students for students."
          active={false}
      />
      <Facility
          img={pic6}
          title="Customized Experience"
          content="We care about you and your choices and not about the general notion."
          active={false}
      />
    </FacilityCont>
    </>
  );
};

export default Facilities;
