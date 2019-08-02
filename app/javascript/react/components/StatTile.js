import React from 'react'

const StatTile = props => {

  return(
    <div>
      <div className="show-athlete-stats-tile">
        <h6>Last 4 Weeks</h6>
        <div>
          <p>Achievements: {props.achievement_count}</p>
          <p>Average Distance/Wk: {parseInt(props.recent_distance/1.609344/(1e3))} mi.</p>
          <p>Average Runs/Wk: {props.recent_count}</p>
          <p>Average Time/Wk: {parseInt(props.recent_time/3600)} hours</p>
          <p>Average Elevation/Wk: {parseInt(props.recent_elevation/0.0003048/(1e3))} ft.</p>
        </div>
        <h6>Year to Date</h6>
        <div>
          <p>Distance: {parseInt(props.ytd_distance/1.609344/(1e3))} mi.</p>
          <p>Runs: {props.ytd_count}</p>
          <p>Time: {parseInt(props.ytd_time/3600)} hours</p>
          <p>Elevation Gain: {parseInt(props.ytd_elevation/0.0003048/(1e3))} ft.</p>
        </div>
        <h6>All Time</h6>
        <div>
          <p>Distance: {parseInt(props.all_distance/1.609344/(1e3))} mi.</p>
          <p>Runs: {props.all_count}</p>
          <p>Time: {parseInt(props.all_time/3600)} hours</p>
          <p>Elevation Gain: {parseInt(props.all_elevation/0.0003048/(1e3))} ft.</p>
        </div>
      </div>
    </div>
  )
}

export default StatTile
