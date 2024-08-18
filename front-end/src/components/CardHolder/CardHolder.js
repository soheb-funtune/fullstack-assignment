import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const CardHolder = () => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/cards");
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container>
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </Container>
  );
};

export default CardHolder;

const Container = styled.div`
  min-height: 60vh;
  max-width: 767px;
  margin: auto;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
