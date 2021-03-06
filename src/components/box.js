// @ts-ignore
/* eslint-disable */
import React from 'react';

export default function Box({ border = false, children, ...props }) {
  const customClass = `${props.className} box`;
  return (
    <div
      {...props}
      className={customClass}
      style={{
        border: border && '1px solid #dbdbdb',
        borderRadius: border && 3,
        backgroundColor: border && 'white',
      }}
    >
      {children}
    </div>
  );
}
