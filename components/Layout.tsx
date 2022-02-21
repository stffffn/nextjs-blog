import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto md:max-w-3xl p-4">
      <Header />
      <main className="flex-1 my-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
