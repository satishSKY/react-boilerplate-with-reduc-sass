import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Loader from 'shared/Loader';

const AuthRoute = ({
  component: Component,
  isAuthenticated,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <Suspense fallback={<Loader show />}>
              <Layout>
                <Component {...props} />{' '}
              </Layout>
            </Suspense>
          );
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.object,
  socket: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  layout: PropTypes.func,
  location: PropTypes.object,
};

export default AuthRoute;