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
    this.setState({ messages: this.props.messages})

    App.chatChannel = App.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        chat_id: this.props.userId
      },
      {
        connected: () => console.log("ChatChannel connected"),
        disconnected: () => console.log("ChatChannel disconnected"),
        received: data => {
          console.log(data)
          this.handleMessageReceipt(data)
        }
      }
    )
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
    let user_info = {id: this.props.currentUser.id, firstname: this.props.currentUser.firstname}

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
      return(
        <Message
          key={message.id}
          firstname={message.user.firstname}
          message={message.body}
        />
      )
    })

    return(
      <div className='chat-box'>
        <h4 className="chat-header">Chat with {this.props.userFirstname} now:</h4>
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
