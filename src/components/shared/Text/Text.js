import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import style from './Text.module.scss';

/**
 * Name: Text
 * Desc: Render Text
 * @param {string} text
 * @param {node} children
 * @param {string} className
 * @param {string} color
 * @param {string} fontWeight
 * @param {string} fontSize
 */
const Text = ({
  text,
  children,
  className,
  color,
  fontWeight,
  fontSize,
  ...rest
}) => {
  const textStyle = classnames(
    style.textWrapper,
    { className: !!className },
    {
      [style[`${color}Color`]]: !!color,
      [style[`${fontWeight}FontWeight`]]: !!fontWeight,
      [style[fontSize]]: !!fontSize,
    },
  );
  console.log('textStyle', textStyle, color);

  return (
    <span className={textStyle} {...rest}>
      {text}
      {children}
    </span>
  );
};

Text.defaultProps = {
  color: 'dark',
  fontWeight: 'regular',
  fontSize: 'medium',
  className: '',
  children: '',
  text: '',
};

Text.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'dark', 'lightGrey', 'danger']),
  fontWeight: PropTypes.oneOf(['light', 'regular', 'semiBold', 'bold']),
  fontSize: PropTypes.oneOf([
    'xxSmall',
    'xSmall',
    'small',
    'regular',
    'medium',
    'large',
    'mLarge',
    'xLarge',
    'xxLarge',
  ]),
};

export default Text;
