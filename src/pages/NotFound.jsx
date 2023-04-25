import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1 className='clasNf'>404 NOT FOUND</h1>
      <button className='btnNf' onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default NotFound;
