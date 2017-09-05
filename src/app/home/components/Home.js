// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        Home - <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
