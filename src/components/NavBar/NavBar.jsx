import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss'

const NavBar = ({navBarItems}) => {

    const elements = navBarItems.map(({id , link , text})=> {
        return (
            <li key={id}>
                <Link to={link}>{text}</Link>
            </li>
        )
    })

    return (
        <div className={styles.navLinks}>
            {elements}
        </div>
    );
};

export default NavBar;