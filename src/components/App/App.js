import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
