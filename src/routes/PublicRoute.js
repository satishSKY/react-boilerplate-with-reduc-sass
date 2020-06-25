import PropTypes from 'prop-types';
import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AuthLayout from 'shared/Layouts/AuthLayout';
import NoAuthRoute from './NoAuthRoute';

const Login = lazy(() => import('app/pages/Login'));

const PublicRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Switch>
        <NoAuthRoute
          exact
          path="/login"
          isAuthenticated={loggedIn}
          layout={AuthLayout}
          component={Login}
        />
      </Switch>
    </>
  );
};

PublicRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PublicRoute;
