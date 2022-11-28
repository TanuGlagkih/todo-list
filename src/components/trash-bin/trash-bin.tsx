import React from "react";
import { Item } from "../item/item";
import styles from './trash-bin.module.css'

export function TrashBin() {
    return (
        <section className={styles.todos}>
            <div className={styles.container}>
                <h1 className={styles.header}>Корзина</h1>
                <ul className={styles.list}>
                    {/* { .map(item => (*/}
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    {/* <Item item={item} key={item.id} /> */}
                    {/*  ))} */}
                </ul>
            </div>
        </section>
    )
}