import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'

export default function Header() {

    return (
        <header className={styles.header}>
            <Link to='/' className={styles.name}>
                <p >My TodoS</p>
            </Link>
        </header>
    )
}