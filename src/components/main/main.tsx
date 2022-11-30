import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { ItemList } from '../item-list/item-list';
import { ItemCreator } from '../item-creator/item-creator';
import { TrashBin } from '../trash-bin/trash-bin';
import styles from './main.module.css'
import { Menu } from '../menu/menu';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../../services/config-store';
import { setCurrentPage } from '../../services/main-store';

export function Main() {
    const location = useLocation();
    const dispatch = useDispatch();
    const { todos, currentPage, sorting } = useSelector((state: TRootState) => state.mainStore)
    const pagesCount = Math.ceil(todos.length / 15);
    const pages = [...Array(pagesCount)].map((e, i) => i + 1);

    return (
        <main className={styles.main}>
            <Menu />
            <Routes>
                <Route path="/" element={<ItemList />} />
                <Route path="/create_todo" element={<ItemCreator />} />
                <Route path="/:id" element={<ItemCreator />} />
                <Route path="/trash_bin" element={<TrashBin />} />
            </Routes>
            <div className={styles.pages}>
                {
                    !sorting &&
                    location.pathname == '/' &&
                    pages.map((page, index) =>
                        <span
                            key={index}
                            className={currentPage == page ? styles.currentPage : styles.page}
                            onClick={() => dispatch(setCurrentPage(page))}
                        >
                            {page}
                        </span>
                    )}
            </div>
        </main>
    )
}