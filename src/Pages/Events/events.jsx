import React from 'react'
import Eventcard from '../../components/Eventcard';
import "./events.css"
import { useState, useEffect } from 'react';

const Events = () => {

  const [selected, setselected] = useState(0);
  const [filtered, setfiltered] = useState([]);
  useEffect(() => {

    if (selected === 0)
      setfiltered(events);
    else if (selected === 1)
      setfiltered(events.filter((event) => event.Status === "Finished"));
    else
      setfiltered(events.filter((event) => event.Status === "Upcoming"));


  }, [selected]);

  console.log(selected);
  console.log(filtered);

  const events = [
    {
      "Name": "C++ Bootcamp",
      "Date": "19-20-2022",
      "Status": "Finished",
      "Domain": "Online"
    },
    {
      "Name": "Python Bootcamp",
      "Date": "19-20-2022",
      "Status": "Upcoming",
      "Domain": "Online"
    },
    {
      "Name": "Webdev Bootcamp",
      "Date": "19-20-2022",
      "Status": "Finished",
      "Domain": "Online"
    },
    {
      "Name": "Hardware Bootcamp",
      "Date": "19-20-2022",
      "Status": "Finished",
      "Domain": "Online"
    },

  ];

  return (
    <div className='event-container'>
      <div className="filter-buttons">
        <button onClick={() => { setselected(0) }} className={selected === 0 ? "active" : ""}>All</button>
        <button onClick={() => { setselected(1) }} className={selected === 1 ? "active" : ""}>Past</button>
        <button onClick={() => { setselected(2) }} className={selected === 2 ? "active" : ""}>Upcoming</button>
      </div>
      <div className="events">
        <div className="card-container">
          {
            filtered.map((events) => {
              return <Eventcard Name={events.Name} Date={events.Date} Status={events.Status} Domain={events.Domain} />
            })
          }
        </div>
      </div>
    </div>


  )
}

export default Events