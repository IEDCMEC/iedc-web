import React from 'react'
import '../css/eventcard.css'

const Eventcard = (props) => {
  return (
    <div className='eventcard'>
      <img src="" alt='img'/>
      <div className="details">
      <span className='Event-name'>{props.Name}</span>
      <span className='Event-date'>{props.Date}</span>
      <span className='Event-status'>{props.Status}</span>
      <button className = "">Register</button>
      </div>
      <span className='Event-domain'>{props.Domain}</span>
    </div>
  )
}

export default Eventcard