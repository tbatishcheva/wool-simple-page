import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Products.module.css';
import Product from './Product/Product';

class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    onIsCheckedChange: PropTypes.func,
  };

  render() {
    return (
      <div className={styles.products}>
        {this.props.products.map(product => <Product product={product} onIsCheckedChange={this.props.onIsCheckedChange} />)}
      </div>
    );
  }
}

export default Products;
