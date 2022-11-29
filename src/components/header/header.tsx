import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <Link to='/' className={styles.name}>
                <img
                    className={styles.name}
                    src={require('../../assets/icons/to-doGreen.svg').default}
                />
                <p>My TodoS</p>
            </Link>
        </header>
    )
}