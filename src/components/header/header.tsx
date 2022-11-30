import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSorting } from '../../services/main-store';
import styles from './header.module.css'

export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <Link
                to='/'
                className={styles.name}
                onClick={() => dispatch(setSorting(false))}
            >
                <img
                    className={styles.name}
                    src={require('../../assets/icons/to-doGreen.svg').default}
                />
                <p>My TodoS</p>
            </Link>
        </header>
    )
}