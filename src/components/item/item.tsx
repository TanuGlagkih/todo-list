import React, { useState } from "react";
import styles from './item.module.css'
import swal from 'sweetalert';
import { deleteTodo, editTodo, TTodo } from "../../services/main-store";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

export function Item(props: { item: TTodo }) {
    const dispatch = useDispatch();
    const location = useLocation();
    const [todoChecked, setTodoChecked] = useState(props.item.isChecked);

    const startDate = moment(props.item.startDate).locale("ru").format('ll');
    const finishDate = moment(props.item.finishDate).locale("ru").format('ll');

    const removeTodo = () => {
        swal("Вы действительно хотите удалить задачу?", {
            buttons: {
                cancel: {
                    text: "Отменить",
                    visible: true,
                    value: "cancel",
                },
                confirm: {
                    text: "Подтвердить",
                    value: "confirm",
                }
            }
        })
            .then((value) => {
                value == "confirm" ? dispatch(deleteTodo(props.item)) : value
            })
    }

    const setChecked = () => {
        dispatch(editTodo({ ...props.item, isChecked: !props.item.isChecked }));
        setTodoChecked(!todoChecked);
    }

    return (
        <div className={(location.pathname != '/trash_bin') ? styles.box : styles.deleted}>
            <div className={styles.titleBox}>
                <div className={styles.titleBox}>
                    <input
                        onChange={setChecked}
                        type='checkbox'
                        className={styles.checkbox}
                        disabled={(location.pathname != '/trash_bin') ? false : true}
                        checked={todoChecked}
                    />
                    <h2>{props.item.title}</h2>
                </div>
                <div className={styles.titleBox}>
                    {location.pathname != '/trash_bin' &&
                        <>
                            <Link to={`/${props.item.id}`}>
                                <button className={styles.button}>Редактировать</button>
                            </Link>
                            <button onClick={removeTodo} className={styles.button}>Удалить</button>
                        </>
                    }
                </div>
            </div>
            <p className={styles.description}>{props.item.description}</p>
            <div className={styles.date}>
                <p>с {startDate} по {finishDate}</p>
            </div>
        </div>
    )
}