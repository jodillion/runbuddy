import React from 'react'
import { Link } from 'react-router-dom'

const UserTile = props => {

  return(
    <div className="grid x">
      <div className="athlete-profile small-3 cell">
        <img src={props.profile} alt="profile picture" width="250" height="250"/>
        <p>{props.firstname} {props.lastname} - {props.sex}</p>
        <p>{props.city}, {props.state}</p>
      </div>
    </div>
  )
}

export default UserTile
