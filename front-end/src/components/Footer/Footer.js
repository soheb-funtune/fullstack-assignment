import React from "react";
import styled from "styled-components";
import { MdOutlineBrightness7 } from "react-icons/md";

const Footer = () => {
  return (
    <ContainerWrapper>
      <Container>
        <LogoDiv>
          <h4>Abstract</h4>
          <LinksDiv>
            <small>Branche</small>
          </LinksDiv>
        </LogoDiv>
        <LogoDiv>
          <h4>Resources</h4>
          <LinksDiv>
            <small>Blog</small>
            <small>Help Center</small>
            <small>Releas Notes</small>
            <small>Status</small>
          </LinksDiv>
        </LogoDiv>
        <LogoDiv>
          <h4>Community</h4>
          <LinksDiv>
            <small>Twitter</small>
            <small>LinkedIn</small>
            <small>Facebook</small>
            <small>Drible</small>
            <small>Brodcast</small>
          </LinksDiv>
        </LogoDiv>
        <LogoDiv>
          <h4>Company</h4>
          <LinksDiv>
            <small>About Us</small>
            <small>Careers</small>
            <small>Legal</small>
          </LinksDiv>
          <h5>Contact Us</h5>
          <LinksDiv>
            <small>info@abstract.com</small>
          </LinksDiv>
        </LogoDiv>
      </Container>
      <CopyDiv>
        <div>
          <MdOutlineBrightness7 />
          <small>© Copyright 2022. </small>
          <small>Abstract Studio Design.Inc. </small>
          <small>All rights reserved. </small>
        </div>
      </CopyDiv>
    </ContainerWrapper>
  );
};

export default Footer;

const ContainerWrapper = styled.div`
  margin: auto;
  padding: 20px 30px 50px;
  text-align: left;
  background: black;
  color: white;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* gap: 15px; */

  @media (max-width: 767px) {
    gap: 15px;
    grid-template-columns: 1fr;
  }
`;

const LogoDiv = styled.div`
  align-items: center;
  h4,
  h5 {
    margin: 7px 0px;
  }
  small {
    margin: 0px;
    font-size: 12px;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
`;
const CopyDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;
  gap: 2px;
  svg {
    font-size: 25px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  small {
    font-size: 10px;
  }
`;
