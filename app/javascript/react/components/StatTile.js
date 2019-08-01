import React from 'react'

const StatTile = props => {

  return(
    <div className="athlete-stats">
      <h6>Last 4 Weeks</h6>
      <div>
        <p>Achievements: {props.achievement_count}</p>
        <p>Average Distance/Week: {parseInt(props.recent_distance/1.609344/(1e3))} miles</p>
        <p>Average Runs/Week: {props.recent_count}</p>
        <p>Average Time/Week: {props.recent_time}</p>
        <p>Average Elevation/Week: {props.recent_elevation}</p>
      </div>
      <h6>Year to Date</h6>
      <div>
        <p>Distance: {parseInt(props.ytd_distance/1.609344/(1e3))} miles</p>
        <p>Runs: {props.ytd_count}</p>
        <p>Time: {props.ytd_time}</p>
        <p>Elevation Gain: {props.ytd_elevation}</p>
      </div>
      <h6>All Time</h6>
      <div>
        <p>Distance: {parseInt(props.all_distance/1.609344/(1e3))} miles</p>
        <p>Runs: {props.all_count}</p>
        <p>Time: {props.all_time}</p>
        <p>Elevation Gain: {props.all_elevation}</p>
      </div>
    </div>
  )
}

export default StatTile
