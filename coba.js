const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
  res.send('This is the Contact page.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
