import React from 'react';
import PropTypes from 'prop-types';

const online = window.navigator.onLine;
console.log('Browser is online ==>', online);

const IsOnline = ({message, bgColor, txColor, wd, ht}) => {

  return (
    <div style={{
      display: `${online ? 'none' : 'block'}`,
      textAlign: 'center',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      zIndex: '100',
      background: bgColor,
      color: txColor,
      width: wd,
      height: ht,
    }}>
      <p>{message}</p>
    </div>
  )
};

IsOnline.defaultProps = {
  message: 'Your device is not connected to the internet!',
  bgColor: 'red',
  txColor: 'white',
  wd: '100%',
  ht: '50px',
};

IsOnline.propTypes = {
  message: PropTypes.string,
  bgColor: PropTypes.string,
  txColor: PropTypes.string,
  wd: PropTypes.string,
  ht: PropTypes.string,
};


export default IsOnline;
