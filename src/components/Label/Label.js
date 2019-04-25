import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Label.module.css';

export const COLOR_GREEN = 'green';
export const COLOR_RED = 'red';

const colorClassMap = {
  [COLOR_RED]: styles.red,
  [COLOR_GREEN]: styles.green,
};

class Label extends Component {
  static propTypes = {
    children: PropTypes.node,
    isLarge: PropTypes.bool,
    color: PropTypes.oneOf([COLOR_GREEN, COLOR_RED]),
  };

  static defaultProps = {
    children: null,
    isLarge: false,
    color: COLOR_RED,
  };

  render() {
    // let colorClass = null;
    // if (this.props.color === COLOR_GREEN) {
    //   colorClass = styles.green;
    // } else if (this.props.color === COLOR_RED) {
    //   colorClass = styles.red;
    // }

    const colorClass = colorClassMap[this.props.color];

    return (
      <div className={`${this.props.isLarge ? styles.isLarge : styles.isSmall} ${styles.label} ${colorClass}`}>
        <a href="https://google.com">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default Label;
