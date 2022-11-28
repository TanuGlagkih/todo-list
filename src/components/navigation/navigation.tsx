import React from "react";
import { Link } from "react-router-dom";
import styles from './navigation.module.css'

export function Navigation() {
    return (
        <section className={styles.actions}>
            <Link to='/create_todo' className={styles.actionBox}>
                <img
                    src={require('../../assets/icons/plus-circle.svg').default}
                    className={styles.icon}
                />
                <p className={styles.action}>Добавить задачу</p>
            </Link>
            <div className={styles.actionBox}>
                <img
                    src={require('../../assets/icons/funnel.svg').default}
                    className={styles.icon}
                />
                <p className={styles.action}>Фильтровать</p>
            </div>
            <Link to='/trash_bin' className={styles.actionBox}>
                <img
                    src={require('../../assets/icons/trash.svg').default}
                    className={styles.icon}
                />
                <p className={styles.action}>Корзина</p>
            </Link>
        </section>
    )
}