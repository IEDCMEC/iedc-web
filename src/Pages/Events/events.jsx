import React from 'react'
import Eventcard from '../../components/Eventcard';
import Filter from '../../components/Filter';
import "./events.css"

const events = () => {

  const events = [
    {
      "Name" : "C++ Bootcamp",
      "Date" : "19-20-2022",
      "Status" : "Finished",
      "Domain" : "Online"
    },
    {
      "Name" : "Python Bootcamp",
      "Date" : "19-20-2022",
      "Status" : "Finished",
      "Domain" : "Online"
    },
    {
      "Name" : "Webdev Bootcamp",
      "Date" : "19-20-2022",
      "Status" : "Finished",
      "Domain" : "Online"
    },
    {
      "Name" : "Hardware Bootcamp",
      "Date" : "19-20-2022",
      "Status" : "Finished",
      "Domain" : "Online"
    },

  ];

  
  // const [filtered, setfiltered] = useState([]) ;
  //  const [button, setButton] = useState(0) ;
  //  useEffect(() => {
  //    first
   
  //    return () => {
  //      second
  //    }
  //  }, [button])
  // console.log(button);
   

  return (
    <div className="events">
      <Filter/>
      <div className="card-container">
     {
      events.map((events) => {
        return <Eventcard Name = {events.Name} Date = {events.Date} Status = "Finished" Domain = "Online"/>
      })
     }
    </div>
    </div>
  )
}

export default events