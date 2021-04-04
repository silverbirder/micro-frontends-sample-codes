const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',  async (req, res) => {
  const inspire = await (await fetch('http://team-inspire-app:4000')).text();
  res.send(`Team Basket. inspire ${inspire}`);
});

app.listen(port, () => {
  console.log(`Team Basket app listening at http://localhost:${port}`)
});
