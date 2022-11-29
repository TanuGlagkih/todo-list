import React from "react";
import styles from './item.module.css'
import { deleteTodo, TTodo } from "../../services/main-store";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export function Item(props: { item: TTodo }) {
    const dispatch = useDispatch();
    const location = useLocation();

    const removeTodo = () => {
        dispatch(deleteTodo(props.item));
    }

    return (
        <div className={styles.box}>
            <div className={styles.titleBox}>
                <div className={styles.titleBox}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        disabled={(location.pathname != '/trash_bin') ? false : true}
                    />
                    <h2>{props.item.title}</h2>
                </div>
                <div className={styles.titleBox}>
                    {location.pathname != '/trash_bin' &&
                        <>
                            <Link to={`/${props.item.id}`}>
                                <button>Редактировать</button>
                            </Link>
                            <button onClick={removeTodo}>Удалить</button>
                        </>
                    }
                </div>
            </div>
            <p className={styles.description}>{props.item.description}</p>
            <div className={styles.time}>
                <p>с {props.item.startDate} по {props.item.finishDate}</p>
            </div>
        </div >
    )
}