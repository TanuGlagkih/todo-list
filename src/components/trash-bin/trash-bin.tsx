import React from "react";
import { Item } from "../item/item";
import { useSelector } from "react-redux";
import { TRootState } from "../../services/config-store";
import styles from './trash-bin.module.css'

export function TrashBin() {
    const { deletedTodos } = useSelector((state: TRootState) => state.mainStore);

    return (
        <section className={styles.todos}>
            <div className={styles.container}>
                <h1 className={styles.header}>Корзина</h1>
                <ul className={styles.list}>
                    {deletedTodos?.map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </section>
    )
}