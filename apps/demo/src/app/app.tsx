import React from 'react';
import styles from './app.module.css';
import { AppHeader, Title, Subtitle, Container, Navigation } from '@monorepo-demo/memo-app/layouts';
import logo_memo from '../assets/img/logo_memo.png';
import logo_memo_dark from '../assets/img/logo_memo_dark.png';
export function App() {

    const myntLogo = 'https://www.mynt.xyz/wp-content/themes/mynt/imgs/mynt-logo-color.png';
    const logoAlt = 'Company Logo';

    const userInfo: any = {
        uid: 11233445,
        displayName: 'Ivan Curada',
        photoURL: 'https://lh3.googleusercontent.com/a-/AOh14GgmL1l2KTREYgsiuC9n3WJJP75yIEUhiVopajZx=s96-c'
    };

    const links = [
        {
            label: 'Home',
            link: '/home',
        },
        {
            label: 'Memos',
            link: '/memos',
        },
        {
            label: 'For Approval',
            link: '/approvals',
        },
        {
            label: 'Watchers',
            link: '/watch',
        }
    ]

    const theme = "admin";

    return (
        <div className='w-full m-0 p-0'>
            <AppHeader theme={theme} logo={theme === 'admin' ? logo_memo_dark : logo_memo} logoAlt={logoAlt} user={userInfo}/>
            <Navigation theme="admin" items={links} />
            <Container>
                <Title>Welcome, user!</Title>
                <Subtitle>Here are the memos waiting for you</Subtitle>
            </Container>
        </div>
    );
}

export default App;
