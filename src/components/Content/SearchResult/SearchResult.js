import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';

class SearchResult extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.searchResult}>
        <span className={styles.title}>{this.props.title}</span>
        <span className={styles.subtitle}>{this.props.subtitle}</span>
      </div>
    );
  }
}

export default SearchResult;
