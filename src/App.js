import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import History from './History';
//import { getHistory } from './services/history';
const axios = require('axios');

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:9000/tasks');
        setTasks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Home
            input={input}
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
          ></Home>
        </div>
      </div>
    </div>
  );
}

export default App