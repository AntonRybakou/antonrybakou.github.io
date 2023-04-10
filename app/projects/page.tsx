import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'Projects',
};

const Page: React.FC = () => {
  return (
    <main>
      <h1>PROJECTS PAGE</h1>
      <Link href={'/'}>Go back</Link>
    </main>
  );
};

export default Page;
