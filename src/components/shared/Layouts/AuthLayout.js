import PropTypes from 'prop-types';
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <main className="auth__container min-vh-100">
      <div className="auth__box container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-5 col-sm-12">
            <div className="auth__content">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
