import React from 'react'
import Card from './Card'

const MemberCollection = ({title,members}) => {
   return (
      <div>
         <div className="container section">
            <div className="row">
               <div className="title center ">
                  <h1>{title}</h1>
               </div>
               <div className="members">
                  {members.map(({id,name,designation})=>(
                     <Card key={id} name={name} designation={designation}/>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default MemberCollection
