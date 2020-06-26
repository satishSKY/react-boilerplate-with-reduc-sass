import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from 'shared/Footer';
import Header from 'shared/Header';

const Layout = ({ children, pageStyle = '' }) => {
  const layoutStyle = classnames('main-page', pageStyle);
  return (
    <>
      <Header />
      <main className={layoutStyle}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageStyle: PropTypes.string,
};

export default Layout;
