import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {

  return(
    <div class="grid x">
      <div class="athlete-profile small-3 cell">
        <img src={user.profile} alt="profile picture" width="250" height="250"/>
        <p>{user.firstname} {user.lastname} - {user.sex}</p>
        <p>{user.city}, {user.state}</p>
      </div>
    </div>
  )
}

export default UserTile
