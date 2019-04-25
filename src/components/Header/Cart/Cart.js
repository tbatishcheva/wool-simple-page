import React, { Component } from 'react';
import styles from './Cart.module.css';
import cart from './cart.svg';
import Label, {COLOR_GREEN, COLOR_RED} from '../../Label/Label';

class Cart extends Component {
  render() {
    return (
      <div className={styles.cart}>
        <a href="https://google.com"><img src={cart} alt="Cart" /></a>
        <div className={styles.label}>
          <Label color={COLOR_GREEN} isLarge={false}>3</Label>
        </div>
      </div>
    );
  }
}

export default Cart;
