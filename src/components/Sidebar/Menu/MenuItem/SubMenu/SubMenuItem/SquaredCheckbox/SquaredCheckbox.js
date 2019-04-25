import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SquaredCheckbox.module.css';

class SquaredCheckbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
  };

  render() {
    return (
      <label className={styles.container}>
        <input className={styles.checkboxInput} type="checkbox" checked={this.props.checked} />
        <span className={styles.controlIndicator} />
      </label>
    );
  }
}

export default SquaredCheckbox;
