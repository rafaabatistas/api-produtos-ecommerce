const knex = require('./database');
const express = require('express');

const app = express();

app.get('/produtos', (req, res) =>
    knex('produtos').then((results) => res.json(results))
)

app.listen(process.env.PORT || 3000);