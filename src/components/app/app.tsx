import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Header from '../header/header';
import { ItemList } from '../item-list/item-list';
import { ItemCreator } from '../item-creator/item-creator';
import { TrashBin } from '../trash-bin/trash-bin';
import styles from './app.module.css'
import { Menu } from '../menu/menu';
import { todoData } from '../../assets/todos';
import { fillItemList } from '../../services/main-store';

export function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let list = localStorage.getItem('list');
        list = JSON.parse(list);

        if (list != null && list.length) {
            dispatch(fillItemList(list));
        } else {
            dispatch(fillItemList(todoData))
        }
    }, []);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Menu />
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/create_todo" element={<ItemCreator />} />
                    <Route path="/:id" element={<ItemCreator />} />
                    <Route path="/trash_bin" element={<TrashBin />} />
                </Routes>
            </main>
        </>
    )
}