import React from 'react';

import Link from 'next/link';

const Header = () => (
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
);

export default Header;
