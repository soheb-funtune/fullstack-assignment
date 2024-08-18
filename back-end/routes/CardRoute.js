const express = require("express");
const router = express.Router();
const Card = require("../models/cardModel");

// Create a new card api/cards
router.post("/cards", async (req, res) => {
  const { title, description } = req.body;
  const card = new Card({ title, description });
  try {
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET all cards  api/cards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET api/cards/:title
router.get("/cards/:title", async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
