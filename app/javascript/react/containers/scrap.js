let visibleContainer;

if(this.props.friendship.length = 0) {
  visibleContainer = <SendFriendRequest
                      handlerFunction={this.handleSendFriendRequest}
                      />
} else if ('friendship active status is false and Im the user who requested friendship' ) {
  visibleContainer = <FriendshipPending />
} else if ('friendship active status is false and Im the user who was requested') {
  visibleContainer = <AcceptFriendRequest />
} else if (this.props.friendship.length != 0) {
  visibleContainer = <ChatContainer
                      currentUser={this.state.currentUser.id}
                      />

handleAcceptRequest(event) {
  event.preventDefault()

}

handlePendingRequest(event) {

}

handleDenyRequest(event) {

}
