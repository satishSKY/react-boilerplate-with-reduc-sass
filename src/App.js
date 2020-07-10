import PrivateRoute from 'app/routes/PrivateRoute';
import PublicRoute from 'app/routes/PublicRoute';
import PropTypes from 'prop-types';
import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

const Scroll = (props) => {
  React.useEffect(() => {

    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const ScrollToTop = withRouter(Scroll);

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Redirect exact from="/" to="/student" />
        <Route path="/app" component={PrivateRoute} />
        <Route path="/" component={PublicRoute} />
        <Route path="/student" component={PublicRoute} /><Route path="*" exact={true} component={PublicRoute} />

      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);

export default App;
