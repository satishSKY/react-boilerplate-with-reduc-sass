import { authConstants } from 'app/redux/constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import Button from 'shared/Button';

const { LOGOUT_SUCCESS } = authConstants;

const Navigation = () => {
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
      <div className="container">
        <NavbarBrand href="/">My Icon</NavbarBrand>
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
        <Button onClick={handleLogout} className="btn btn-outline-light btn-sm">
          Logout
        </Button>
      </div>
    </Navbar>
  );
};

export default Navigation;
