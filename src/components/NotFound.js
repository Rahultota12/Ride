
import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const NotFound = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-1">404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </CSSTransition>
  );
};

export default NotFound;