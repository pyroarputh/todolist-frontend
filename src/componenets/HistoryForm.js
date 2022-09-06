import React, { useState } from 'react';

const axios = require('axios');

const HistoryForm = ({ setHistory, onFilteredChanged}) => {
    const [error, setError] = useState(null);

    const hanleClearHistory = () => {
        (async () => {
            try {
              const response = await axios.delete('http://localhost:9000/task-log', {});
              setHistory([]);
            } catch (error) {
              setError(error.message);
            }
        })();
    };

    return (
      <div className='container'>
        <form className="row g-3">
            <div className="col-md-9 col-sm-12">
                <input 
                    type="text"
                    placeholder="search..."
                    className="form-control"
                    onChange={onFilteredChanged}/>
            </div>
            <div className="col-md-3 col-sm-12">
                <button
                    className="btn btn-danger"
                    onClick={() => hanleClearHistory()}>clear history</button>
            </div>
        </form>
      </div>
    );
  }
  
export default HistoryForm