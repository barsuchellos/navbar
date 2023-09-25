import React from 'react';
import NavBar from '../NavBar/NavBar'
import Button from '../Button/Button';
import logo from '../../images/Logo.svg'
import styles from './header.module.scss'
import navBarItems from "../../data/navBarMenuItems.json"

const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar navBarItems={navBarItems}/>
            <img src={logo} alt="logo" />
            <div className={styles.buttonBox}>
                <Button text='Login' />
                <Button text='Sign up' />
            </div>
        </header>
    );
};

export default Header;