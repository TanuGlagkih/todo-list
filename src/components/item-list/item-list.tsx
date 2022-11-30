import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "../../services/config-store";
import { TTodo } from "../../services/main-store";
import { Item } from "../item/item";
import styles from './item-list.module.css'

export function ItemList() {
    const {
        todos,
        currentPageTodos,
        sorting,
        filterByStartDate,
        filterByFinishDate,
        filterByTitle,
        filterChecked,
        filterUnchecked } = useSelector((state: TRootState) => state.mainStore);

    let sortedTodos = todos;
    console.log(sortedTodos)
    useEffect(() => {
        if (filterByStartDate) {
            sortedTodos.forEach((todo) => {
                return todo.startDate = new Date(todo.startDate)
            })
            sortedTodos.sort((a, b) => a.startDate > b.startDate ? 1 : -1);

        } else if (filterByFinishDate) {
            sortedTodos = todos.sort((a, b) => a.finishDate > b.finishDate ? 1 : -1)
        } else if (filterChecked) {
            sortedTodos = todos.filter(a => a.isChecked)
        } else if (filterUnchecked) {
            sortedTodos = todos.filter(a => !a.isChecked)
        } else {
            return
        }
    }, [filterByStartDate,
        filterByFinishDate,
        filterByTitle,
        filterChecked,
        filterUnchecked])




    console.log(sortedTodos)

    return (
        <section className={styles.todos}>
            <div className={styles.container}>
                <h1 className={styles.header}>Задачи</h1>
                <ul className={styles.list}>
                    {(sorting ? sortedTodos : currentPageTodos)?.map(item => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </section>
    )
}