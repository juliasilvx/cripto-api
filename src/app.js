const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const criptoRouter = require('./routes/criptoRouter');

app.use(express.json())

app.use('/', index);

app.use('/api/cripto', criptoRouter);
module.exports = app;