import React, { Component } from 'react';
import Message from '../components/Message';
import TextFieldWithSubmit from '../components/TextFieldWithSubmit';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
      user: {}
    }

    this.handleMessageReceipt = this.handleMessageReceipt.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/users/current', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
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
    .then((data) => {
      debugger
      return this.setState({ user: data })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    // debugger
    App.chatChannel = App.cable.subscriptions.create(
      // Info that is sent to the subscribed method
      {
        channel: "ChatChannel",
        chat_id: 1
        // chat_id: this.props.current_user.id
        // currently this is hardcoded
        // If you had router, you could do:
        // chat_id: this.props.params["id"]
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          // Data broadcasted from the chat channel
          console.log(data)
          this.handleMessageReceipt(data)
        }
      }
    );
  }

  handleMessageReceipt(message) {
    this.setState({ messages: this.state.messages.concat(message) })
  }

  handleClearForm() {
    this.setState({ message: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let prepMessage = this.state.message
    let user_info = this.state.user

    // Send info to the receive method on the back end
    App.chatChannel.send({
     message: prepMessage,
     current_user: user_info
    })

    this.handleClearForm();
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    let messages = this.state.messages.map(message => {
      debugger
      return(
        <Message
          key={message.messageId}
          firstname={message.user.firstname}
          message={message.message}
        />
      )
    }, this);

    return(
      <div className='chat-fields'>
        <div className='callout messages' id='chatWindow'>
          {messages}
        </div>
        <div className='input-message'>
          <form onSubmit={this.handleFormSubmit}>
            <TextFieldWithSubmit
              content={this.state.message}
              name='message'
              handlerFunction={this.handleMessageChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ChatContainer;
