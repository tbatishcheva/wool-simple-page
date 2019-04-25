import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Indicator.module.css';

class Indicator extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    isActive: false,
  };

  render() {
    return (
      <span className={styles.indicator}>
        <span className={styles.symbol}>
          {this.props.isActive ? '-' : '+'}
        </span>
      </span>
    );
  }
}

export default Indicator;
