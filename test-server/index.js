const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/json', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.send(`{"hello": "world"}`);
});

app.listen(port, () => console.log(`Test Server started on port :${port}`));