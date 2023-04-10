import React from "react";

import Link from "next/link";

const Page: React.FC = () => {
  return (
    <main>
      <h1>INDEX PAGE</h1>
      <div className='flex flex-col'>
        <Link href={'/projects'}>Go to projects</Link>
        <Link href={'/contacts'}>Go to contacts</Link>
      </div>
    </main>
  )
}

export default Page;
