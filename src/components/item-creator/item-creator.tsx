import moment from "moment";
import 'moment/locale/ru';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TRootState } from "../../services/config-store";
import { createTodo, editTodo } from "../../services/main-store";
import styles from './item-creator.module.css';

export function ItemCreator() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const { todos } = useSelector((state: TRootState) => state.mainStore);

    useEffect(() => {
        if (location.pathname != '/create_todo') {
            const todo = todos?.find(todo => todo.id == location.pathname.slice(1));
            setText({ ...todo });
        }
    }, [])

    const [text, setText] = useState({
        title: '',
        description: '',
        startDate: '',
        finishDate: ''
    });

    const onFormChange = (e: any) => {
        setIsSaved(false);
        setText({
            ...text,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any): void => {
        e.preventDefault();
        setIsSaved(true);

        if (location.pathname == '/create_todo') {
            dispatch(createTodo({
                ...text,
                startDate: moment(text.startDate).locale("ru").format('ll'),
                finishDate: moment(text.finishDate).locale("ru").format('ll'),
                id: Math.random().toString(35).substring(5),
                isChecked: false,
                isDeleted: false
            }))
        } else {
            dispatch(editTodo({
                ...text,
                startDate: moment(text.startDate).locale("ru").format('ll'),
                finishDate: moment(text.finishDate).locale("ru").format('ll'),
                id: location.pathname.slice(1),
                isChecked: false,
                isDeleted: false
            }))
        }


        setText({
            title: '',
            description: '',
            startDate: '',
            finishDate: ''
        });
    }

    return (
        <section className={styles.box}>

            {location.pathname == '/create_todo' ?
                <h1 className={styles.header}>Новая задача</h1>
                :
                <h1 className={styles.header}>Редактирование</h1>
            }

            <form
                onSubmit={handleSubmit}
                className={styles.form}
            >
                <label htmlFor="title" className={styles.title}>Задача</label>
                <input
                    onChange={onFormChange}
                    type='text'
                    value={text.title}
                    name="title"
                    id="title"
                    className={styles.textField}
                />

                <label htmlFor="description" className={styles.title}>Описание</label>
                <input
                    type='text'
                    onChange={onFormChange}
                    value={text.description}
                    name="description"
                    id="description"
                    className={styles.textField}
                />

                <div className={styles.date}>
                    <div className={styles.container}>
                        <label htmlFor="startDate" className={styles.title}>Дата начала</label>
                        <input
                            type='date'
                            onChange={onFormChange}
                            value={text.startDate}
                            name="startDate"
                            id="startDate"
                            className={styles.dateField}
                        />
                    </div>

                    <div className={styles.container}>
                        <label htmlFor="finishDate" className={styles.title}>Дата окончания</label>
                        <input
                            type='date'
                            onChange={onFormChange}
                            value={text.finishDate}
                            name="finishDate"
                            id="finishDate"
                            className={styles.dateField}
                        />
                    </div>
                </div>

                {isSaved ?
                    <div className={styles.saved}>Сохранено</div>
                    :
                    <div className={styles.buttonBox}>
                        <Link to='/'>
                            <button className={styles.button}>Отменить</button>
                        </Link>
                        <button type="submit" className={styles.button}>Сохранить</button>
                    </div>
                }
            </form>

        </section >
    )
}