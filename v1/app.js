const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send('BITCH EWHERE MY MONEY');
});



app.listen(3000, () => console.log('App listening on port 3000! I needs work.'));