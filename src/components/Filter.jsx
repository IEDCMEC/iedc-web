import React from 'react';
import "../css/filter.css"

const Filter = ({setButton}) => {
  return (
    <div className="filter-buttons">
        <button onClick={setButton(0)}>All</button>
        <button onClick={setButton(1)}>Past</button>
        <button onClick={setButton(2)}>Upcoming</button>
    </div>
  )
}

export default Filter