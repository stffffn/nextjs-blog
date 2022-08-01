import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto p-4 min-h-screen md:max-w-3xl">
      <Header />
      <main className="flex-1 my-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
