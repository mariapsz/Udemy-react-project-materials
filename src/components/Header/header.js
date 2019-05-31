import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png../../images/logo.png';

const Header = () => {

    const logo = () => {
        return (
            <Link to="/" className={style.logo}>
                <img src='' alt='nba logo'/>
            </Link>
        )
    };

    return (
        <header className={style.header}>
            <div className={style.headerOpt}>
                {logo()}
            </div>
        </header>
    )
};

export default Header;