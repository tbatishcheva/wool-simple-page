import React, { Component } from 'react';
import styles from './LoadMore.module.css';

class LoadMore extends Component {
  render() {
    return (
      <div className={styles.loadMore}>
        <a>LOAD MORE</a>
      </div>
    );
  }
}

export default LoadMore;
