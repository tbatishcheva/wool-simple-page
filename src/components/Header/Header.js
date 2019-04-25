import React, { Component } from 'react';
import styles from './Header.module.css';
import MainMenu from './MainMenu/MainMenu';
import Cart from './Cart/Cart';
import UserInfo from './UserInfo/UserInfo';
import Logo from './Logo/Logo';

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logoMenuWrapper}>
          <Logo />
          <MainMenu />
        </div>
        <div className={styles.cartUserInfoWrapper}>
          <Cart />
          <UserInfo />
        </div>
      </div>
    );
  }
}

export default Header;
