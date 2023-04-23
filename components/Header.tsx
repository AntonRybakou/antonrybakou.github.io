import React from 'react';

import Link from 'next/link';

const Header: React.FC = () => (
  <header>
    <nav className="border">
      <ul>
        <li className="text-blue-600">
          <Link href={'/'}>About</Link>
        </li>
        <li className="text-blue-600">
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li className="text-blue-600">
          <Link href={'/contacts'}>Contact me</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
