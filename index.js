const express = require('express');

const app = express();
const bodyParser = require('body-parser');


const cors = require('cors');
app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) => {
    res.json('App is fine');
  });
  
app.listen(8080, () => {
    console.log('Server started on port 8080');
  });
  module.exports = app;  