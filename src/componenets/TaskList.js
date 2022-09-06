import React, { useState } from 'react';
const axios = require('axios');

function TaskList({tasks, setTasks}) {
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    const onDelete = ({_id}) => {
        (async () => {
            try {
              const response = await axios.delete('http://localhost:9000/tasks/' + _id, {});
              setTasks(tasks.filter((task) => task._id !== _id));
            } catch (error) {
              setError(error.message);
            }
        })();
        setTasks(tasks.filter((task) => task._id !== _id));
    };

    return (
      <div className='container'>
        <div className="row">
            { tasks.map((task) => {
                return (
                    <div className="col-md-12 alert alert-primary alert-dismissible fade show" key={task._id}>
                        {task.name}
                        <button type="button" className="btn-close" aria-label="Delete" onClick={() => onDelete(task)}></button>
                    </div>
                )
            })}
        </div>
      </div>
    );
  }
  
  export default TaskList