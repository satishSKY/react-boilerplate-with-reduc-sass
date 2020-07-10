import PropTypes from 'prop-types';
import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Layout from 'shared/Layouts';
import NoAuthRoute from './NoAuthRoute';

const Login = lazy(() => import('app/pages/Login'));
const Student = lazy(() => import('app/pages/Student'));const NotFound = lazy(() => import('app/pages/NotFound'));


const PublicRoute = () => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Switch>
        <NoAuthRoute
          exact={true}
          path="/login"
          isAuthenticated={loggedIn}
          layout={Layout}
          component={Login}
        />
        <NoAuthRoute
          exact={true}
          path="/student"
          isAuthenticated={loggedIn}
          layout={Layout}
          component={Student}
        />
<NoAuthRoute
          exact={true}
          path="*"
          isAuthenticated={loggedIn}
          layout={Layout}
          component={NotFound}
        />
      </Switch>
    </>
  );
};

PublicRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PublicRoute;
