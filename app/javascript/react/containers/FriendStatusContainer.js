import React from 'react'
import SendFriendRequest from '../components/SendFriendRequest'
import FriendshipPending from '../components/FriendshipPending'
import RespondFriendRequest from '../components/RespondFriendRequest'
import ChatContainer from './ChatContainer'

class FriendStatusContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
    }
    this.handleSendFriendRequest = this.handleSendFriendRequest.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/friendships', {
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
      return this.setState({ currentUser: responseBody.users[0].current_user })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleSendFriendRequest(event) {
    event.preventDefault()
    let formPayload = {
      user_id: this.state.currentUser.id,
      friend_id: this.props.userId
    }
    this.props.sendFriendRequest(formPayload)
  }

  render() {
    let visibleContainer;

    if (this.props.friendships.length == 0 || this.props.friendships[0].friend_id != this.props.userId) {
      visibleContainer = <SendFriendRequest
                          handlerFunction={this.handleSendFriendRequest} />
    } else if (this.props.friendships[0].friend_id == this.props.userId) {
      visibleContainer = <ChatContainer
                          userFirstname={this.props.userFirstname}
                          currentUser={this.state.currentUser.id} />
    }

    return(
      <div>
        {visibleContainer}
      </div>
    )
  }
}

export default FriendStatusContainer
