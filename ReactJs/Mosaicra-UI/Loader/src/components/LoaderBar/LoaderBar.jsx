import React from 'react';
import './LoaderBar.css';

const Loader = ({ color = '#fff' }) => {
  const loaderStyle = {
    '--loader-border-color': color,
  }

  return <div className="loader" style={loaderStyle}></div>;
};

export default Loader;
