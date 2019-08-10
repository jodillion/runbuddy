import React from 'react'

const Message = props => {

  return(
    <p>
      <strong> {props.firstname}: </strong>
      {props.message}
    </p>
  )
}

export default Message;
