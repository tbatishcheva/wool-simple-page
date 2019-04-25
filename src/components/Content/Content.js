import React, { Component } from 'react';
// import image from 'https://pixfeeds.com/images/needlework/knitting/1280-496861438-knitted-winter-clothes.jpg';
import image from './wool.jpg';
import styles from './Content.module.css';
import SearchResult from './SearchResult/SearchResult';
import LoadMore from './LoadMore/LoadMore';
import Products from './Products/Products';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Shane Park',
          price: 20,
          image,
          isChecked: false,
        },
        {
          id: 2,
          name: 'Shane Park',
          price: 50,
          image,
          isChecked: true,
        },
        {
          id: 3,
          name: 'Shane Park',
          price: 190,
          image,
          isChecked: true,
        },
        {
          id: 4,
          name: 'Shane Park',
          price: 1020,
          image,
          isChecked: false,
        },
      ],
    };
  }

  handleIsCheckedChanges = (id) => {
    const product = this.state.products.find(p => p.id === id);
    product.isChecked = !product.isChecked;

    this.setState({ products: [...this.state.products] });
  };

  render() {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <SearchResult title="(15) Park place" subtitle="458 Wool fabric cloths found" />
          <LoadMore />
        </div>
        <Products products={this.state.products} onIsCheckedChange={this.handleIsCheckedChanges} />
      </div>
    );
  }
}

export default Content;
