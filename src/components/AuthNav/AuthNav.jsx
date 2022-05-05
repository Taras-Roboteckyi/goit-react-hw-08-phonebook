import React from 'react';
//import { NavLink } from 'react-router-dom';
import { Link } from './AuthNav.styled';

/* const styles = {
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
}; */

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" /* style={styles.link} */ /* activeStyle={styles.activeLink} */>
        Register
      </Link>
      <Link to="/login" /* style={styles.link} */ /* activeStyle={styles.activeLink} */>Login</Link>
    </div>
  );
}
