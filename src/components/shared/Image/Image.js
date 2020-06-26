import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, name, style, alt, ...rest }) => {
  return (
    <figure>
      <img
        src={src}
        name={name}
        className={style}
        alt={alt || name}
        {...rest}
      ></img>
    </figure>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
