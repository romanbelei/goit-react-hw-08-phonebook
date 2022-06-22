import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './NavigationModule.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact="true"
      style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      HOME
    </NavLink>

    <NavLink
      to="/contacts"
      exact="true"
      style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      CONTACTS
    </NavLink>
  </nav>
);

export default Navigation;
