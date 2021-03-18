import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

export function App() {
  return (
    <div className={styles.app}>
      <h1>Welcome to MemoApp</h1>
    </div>
  );
}

export default App;
