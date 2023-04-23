import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'Contacts',
};

const Page: React.FC = () => {
  return (
    <>
      <h1>CONTACTS PAGE</h1>
      <Link href={'/'} className="text-blue-600">
        Go back
      </Link>
    </>
  );
};

export default Page;
