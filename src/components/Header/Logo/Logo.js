import React, { Component } from 'react';
import styles from './Logo.module.css';
import logo from './logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className={styles.logo}>
        <a href="https://google.com">
          <img src={logo} alt={Logo} />
        </a>
      </div>
    );
  }
}

export default Logo;
