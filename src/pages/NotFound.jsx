import React from 'react';

import notFoundImg from '../assets/images/not_found.png';

import '../styles/NotFound.scss';

function NotFound() {
  return (
    <div data-testid="page-not-found" className="page" id="not-found-page">
      <img src={ notFoundImg } alt="Página não encontrada" />
    </div>
  );
}

export default NotFound;
