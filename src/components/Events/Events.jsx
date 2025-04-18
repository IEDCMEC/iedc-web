import React, { useState, useEffect } from 'react';
import "./events.css";
import { getImageSize } from 'react-image-size';
import event1 from '../../Assets/events/event1.jpg';
import event2 from "../../Assets/events/event2.jpg";
import event3 from "../../Assets/events/event3.jpg";
import event4 from "../../Assets/events/event4.jpg";
import event5 from "../../Assets/events/event5.jpg";
import event6 from "../../Assets/events/event6.jpg";

const events = [
  {
    date: 'September 30, 2024',
    image: event1,
    description: 'Insightful talk session with Kenz EC, Founder and CEO of Milliondots on effective strategies for wealth creation and personalized financial planning.',
  },
  {
    date: 'April 1, 2024',
    image: event2,
    description: 'This interactive session brought together like-minded individuals for engaging discussions, fueled by coffee, to brainstorm innovative ideas.',
  },
  {
    date: 'January 31, 2024',
    image: event3,
    description: 'Exclusive in-person talk session featuring Marc Lamoureux, Co-Founder & CEO of Veriday.',
  },
  {
    date: 'December 8, 2023',
    image: event5,
    description: 'SANDWICH CRAFT, a unique event where participants combined marketing and culinary skills to create a business.',
  },
  {
    date: 'July 8, 2022',
    image: event6,
    description: 'Special Interest Group (SIG) discussion as part of the Unravel series, focusing on Tesla\'s growth, business strategies, and technical advancements.',
  },
  {
    date: 'July 3rd, 9th and 10th 2022',
    image: event4,
    description: 'Hands-on 3-day training session in Arduino and robotics, where participants learned to build an Otto robot.',
  },
];

function Events() {
 return (
    <div>
      <h1>Events</h1>
      <p>Stay tuned for official announcements about our upcoming events, which will be shared right here.</p>
      <h2>Past Events</h2>
      <div className='card-container'>
        {events.map((e,index) => (
          <div key={index} className='card'>
            <img src={e.image} alt=""/>
            <div className='card-content'>
              <h4 className='date'>{e.date}</h4>
              <p>{e.description}</p>
              <button >Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;