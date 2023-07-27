import React, { ReactElement } from 'react';

import './globals.css';

import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata = {
  title: 'Anton Rybakou',
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactElement => {
  return (
    <html lang="en">
      <body className="mx-5">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
