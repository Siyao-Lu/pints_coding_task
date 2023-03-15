import { useState, useEffect } from 'react';
import StatisticsWidget from './widget';
import axios from 'axios';
import { StockTypes } from './data';

const stocks = ['aapl', 'nflx', 'goog', 'amzn', 'tsla']; // static list of stocks

const App = () => {
  const [data, setData] = useState<StockTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var list = [];
        // sequential requests since data set is small, could have used Promise.all for parallel performance and dynamic stock list
        for (const stock of stocks) {
          const res = await axios.get(`/api/stock_info?stock=${stock}`);
          list.push(res.data);
        }
        setData(list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();;
  }, []);

  return (
    <>
      {data && data.map((stock) =>
        <StatisticsWidget info={stock} />
      )}
    </>
  );
};

export default App;