// @ts-ignore
/* eslint-disable */
import React from 'react';

import Link from 'next/link';

export default function Clickable({ children, href, ...props }) {
  return (
    <Link href={href || ''}>
      <div {...props} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </Link>
  );
}
