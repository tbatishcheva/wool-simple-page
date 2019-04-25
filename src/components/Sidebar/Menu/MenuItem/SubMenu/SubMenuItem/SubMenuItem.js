import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SubMenuItem.module.css';
import SquaredCheckbox from './SquaredCheckbox/SquaredCheckbox';

class SubMenuItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    return (
      <div className={`${styles.submenuItem} ${this.props.isActive ? styles.submenuItemActive : ''}`}>
        <SquaredCheckbox checked={this.props.isActive} />
        <span className={styles.title}>
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default SubMenuItem;
