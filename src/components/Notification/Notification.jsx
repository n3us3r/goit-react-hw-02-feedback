import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ text }) => {
  return text && <p>{text}</p>;
};

Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;
