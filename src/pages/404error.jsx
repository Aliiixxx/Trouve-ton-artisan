import React from 'react';
import NotFoundImage from '../images/404.jpg';

const Error404 = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <img src={NotFoundImage} alt="404image" />
    </div>
  );
};

export default Error404;
