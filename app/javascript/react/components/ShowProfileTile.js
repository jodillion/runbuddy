import React from 'react'

const ShowProfileTile = props => {

  return(
    <div>
      <h1>{props.first_name}</h1>
      <ul>
        <li>{props.gender}</li>
        <li>{props.age}</li>
        <li>{props.zipcode}</li>
      </ul>
    </div>
  )
}

export default ShowProfileTile
