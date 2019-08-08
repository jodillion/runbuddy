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
    this.checkFriendshipStatus = this.checkFriendshipStatus.bind(this)
  }

  componentDidMount() {
    debugger

  }

  handleSendFriendRequest(event) {
    event.preventDefault()
    let formPayload = {
      user_id: this.state.currentUser.id,
      friend_id: this.props.userId
    }
    this.props.sendFriendRequest(formPayload)
  }

  checkFriendshipStatus(){
    debugger
    let friendships = []
    let currentUserId = 0

    if(this.props.friendships.length != 0) {
      debugger
      currentUserId = this.props.currentUserId
      friendships = this.props.friendships

      friendships.forEach((friendship) => {
        debugger
        if(currentUserId == friendship.user_id || currentUserId == friendship.friend_id)
          this.setState({ friendshipStatus: true })
      })
    }
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
            currentUser={this.props.currentUserId} />
      }

    return(
      <div>
        {visibleContainer}
      </div>
    )
  }
}

export default FriendStatusContainer
