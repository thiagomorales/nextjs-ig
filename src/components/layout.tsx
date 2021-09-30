import React from 'react';

import Header from './header.js';

export default function Layout({ children, user }: { children: any; user: unknown }) {
  return (
    <div className="container">
      <Header user={user} />
      <div className="homepage-container flex flex-col justify-center items-center">{children}</div>
    </div>
  );
}
