// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Endpoint to roll a dice
app.get('/roll', (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1; // Rolls a 6-sided dice
    res.json({ roll });
});

app.listen(port, () => {
    console.log(`Dice Roller API listening at http://localhost:${port}`);
});
