import React from 'react';

import loadingIcon from '../assets/images/loading.gif';

import '../styles/Loading.scss';

function Loading() {
  return (
    <div id="loading-container">
      <img src={ loadingIcon } alt="Icone de carregamento" />
    </div>
  );
}

export default Loading;
