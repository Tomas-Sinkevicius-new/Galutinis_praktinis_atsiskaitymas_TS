import React from 'react';
import './loader.scss';

function Loader({ show }) {
  if (!show) return null;
  return <div className='loader'></div>;
}

export default Loader;
