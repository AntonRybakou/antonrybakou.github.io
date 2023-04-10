import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'Contacts',
};

const Page: React.FC = () => {
  return (
    <main>
      <h1>CONTACTS PAGE</h1>
      <Link href={'/'}>Go back</Link>
    </main>
  );
};

export default Page;
