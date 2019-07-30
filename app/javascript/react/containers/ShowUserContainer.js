import React from 'react'
import ShowUserTile from '../components/ShowUserTile'

class ShowUserContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenUser: ""
    }
  }

  componentDidMount(){
    fetch('https://www.strava.com/api/v3/athletes/{id}/stats?page=&per_page=&KEY=strava_access_token')
    .then(response => response.json())
    .then(response => {
      this.setState({ chosenUser: response })
    })
  }

  render(){
    return(
      <div>
        <ShowUserTile
          firstname={this.state.chosenUser.firstname}
        />
      </div>
    )
  }
}

export default ShowUserContainer;
