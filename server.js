const express = require('express');
const app = express();
const port = 3000;

let counter = 0; // Wartość licznika wspólnego dla wszystkich użytkowników

app.use(express.json());

// Pobieranie wartości licznika
app.get('/counter', (req, res) => {
    res.json({ count: counter });
});

// Aktualizowanie wartości licznika
app.post('/counter', (req, res) => {
    const { value } = req.body;
    counter += value;
    res.json({ count: counter });
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});
