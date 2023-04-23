import React, { ReactElement } from 'react';

import './globals.css';

import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Anton Rybakou',
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="mx-5">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
