import React from 'react'
import SendFriendRequest from '../components/SendFriendRequest'
import FriendshipPending from '../components/FriendshipPending'
import RespondFriendRequest from '../components/RespondFriendRequest'
import ChatContainer from './ChatContainer'

class FriendStatusContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friendshipStatus: false
    }
    this.handleSendFriendRequest = this.handleSendFriendRequest.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    let friendships = []
    let userId = 0

    if(nextProps.friendships.length != 0) {
      userId = nextProps.userId
      friendships = nextProps.friendships

      friendships.forEach((friendship) => {
        if(userId == friendship.friend_id)
          this.setState({ friendshipStatus: true })
      })
    }
  }

  handleSendFriendRequest(event) {
    event.preventDefault()
    debugger
    let formPayload = {
      user_id: this.props.currentUserId,
      friend_id: this.props.userId
    }
    this.props.sendFriendRequest(formPayload)
  }

  render() {
    let visibleContainer;

      if (this.props.friendships.length == 0 || this.state.friendshipStatus == false) {
        visibleContainer =
          <SendFriendRequest
            handlerFunction={this.handleSendFriendRequest} />
      } else if (this.state.friendshipStatus == true) {
        visibleContainer =
          <ChatContainer
            userFirstname={this.props.userFirstname}
            userId={this.props.userId}
            currentUser={this.props.currentUser} />
      }

    return(
      <div>
        {visibleContainer}
      </div>
    )
  }
}

export default FriendStatusContainer
