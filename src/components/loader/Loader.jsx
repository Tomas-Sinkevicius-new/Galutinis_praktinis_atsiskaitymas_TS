import React from 'react';
import './loader.scss';

function Loader({ show, text = 'loading' }) {
  if (!show) return null;
  return (
    <div class='loadingio-spinner-eclipse-j3dlcfhurz'>
      <div class='ldio-5ouw13ev3iw'>
        <div>{text}...</div>
      </div>
    </div>
  );
}

export default Loader;
