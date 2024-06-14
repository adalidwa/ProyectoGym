import React from 'react';

const BotAvatar = (props) => {
  return (
    <img
      src={props.avatarUrl}
      alt="Bot Avatar"
      style={{
        width: '42px',
        height: '40px',
        borderRadius: '50%',
        
      }}
    />
  );
};

export default BotAvatar;
