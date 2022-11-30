import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TRootState } from "../../services/config-store";
import { clearTrashBin, setCurrentPage, setSortByFinishDate, setSortByStartDate, setSortByTitle, setSortChecked, setSorting, setSortUnchecked } from "../../services/main-store";
import styles from './menu.module.css'

export function Menu() {
    let location = useLocation();
    const dispatch = useDispatch();
    const { sorting } = useSelector((state: TRootState) => state.mainStore);

    const removeTrash = () => {
        dispatch(clearTrashBin());
    }

    const sort = () => {
        dispatch(setSorting(!sorting));
        if (sorting) dispatch(setCurrentPage(1));
    }

    const search = (data: string) => {
        dispatch(setSortByTitle(data))
    }

    return (
        <section className={styles.actions}>
            {sorting ? (
                <>
                    <div className={styles.actionBox}
                        onClick={() => dispatch(setSortByStartDate())}>
                        <img
                            src={require('../../assets/icons/filter-list.svg').default}
                            className={styles.icon}
                        />
                        <p className={styles.action}>По дате начала</p>
                    </div>
                    <div className={styles.actionBox}
                        onClick={() => dispatch(setSortByFinishDate())}>
                        <img
                            src={require('../../assets/icons/filter-list.svg').default}
                            className={styles.icon}
                        />
                        <p className={styles.action}>По дате окончания</p>
                    </div>
                    <div className={styles.actionBox}
                        onClick={() => dispatch(setSortChecked())}>
                        <img
                            src={require('../../assets/icons/filter-list.svg').default}
                            className={styles.icon}
                        />
                        <p className={styles.action}>Выполненные</p>
                    </div>
                    <div className={styles.actionBox}
                        onClick={() => dispatch(setSortUnchecked())}>
                        <img
                            src={require('../../assets/icons/filter-list.svg').default}
                            className={styles.icon}
                        />
                        <p className={styles.action}>Не выполненные</p>
                    </div>
                    <div className={styles.actionBox}
                        onClick={sort}>
                        <img
                            src={require('../../assets/icons/close.svg').default}
                            className={styles.icon}
                        />
                        <p className={styles.action}>Закрыть</p>
                    </div>
                </>
            ) : (
                <>
                    {location.pathname === '/' ? (
                        <>
                            <Link to='/create_todo' className={styles.actionBox}>
                                <img
                                    src={require('../../assets/icons/plus-circle.svg').default}
                                    className={styles.icon}
                                />
                                <p className={styles.action}>Добавить задачу</p>
                            </Link>

                            <div className={styles.actionBox}
                                onClick={sort}>
                                <img
                                    src={require('../../assets/icons/funnel.svg').default}
                                    className={styles.icon}
                                />
                                <p className={styles.action}
                                >Фильтровать</p>
                            </div>

                            <div className={styles.actionBox}>
                                <img
                                    src={require('../../assets/icons/search.svg').default}
                                    className={styles.icon}
                                />
                                <input
                                    type='text'
                                    placeholder="Поиск по названию"
                                    onChange={e => search(e.target.value)}
                                    className={styles.search}
                                />
                            </div>
                        </>
                    ) : (
                        <Link to='/' className={styles.actionBox}>
                            <img
                                src={require('../../assets/icons/to-do.svg').default}
                                className={styles.icon}
                            />
                            <p className={styles.action}>К списку задач</p>
                        </Link>
                    )}

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
                </>
            )
            }
        </section>
    )
}