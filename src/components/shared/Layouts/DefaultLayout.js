import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from 'shared/Footer';
import Header from 'shared/Header';

const DefaultLayout = ({ children, pageClass }) => {
  const pageStyle = classnames('main-page', pageClass);
  return (
    <>
      <Header />
      <main className={pageStyle}>{children}</main>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  pageClass: PropTypes.string,
  children: PropTypes.array.isRequired,
};

export default DefaultLayout;
