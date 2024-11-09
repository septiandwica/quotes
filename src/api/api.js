const express = require('express');
const fs = require('fs');

const router = express.Router();

// Baca data quotes dari quotes.json
const quotes = JSON.parse(fs.readFileSync('src/api/quotes.json', 'utf8'));

// Endpoint untuk mendapatkan quote acak berdasarkan kategori
router.get('/quotes/:category', (req, res) => {
  const { category } = req.params;
  if (quotes[category]) {
    const randomIndex = Math.floor(Math.random() * quotes[category].length);
    res.json({ quote: quotes[category][randomIndex] });
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

module.exports = router;
