const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

app.use(cors());

app.get('/temperature/:id', async (req, res) => {
  const response = await fetch(`https://temperature-sensor-service.herokuapp.com/sensor/${req.params.id}`);
  res.send(await response.json());
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
