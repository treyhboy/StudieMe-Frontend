import React from "react";
import styled from "styled-components";

import Facility from "./Facility";

const FacilityCont = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
`;

const FacilityHead = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: lighter;
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
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={false}
        />
        <Facility
          img={pic2}
          title="AI Powered"
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={true}
        />
        <Facility
          img={pic3}
          title="200000+ Colleges"
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={false}
        />
        <Facility
          img={pic4}
          title="Student Membership"
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={false}
        />
        <Facility
          img={pic5}
          title="Lifetime Access"
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={false}
        />
        <Facility
          img={pic6}
          title="Live Support"
          content="wana study abroad we hhere use our ai powered recommndation
              system.wana study abroad we hhere use our ai powered recommndation
              system."
          active={false}
        />
      </FacilityCont>
    </>
  );
};

export default Facilities;
