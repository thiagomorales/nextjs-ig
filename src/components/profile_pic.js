import React from 'react';

import Router from 'next/router';

export default function ProfilePic({ border, href, size, src, username, ...props }) {
  return (
    <span {...props}>
      <img
        alt={`${username}'s profile pic`}
        data-testid="user-avatar"
        draggable="false"
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: size,
          border: border && '2px solid white',
          cursor: 'pointer',
        }}
      />
    </span>
  );
}
