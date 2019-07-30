import React from 'react';
import { Link } from 'react-router-dom'
import UserTile from '../components/UserTile'

class UsersContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://www.strava.com/api/v3/athletes/{id}/stats?page=&per_page=')
    .then((response) => {
      binding.pry
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((responseBody) => {
      return this.setState({ users: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let users = this.state.users.map(user => {
      return(
        <UserTile
          key={user.id}
          id={user.id}
          firstname={user.firstname}
          lastname={user.lastname}
          age={user.age}
          sex={user.sex}
          city={user.city}
          state={user.state}
        />
      )
    })

    return(
      <div className="callout">
        <div className="wrapper">
          {users}
        </div>
      </div>
    )
  }
}

export default UsersContainer
