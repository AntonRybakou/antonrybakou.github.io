import React from 'react';

import Link from 'next/link';

const Header: React.FC = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link href={'/'}>About</Link>
        </li>
        <li>
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact me</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
