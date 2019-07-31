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
    fetch(`api/v1/users/${this.props.match.params.id}`)
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
      return this.setState({ chosenUser: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
