import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MainMenuItem.module.css';

class MainMenuItem extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  }


  render() {
    return (
      <div className={`${this.props.isActive ? styles.isActive : styles.notActive} ${styles.mainMenuItem}`}>
        <a href="https://google.com">
          <img className={styles.img} src={this.props.icon} alt="Icon" />
          <span className={`${this.props.isActive ? styles.isActiveTitle : styles.notActiveTitle}`}>{this.props.title}</span>
        </a>
        <div className={styles.label}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainMenuItem;
