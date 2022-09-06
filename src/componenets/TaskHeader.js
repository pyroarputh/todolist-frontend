import React from 'react';

function TaskHeader() {
    return (
      <div className='container'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">Home</li>
            <li className="breadcrumb-item" aria-current="page"><a href="/history">History</a></li>
          </ol>
        </nav>
        <h2 className="text-center">Todolist</h2>
      </div>
    );
  }
  
  export default TaskHeader