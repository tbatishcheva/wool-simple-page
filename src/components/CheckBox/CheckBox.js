import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';

class CheckBox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    onChange: null,
  };

  render() {
    return (
      <label className={styles.container}>
        <input className={styles.checkboxInput} type="checkbox" checked={this.props.checked} onChange={this.props.onChange} />
        <div className={styles.controlIndicator} />
      </label>
    );
  }
}

export default CheckBox;
