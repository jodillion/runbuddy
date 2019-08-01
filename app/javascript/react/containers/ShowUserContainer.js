import React from 'react'
import StatTile from '../components/StatTile'
import ShowUserTile from '../components/ShowUserTile'

class ShowUserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recent_run_totals: {},
      all_run_totals: {},
      ytd_run_totals: {},
      user: {}
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
      return this.setState({
        recent_run_totals: responseBody.strava_info.recent_run_totals,
        all_run_totals: responseBody.strava_info.all_run_totals,
        ytd_run_totals: responseBody.strava_info.ytd_run_totals,
        user: responseBody.user
       })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div className="show-page">
      <h4>{this.state.user.firstname} {this.state.user.lastname}'s Running Statistics:</h4>
        <div className="show-page-info grid-x grid-padding-x">
          <div className="grid-y">
            <div className="show-athlete-profile cell small-4">
              <ShowUserTile
                key={this.state.user.id}
                id={this.state.user.id}
                profile={this.state.user.profile}
                firstname={this.state.user.firstname}
                lastname={this.state.user.lastname}
                sex={this.state.user.sex}
                city={this.state.user.city}
                state={this.state.user.state}
              />
            </div>
            <a href="/users" className="button yellow back cell">BACK</a>
          </div>
          <div className="show-athlete-stats cell small-4">
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
        </div>
      </div>
    )
  }
}

export default ShowUserContainer;
