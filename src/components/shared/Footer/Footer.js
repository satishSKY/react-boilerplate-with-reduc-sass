import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({ copyrightText, children }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright">
          {children}
          {copyrightText
            ? copyrightText
            : `react-boilerplate-with-redux-sass Copyright@${new Date().getFullYear()}`}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
  copyrightText: PropTypes.string,
};

export default Footer;
