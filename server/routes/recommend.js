// /routes/recommend.js
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  // Example: Dummy recommendations (replace with real AI/API later)
  const recs = [
    "The Midnight Library by Matt Haig",
    "The Book Thief by Markus Zusak",
    "A Man Called Ove by Fredrik Backman",
  ];

  res.json({ recommendations: recs });
});

export default router;
