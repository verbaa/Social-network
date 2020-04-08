import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <a href="/" className={s.header__logo}>
            <img src='https://www.vhv.rs/file/max/22/222442_png-logo.png' />
        </a>

    </header>
}

export default Header;