import React from 'react'
import './TeamPage.styles.css'


const Card = ({name, designation,imageUrl}) => {
   return (
      <div>
         <div className="col s5 m3 ">
            <div className="card">
               <div className="card-image">
                  <img src={imageUrl} alt={name} style={{ "height": '25em' }} />
                  <span className="card-title">{name}</span>
               </div>
               <div className="card-content center">
                  <p>{designation}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card

