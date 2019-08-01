import React from 'react'

const ShowUserTile = props => {
  let location

  if(props.city && props.state){
    location = `${props.city}, ${props.state}`
  }

  return(
      <div>
        <div className="show-athlete-profile-tile">
          <img className="photo" src={props.profile} alt="profile picture" width="300" height="300"/>
          <div className="athlete-info">
            <h6>{props.firstname} {props.lastname} - {props.age} {props.sex}</h6>
            <h6>{location}</h6>
          </div>
        </div>
      </div>
  )
}

export default ShowUserTile
