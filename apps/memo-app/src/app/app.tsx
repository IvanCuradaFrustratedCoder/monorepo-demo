import React from 'react';
import styles from './app.module.css';
import logo_memo from '../assets/img/logo_memo.png';

import { AppHeader, Navigation } from '@monorepo-demo/memo-app/layouts';

export function App() {
    return (
        <div className={styles.app}>
            <h1>Welcome to MemoApp</h1>
        </div>
    );
}

export default App;
