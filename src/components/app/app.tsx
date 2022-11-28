import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Header from '../header/header';
import { ItemList } from '../item-list/item-list';
import { ItemCreator } from '../item-creator/item-creator';
import { TrashBin } from '../trash-bin/trash-bin';
import styles from './app.module.css'
import { Navigation } from '../navigation/navigation';
//import Showcase from '../showcase/showcase';
//import { headphones } from '../../assets/data/data';
//import { fillShowcase } from '../../services/main-store';
//import Cart from '../cart/cart';

export function App() {
    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     dispatch(fillShowcase(headphones));
    // }, []);
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<ItemList />} />
                    <Route path="/create_todo" element={<ItemCreator />} />
                    <Route path="/trash_bin" element={<TrashBin />} />
                </Routes>
            </main>
        </>
    )
}