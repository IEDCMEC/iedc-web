import React from 'react';
import "../css/filter.css"

const Filter = ({selected,setselected}) => {
  return (
    <div className="filter-buttons">
        <button on>All</button>
        <button >Past</button>
        <button >Upcoming</button>
    </div>
  )
}

export default Filter