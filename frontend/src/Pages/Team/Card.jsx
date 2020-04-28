import React from 'react'

const Card = ({name, designation,imageUrl}) => {
   return (
      <div>
         <div className="col s12 m4">
            <div className="card">
               <div className="card-image circle">
                  <img src={imageUrl} alt={name} />
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

