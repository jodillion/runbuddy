import React from 'react';

const SendFriendRequest = props => {

  return (
    <div className="chat-cover">
      <h4 className="chat-header">Click below to send  a match request to be able to chat</h4>
      <p onClick={props.handlerFunction} className="button yellow add-friend cell">SEND MATCH REQUEST</p>
    </div>
  );
}

export default SendFriendRequest;
