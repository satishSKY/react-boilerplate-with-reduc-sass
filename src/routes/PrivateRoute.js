import PropTypes from 'prop-types';
import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Layout from 'shared/Layouts';
import AuthRoute from './AuthRoute';

const Home = lazy(() => import('app/pages/Home'));
const About = lazy(() => import('app/pages/AboutUs'));
const Student = lazy(() => import('app/pages/Student'));

const PrivateRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Switch>
        <AuthRoute
          exact
          path={`${match.path}/home`}
          isAuthenticated={loggedIn}
          layout={Layout}
          component={Home}
        />
        <AuthRoute
          exact
          path={`${match.path}/about`}
          isAuthenticated={loggedIn}
          layout={Layout}
          component={About}
        />
      </Switch>
    </>
  );
};

PrivateRoute.propTypes = {
  match: PropTypes.object,
};

export default PrivateRoute;
