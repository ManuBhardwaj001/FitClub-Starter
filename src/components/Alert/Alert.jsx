import React, { useEffect } from 'react';
import './Alert.css'; // Add the necessary styles

const Alert = ({ type, message, onClose }) => {
  // Automatically remove the alert after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, [onClose]);

  return (
    <div className={`alert ${type}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>&times;</button>
    </div>
  );
};

export default Alert;
