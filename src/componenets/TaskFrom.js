import React, { useState } from 'react';

const axios = require('axios');

const TaskForm = ({input, setInput, tasks, setTasks}) => {
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
      setInput(event.target.value);
  }

  const onFormSubmit = (event) => {
      event.preventDefault();
      
      (async () => {
        try {
          const response = await axios.post('http://localhost:9000/tasks', {
            "name": input
          });
          setTasks([ ...tasks, response.data ]);
        } catch (error) {
          setError(error.message);
        }
      })();

      setInput("");
  }

    return (
      <div className="conatiner mb-3">
        <form className='row' onSubmit={onFormSubmit}>
          <div className="col-sm-9" >
            <input
                className="form-control"
                type="text"
                placeholder="add your task..."
                value={input}
                required
                onChange={onInputChanged}
            /> 
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary" type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default TaskForm