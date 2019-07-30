import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {

  return(
    <div class="callout">
      <Link to={`/users/${props.id}`}>View Profile</Link>
      <img src={props.profile} alt="profile picture" width="150" height="150"/>
      <p>{props.firstname} {props.lastname} - {props.age}, {props.sex}</p>
      <p>{props.city}, {props.state}</p>
    </div>
  )
}

export default UserTile
