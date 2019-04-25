import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import Label, { COLOR_GREEN } from '../../../Label/Label';
import CheckBox from '../../../CheckBox/CheckBox';

class Product extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onIsCheckedChange: PropTypes.func,
  };

  handleIsCheckedChange = () => {
    this.props.onIsCheckedChange(this.props.product.id);
  };

  render() {
    return (
      <div className={styles.product}>
        <img className={styles.image} src={this.props.product.image} alt="Wool" />
        <div className={styles.productInfo}>
          <div className={styles.namePrice}>
            <div className={styles.name}>{this.props.product.name}</div>
            <div className={styles.price}>
              {this.props.product.price}
              $
            </div>
          </div>
          <CheckBox checked={this.props.product.isChecked} onChange={this.handleIsCheckedChange} />
        </div>
        <div className={styles.label}>
          <Label color={COLOR_GREEN} isLarge>9 Days</Label>
        </div>
      </div>
    );
  }
}

export default Product;
