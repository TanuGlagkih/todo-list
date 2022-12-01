import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentPage, setSorting } from '../../services/main-store';
import styles from './header.module.css'

export default function Header() {
    const dispatch = useDispatch();

    const homePage = () => {
        dispatch(setSorting(false));
        dispatch(setCurrentPage(1));
    }

    return (
        <header className={styles.header}>
            <Link
                to='/'
                className={styles.name}
                onClick={homePage}
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