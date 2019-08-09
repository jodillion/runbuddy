import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserTile from './UserTile'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchString: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: this.state.searchString
    })
    fetch('/api/v1/users/search.json', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ users: body })
    })
  }

  render() {
    let users;
    
      let searchUsers = this.state.users.map(user => {
        debugger
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

      let indexUsers = this.props.indexUsers.map(user => {
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

    if (this.state.users.length != 0) {
      users = searchUsers
    } else if (this.state.users.length == 0){
      users = indexUsers
    }

    return(
      <div>
        <form className="search" onSubmit={this.handleSubmit}>
          <div className="grid-x">
            <input className="large-7 cell" type='text' name='searchString' placeholder='Search' value={this.state.searchString} onChange={this.handleChange} />
            <input className="large-2 button yellow cell" type='submit' value='Submit' />
          </div>
        </form>
        <div className="search-results">
          {users}
        </div>
      </div>
    )
  }
}

export default SearchBar;
