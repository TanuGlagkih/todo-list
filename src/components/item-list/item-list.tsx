import React from "react";
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
        filterUnchecked,
        inputData } = useSelector((state: TRootState) => state.mainStore);

    let sortedTodos: Array<TTodo> = [];

    console.log(todos[todos.length - 1])

    if (sorting) {
        if (filterByStartDate) {
            sortedTodos = JSON.parse(JSON.stringify(todos))
            sortedTodos.sort((a, b) => new Date(a.startDate) < new Date(b.startDate) ? -1 : 1);
        } else if (filterByFinishDate) {
            sortedTodos = JSON.parse(JSON.stringify(todos))
            sortedTodos.sort((a, b) => new Date(a.finishDate) < new Date(b.finishDate) ? -1 : 1);
        } else if (filterChecked) {
            sortedTodos = todos.filter(a => a.isChecked);
        } else if (filterUnchecked) {
            sortedTodos = todos.filter(a => !a.isChecked);
        }
    } else if (filterByTitle) {
        inputData
            ?
            sortedTodos = todos.filter(todo => {
                return todo.title.toLowerCase().includes(inputData.toLowerCase())
            })
            :
            todos
    }

    return (
        <section className={styles.todos}>
            <h1 className={styles.header}>Задачи</h1>
            <ul className={styles.list}>
                {((sorting || filterByTitle)
                    && sortedTodos.length
                    ? sortedTodos
                    : currentPageTodos)?.map(item => (
                        <li key={item.id}>
                            <Item item={item} key={item.id} />
                            {
                                (!sorting && !filterByTitle && item == todos[todos.length - 1])
                                &&
                                <p className={styles.listEnd}>Конец списка</p>
                            }
                        </li>
                    ))}
            </ul>
        </section>
    )
}