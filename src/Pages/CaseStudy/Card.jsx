import React from 'react'



const Card = ({ image, title, link }) => {
   return (
      <div class="col s12 m6 l3 ">
         <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="container" style={{ 'padding-top': '70px' }} id="mobcard">
               <div className="card case_study_card">
                  <div className="card-image">
                     <img src={image} style={{ "height": '15em' }} />
                  </div>
                  <div className="card-content case_study_content center" >
                     <p className="title">{title}</p>
                  </div>
               </div>
            </div>
         </a>
      </div>
   )
}

export default Card;

