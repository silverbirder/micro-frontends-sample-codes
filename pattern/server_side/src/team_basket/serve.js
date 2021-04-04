const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;
const inspireHost = process.env.INSPIRE_HOST || 'team-inspire-app:4000';

app.get('/',  async (req, res) => {
  const inspire = await (await fetch(`http://${inspireHost}`)).text();
  res.send(`Team Basket. inspire ${inspire}`);
});

app.listen(port, () => {
  console.log(`Team Basket app listening at http://localhost:${port}`)
});
