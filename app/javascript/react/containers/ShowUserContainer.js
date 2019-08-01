import React from 'react'
import StatTile from '../components/StatTile'

class ShowUserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recent_run_totals: {},
      all_run_totals: {},
      ytd_run_totals: {}
    }
  }

  componentDidMount(){

    fetch(`/api/v1/users/${this.props.match.params.id}`, { credentials: 'same-origin' })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {
      debugger
      return this.setState({
        recent_run_totals: responseBody.recent_run_totals,
        all_run_totals: responseBody.all_run_totals,
        ytd_run_totals: responseBody.ytd_run_totals
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return(
      <div>
        <h4>Selected athlete running stats:</h4>
        <StatTile
          id={this.state.ytd_run_totals.id}
          recent_distance={this.state.recent_run_totals.distance}
          recent_achievement_count={this.state.recent_run_totals.achievement_count}
          recent_count={this.state.recent_run_totals.count}
          recent_time={this.state.recent_run_totals.elapsed_time}
          recent_elevation={this.state.recent_run_totals.elevation_gain}
          all_distance={this.state.all_run_totals.distance}
          all_count={this.state.all_run_totals.count}
          all_time={this.state.all_run_totals.elapsed_time}
          all_elevation={this.state.all_run_totals.elevation_gain}
          ytd_distance={this.state.ytd_run_totals.distance}
          ytd_count={this.state.ytd_run_totals.count}
          ytd_time={this.state.ytd_run_totals.elapsed_time}
          ytd_elevation={this.state.ytd_run_totals.elevation_gain}
        />
      </div>
    )
  }
}

export default ShowUserContainer;
