import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MenuCheckBox.module.css';

class MenuCheckBox extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  handleCheck = () => {
    const { isChecked } = this.state;
    this.setState(
      {
        isChecked: !isChecked,
      },
    );
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

export default MenuCheckBox;
