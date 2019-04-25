import React, { Component } from 'react';
import styles from './UserInfo.module.css';
import avatar from './avatar.png';

class UserInfo extends Component {
  render() {
    return (
      <div className={styles.userInfo}>
        <a href="https://google.com" className={styles.signOut}>SIGN OUT</a>
        <a href="https://google.com"><img className={styles.img} src={avatar} alt="Avatar" /></a>
      </div>
    );
  }
}

export default UserInfo;
