import React from 'react';

import styles from './app.module.css';
import { AppHeader, Navigation } from '@monorepo-demo/memo-app/layouts';
import logo_memo_dark from '../assets/img/logo_memo_dark.png';

export function App() {
  // user object
  const user = {
    displayName: 'Ivan Curada',
    photoURL: 'https://lh3.googleusercontent.com/a-/AOh14GgmL1l2KTREYgsiuC9n3WJJP75yIEUhiVopajZx=s96-c'
  };

  const navitems = [
    {
        label: 'Dashboard',
        link: '/dashboard'
    },
    {
        label: 'My Memos',
        link: '/memos'
    },
    {
        label: 'For my approval',
        link: '/approvals'
    },
    {
        label: 'Memos to watch',
        link: '/watch'
    },
];


  return (
    <div className={styles.app}>
      <AppHeader theme="admin" logo={logo_memo_dark} logoAlt="Logo" user={user}/>
      <Navigation theme="admin" items={navitems} />
      <h1>Welcome to MemoApp Admin</h1>
    </div>
  );
}

export default App;
