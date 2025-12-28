import React from 'react';
// import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ijp-bg">
      {/* <Header /> */}
      <main className="px-8 py-6">{children}</main>
    </div>
  );
};

export default Layout;