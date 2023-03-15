const express = require('express');
const stock_info = express.Router();
const axios = require('axios');

stock_info.get('/api/stock_info', async (req, res) => {
    let stock = req.query.stock;
    // console.log("stock: ", stock);
    const data = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock.toUpperCase()}/quote?token=${process.env.TOKEN}`);
    var context = {
        symbol: data.data.symbol,
        name: data.data.companyName,
        price: "$" + data.data.latestPrice,
        change: "$" + data.data.change,
        percent_change: (data.data.changePercent * 100).toFixed(2) + "%",
    };
    res.json(context);
});


module.exports = stock_info;