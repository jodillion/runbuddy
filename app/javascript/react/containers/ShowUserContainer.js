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
    fetch(`/api/v1/user/${this.props.match.params.id}`)
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
