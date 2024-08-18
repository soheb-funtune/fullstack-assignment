import React from "react";
import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";

const SearchBox = () => {
  return (
    <Container>
      <HeadingH1>How I can help you ?</HeadingH1>
      <InputDiv>
        <InputField type="text" placeholder="Search" />
        <GoArrowRight />
      </InputDiv>
    </Container>
  );
};

export default SearchBox;

const Container = styled.div`
  min-height: 40vh;
  background-color: #dadbf0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingH1 = styled.h1``;

const InputDiv = styled.div`
  min-width: 30%;
  position: relative;

  & svg {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
`;
const InputField = styled.input`
  padding: 10px 20px;
  min-width: 350px;
  outline: none;
  @media screen and (max-width: 768px) {
    min-width: auto;
  }
`;
