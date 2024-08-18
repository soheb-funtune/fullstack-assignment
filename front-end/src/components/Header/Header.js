import React from "react";
import styled from "styled-components";
import { MdOutlineBrightness7 } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <LeftDiv>
        <LogoDiv>
          <MdOutlineBrightness7 />
          <h4>Abstract</h4>
        </LogoDiv>
        <HelpCenterText>Help Center</HelpCenterText>
      </LeftDiv>
      <RightDiv>
        <StyledButton>Submit a request</StyledButton>
      </RightDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  color: white;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
`;
const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;
const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & svg {
    margin-top: 2px;
  }
`;

const HelpCenterText = styled.h5`
  margin-left: 10px;
  border-left: 1px solid white;
  padding-left: 10px;
  font-weight: 400;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: #46484b;
  color: white;
  border: 0.2px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 7px 10px;
    font-size: 12px;
  }
`;
