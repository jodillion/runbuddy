import React from 'react';
import { Link } from 'react-router-dom'
import UserTile from '../components/UserTile'
import SearchBar from '../components/SearchBar'

class UsersContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('api/v1/users', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
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
      return this.setState({ users: responseBody.users })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let users = this.state.users.map(user => {
      return(
        <UserTile
          key={user.id}
          id={user.id}
          profile={user.profile}
          firstname={user.firstname}
          lastname={user.lastname}
          sex={user.sex}
          city={user.city}
          state={user.state}
        />
      )
    })

    return(
      <div>
        <h4 className="athlete-profile-header">FIND FOR YOUR IDEAL RUNNING PARTNER HERE</h4>
        <SearchBar />
        <div className="athlete-profile">
          {users}
        </div>
      </div>

    )
  }
}

export default UsersContainer
