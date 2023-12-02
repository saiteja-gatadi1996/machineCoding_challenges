import { Link } from 'react-router-dom';
import React from 'react';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! Navigate to a valid page</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
