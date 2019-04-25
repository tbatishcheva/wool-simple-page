import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SubMenu.module.css';

class SubMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={styles.subMenu}>
        {this.props.children}
      </div>
    );
  }
}

export default SubMenu;
