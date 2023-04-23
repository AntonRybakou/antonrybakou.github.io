import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'Projects',
};

const Page: React.FC = () => {
  return (
    <>
      <h1>PROJECTS PAGE</h1>
      <Link href={'/'} className="text-blue-600">
        Go back
      </Link>
    </>
  );
};

export default Page;
