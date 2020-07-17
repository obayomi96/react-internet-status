import React, {useState} from 'react';
import PropTypes from 'prop-types';

const InternetStatus = ({message, bgColor, txColor, wd, ht}) => {
  const [isOnline, setIsOnline] = useState(true);

  window.addEventListener('offline', function(){
    setIsOnline(false);
  });

  window.addEventListener('online', function(){
    setIsOnline(true);
  });

  return (
    <div style={{
      display: `${isOnline ? 'none' : 'block'}`,
      textAlign: 'center',
      position: 'fixed',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      zIndex: '100',
      background: bgColor || 'red',
      color: txColor || 'white',
      width: wd || '100%',
      height: ht || '50px',
    }}>
      <p>{message || 'Your device is not connected to the internet!'}</p>
    </div>
  )
};

InternetStatus.propTypes = {
  message: PropTypes.string,
  bgColor: PropTypes.string,
  txColor: PropTypes.string,
  wd: PropTypes.string,
  ht: PropTypes.string,
};

export default InternetStatus;
