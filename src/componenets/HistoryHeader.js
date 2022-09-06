import React from 'react';

function HistoryHeader() {
    return (
      <div className='container'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">History</li>
          </ol>
        </nav>
        <h2 className="text-center">History Table</h2>
      </div>
    );
  }
  
  export default HistoryHeader