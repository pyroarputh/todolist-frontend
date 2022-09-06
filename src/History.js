import React, { useState, useEffect } from 'react';
import HistoryTable from './componenets/HistoryTable';
import HistoryForm from './componenets/HistoryForm';
import HistoryHeader from './componenets/HistoryHeader';

const axios = require('axios');

const History = () => {
  const [history, setHistory] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error2, setError2] = useState("");
  const [loaded2, setLoaded2] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response2 = await axios.get('http://localhost:9000/task-log')
        setHistory(response2.data);
        setLoaded2(true);
      } catch (error) {
        setError2(error.message);
      } finally {
        setLoaded2(true);
      }
    })();
  }, []);

  return (
    <div className="container">
      <HistoryHeader/>
      <HistoryTable
        data={history}
      ></HistoryTable>
    </div>
  );
  }

export default History