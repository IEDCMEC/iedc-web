import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import MemberCollection from './MemberCollection'
import MembersList from './MembersList'

const TeamPage = () => {

   const [membersList, setMembersList] = useState( MembersList )

   return (
      <div className='team-page' >
         <Navbar />
         {membersList.map(({id,...otherProps})=>(
            <MemberCollection key={id} {...otherProps} />
         ))}
      </div>
   )
}

export default TeamPage
