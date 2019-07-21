import React from 'react';
import { Link } from 'react-router-dom'
import ProfileTile from '../components/ProfileTile'

class ProfilesContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/profiles')
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
      return this.setState({ profiles: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let profiles = this.state.profiles.map(profile => {
      return(
        <ProfileTile
          key={profile.id}
          id={profile.id}
          first_name={profile.first_name}
        />
      )
    })

    return(
      <div className="callout">
        <h2>"If you want to go far, go together" - African Proverb</h2>
        <div className="wrapper">
          {profiles}
        </div>
      </div>
    )
  }
}

export default ProfilesContainer
