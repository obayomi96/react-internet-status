import React from 'react';
import PropTypes from 'prop-types';

const InternetStatus = ({ message, background, textColor, width, height }) => {

  let isOnline = false;

  window.addEventListener('offline', function () {
    isOnline = false;
  });

  window.addEventListener("online", function () {
    isOnline = true;
  });

  return (
    <div
      className='nav'
      data-testid='nav'
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
        height: height || '55px',
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
