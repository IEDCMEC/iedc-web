import React from 'react'



const Card = ({image,title}) => {
   return (
<div class="col s12 m6 l3 ">
    <div className="container" style={{'padding-top':'70px'}}id="mobcard" > 
      <div className="card ">
         <div className="card-image">
            <img src={image}  style={{ "height": '15em' }} />      
         </div>
         <div className="card-content center" >
            <p className="title">{title}</p>
         </div>
      </div>
   </div>
</div>
   )
}

export default Card

