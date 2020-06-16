const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.v1(app);

mongoose.connect('mongodb://localhost:27017/testAPI', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) { console.log(`Error de conexión con el servidor... ${err}`); }
  app.listen(port, () => { console.log(`Server Started http://localhost:${port}`); });
});
