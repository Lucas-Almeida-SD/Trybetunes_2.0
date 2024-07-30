import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

import routes from './utils/routes';
import Layout from './components/Layout';

import './styles/root.scss';

function App() {
  const [isUserUpdated, setIsUserUpdated] = useState(true);

  return (
    <Routes>
      <Route exact path={ routes.login } element={ <Login /> } />
      <Route path="" element={ <Layout isUserUpdated={ isUserUpdated } /> }>
        <Route path={ routes.search } element={ <Search /> } />
        <Route path={ routes.album } element={ <Album /> } />
        <Route path={ routes.favorites } element={ <Favorites /> } />
        <Route path={ routes.profile } element={ <Profile /> } />
        <Route
          path={ routes.profileEdit }
          element={ <ProfileEdit setIsUserUpdated={ setIsUserUpdated } /> }
        />
        <Route path={ routes.notFound } element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
