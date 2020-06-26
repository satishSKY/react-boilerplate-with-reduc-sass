import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { noop } from 'utils/utils';

const Button = ({ name, value, disabled, children, onClick, className }) => {
  const btnStyle = classnames({ className: !!className });
  return (
    <button
      name={name}
      disabled={disabled}
      onClick={onClick}
      className={btnStyle}
    >
      {value}
      {children}
    </button>
  );
};

Button.defaultProps = {
  name: '',
  children: '',
  value: '',
  disabled: false,
  onClick: noop,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
