import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';
import Indicator from './Indicator/Indicator';

class MenuItem extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  state = {
    isSubmenuOpened: true,
  };

  handleClick = () => {
    this.setState({
      isSubmenuOpened: !this.state.isSubmenuOpened,
    });
  };

  render() {
    return (
      <div className={styles.menuItem}>
        <div onClick={this.handleClick} className={styles.wrapper}>
          <Indicator isActive />
          <span className={styles.title}>{this.props.title}</span>
        </div>
        {this.state.isSubmenuOpened && this.props.children}
      </div>
    );
  }
}

export default MenuItem;
