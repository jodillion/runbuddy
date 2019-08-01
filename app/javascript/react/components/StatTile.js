import React from 'react'

const StatTile = props => {

  return(
    <div>
      <p>Recent miles run: {parseInt(props.recent_distance/1.609344/(1e3))} miles</p>
      <p>Year to date miles run: {parseInt(props.ytd_distance/1.609344/(1e3))} miles</p>
      <p>All time miles run: {parseInt(props.all_distance/1.609344/(1e3))} miles</p>
    </div>
  )
}

export default StatTile
