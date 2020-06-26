import { authConstants } from 'app/redux/constants';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, NavbarBrand } from 'reactstrap';

const { LOGOUT_SUCCESS } = authConstants;

const Navigation = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState();

  const handleLogout = () => {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: false,
    });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="nav" color="secondary" fixed="true" light expand="md">
      <NavbarBrand href="/">My Icon</NavbarBrand>
      <div className="container">
        {loggedIn && (
          <>
            <NavbarToggler onClick={handleToggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" exact to="/app/home">
                    Dashboard
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/app/about">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <Button
              onClick={handleLogout}
              className="btn btn-outline-light btn-sm"
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Navigation;
