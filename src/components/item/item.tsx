import React from "react";
import styles from './item.module.css'

export function Item() {
    return (
        <div className={styles.box}>
            <div className={styles.titleBox}>
                <input type='checkbox' className={styles.checkbox} />
                <h2>To pet a cat</h2>
                <p>Редактировать</p>
                <p>Удалить</p>
            </div>
            <p className={styles.description}>I need to pet a nice little cat fot a long time</p>
            <div className={styles.time}>
                <p>с 5 фев 2022 г. по 5 фев 2022 г.</p>
            </div>
        </div>
    )
}