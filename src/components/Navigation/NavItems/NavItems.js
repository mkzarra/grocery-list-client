import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" exact>Grocery Helper</NavItem>
    {!props.isAuthenticated ? <NavItem link="/sign-up">Sign Up</NavItem> : <NavItem link="/logout">Logout</NavItem>}
    {!props.isAuthenticated ? <NavItem link="/sign-in">Sign In</NavItem> : null}
  </ul>
);

export default navItems;