import React from 'react';

const Message = ({ firstname, message }) => {
  return(
    <p>
      <strong> {firstname}: </strong>
      {message}
    </p>
  );
};

export default Message;
