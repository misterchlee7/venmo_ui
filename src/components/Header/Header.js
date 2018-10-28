import React from 'react';
import styles from './Header.module.css';
import logo from "../../resources/img/venmo_logo_blue.png";

const Header = (props) => {
  return (
    <div id={styles.header}>
        <a href="/">
          <img
            id={styles.logo}
            src={logo} />
        </a>
        <ul>
          <li><a href="#" className={styles.links}>How Venmo Works</a></li>
          <li><a href="#" className={styles.links}>Business</a></li>
          <li><a href="#" className={styles.links}>Card</a></li>
          <li><a href="#" className={styles.links}>Security</a></li>
          <li><a href="#" className={styles.links}>Contact Us</a></li>
        </ul>
        <a href="#" className={styles.links}>Sign In</a>
    </div>
  );
};

export default Header;