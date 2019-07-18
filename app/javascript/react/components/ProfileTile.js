import React from 'react'
import { Link } from 'react-router-dom'

const ProfileTile = props => {

  return(
    <div>
      <h5><Link to={`/profile/${props.id}`}>{props.first_name}</Link></h5>
    </div>
  )
}

export default ProfileTile
