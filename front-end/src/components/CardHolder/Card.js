import React from "react";
import styled from "styled-components";

const Card = ({ card }) => {
  return (
    <Container>
      <b>{card?.title}</b>
      <p>{card?.description}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background-color: #f4f6f8;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  border: 1px solid #dadbf0;
  height: 150px;

  color: black;
  b {
    border-bottom: 1px solid #dadbf0;
    padding: 10px 20px 5px;
    font-size: 14px;
    margin: 0;
    text-align: left;
  }
  p {
    overflow-y: scroll;
    padding: 10px 20px;
    font-size: 14px;
    margin: 0;
    text-align: left;
  }
`;
