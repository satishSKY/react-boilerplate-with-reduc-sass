import PropTypes from 'prop-types';
import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import DefaultLayout from 'shared/Layouts/DefaultLayout';
import AuthRoute from './AuthRoute';

const Home = lazy(() => import('app/pages/Home'));
const About = lazy(() => import('app/pages/AboutUs'));

const PrivateRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Switch>
        <AuthRoute
          exact
          path={`${match.path}/home`}
          isAuthenticated={loggedIn}
          layout={DefaultLayout}
          component={Home}
        />
        <AuthRoute
          exact
          path={`${match.path}/about`}
          isAuthenticated={loggedIn}
          layout={DefaultLayout}
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
