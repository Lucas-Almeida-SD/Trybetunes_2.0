import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div id="page">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
