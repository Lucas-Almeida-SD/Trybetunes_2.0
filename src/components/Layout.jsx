import React from 'react';
import { Outlet } from 'react-router-dom';
import Proptypes from 'prop-types';
import Header from './Header';

function Layout({ isUserUpdated }) {
  return (
    <div id="page-background">
      <Header isUserUpdated={ isUserUpdated } />
      <Outlet />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  isUserUpdated: Proptypes.bool.isRequired,
};
