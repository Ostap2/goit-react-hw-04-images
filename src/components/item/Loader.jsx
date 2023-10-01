import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MyLoader = () => {
  return (
    <div className="loader">
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default MyLoader;
