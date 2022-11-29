import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearTrashBin } from "../../services/main-store";
import styles from './menu.module.css'

export function Menu() {
    let location = useLocation();
    const dispatch = useDispatch();

    const removeTrash = () => {
        dispatch(clearTrashBin());
    }

    return (
        <section className={styles.actions}>

            {location.pathname === '/' ? (
                <Link to='/create_todo' className={styles.actionBox}>
                    <img
                        src={require('../../assets/icons/plus-circle.svg').default}
                        className={styles.icon}
                    />
                    <p className={styles.action}>Добавить задачу</p>
                </Link>
            ) : (
                <Link to='/' className={styles.actionBox}>
                    <img
                        src={require('../../assets/icons/to-do.svg').default}
                        className={styles.icon}
                    />
                    <p className={styles.action}>К списку задач</p>
                </Link>
            )}

            <div className={styles.actionBox}>
                <img
                    src={require('../../assets/icons/funnel.svg').default}
                    className={styles.icon}
                />
                <p className={styles.action}>Фильтровать</p>
            </div>

            {location.pathname == '/trash_bin' ? (
                <div className={styles.actionBox} onClick={removeTrash}>
                    <img
                        src={require('../../assets/icons/trashRed.svg').default}
                        className={styles.dangerIcon}
                    />
                    <p className={styles.dangerAction}>Очистить козину</p>
                </div>
            ) : (
                <Link to='/trash_bin' className={styles.actionBox}>
                    <img
                        src={require('../../assets/icons/trash.svg').default}
                        className={styles.icon}
                    />
                    <p className={styles.action}>Корзина</p>
                </Link>
            )}

        </section>
    )
}