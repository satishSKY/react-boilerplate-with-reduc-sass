import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ name, style }) => {
  const iconStyle = classnames(style, name);
  return <i className={iconStyle} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
};
