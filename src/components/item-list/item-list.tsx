import React from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../../services/config-store";
import { Item } from "../item/item";
import styles from './item-list.module.css'

export function ItemList() {
    const { todos } = useSelector((state: TRootState) => state.mainStore);

    return (
        <section className={styles.todos}>
            <div className={styles.container}>
                <h1 className={styles.header}>Задачи</h1>
                <ul className={styles.list}>
                    {todos?.map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </section>
    )
}