import React from 'react'
import ShowProfileTile from '../components/ShowProfileTile'

class ShowProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenProfile: ""
    }
  }

  componentDidMount(){
    fetch(`/api/v1/profiles/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(response => {
      this.setState({ chosenProfile: response })
    })
  }

  render(){
    return(
      <div>
        <ShowProfileTile
          first_name={this.state.chosenProfile.first_name}
          age={this.state.chosenProfile.age}
          zipcode={this.state.chosenProfile.zipcode}
          gender={this.state.chosenProfile.gender}
        />
      </div>
    )
  }
}

export default ShowProfileContainer;
