import React from 'react'
import './TeamPage.styles.css'


const Card = ({name, designation,imageUrl}) => {
   return (
      <div class="col s12 m6 l4 ">
         
         <div id="mobcard">
            <div className="card">
               <div className="card-image">
                  <img src={imageUrl} alt={name} style={{"height": '25em'}} />
                  <span className="card-title">{name}</span>
               </div>
               <div className="card-content center">
                  <p className="designation">{designation}</p>
               </div>
            </div>
            </div>
      </div>
   )
}

export default Card

