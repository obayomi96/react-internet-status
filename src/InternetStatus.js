import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InternetStatus = ({ message, background, textColor, width, height }) => {
  const [isOnline, setIsOnline] = useState(true);

  window.addEventListener('offline', function () {
    setIsOnline(false);
  });

  window.addEventListener('online', function () {
    setIsOnline(true);
  });

  return (
    <div
      style={{
        display: `${isOnline ? 'none' : 'block'}`,
        textAlign: 'center',
        position: 'fixed',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0',
        zIndex: '100',
        backgroundColor: background || 'red',
        color: textColor || 'white',
        width: width || '100%',
        height: height || '50px',
      }}
    >
      <p>{message || 'Your device is not connected to the internet!'}</p>
    </div>
  );
};

InternetStatus.propTypes = {
  message: PropTypes.string,
  background: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default InternetStatus;
