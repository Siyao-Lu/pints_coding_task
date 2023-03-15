require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const stock = require('./stock');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(stock);

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});

module.exports = app;


