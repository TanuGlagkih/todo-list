import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TRootState } from "../../services/config-store";
import { getFormData, TForm } from "../../services/main-store";
import styles from './item-creator.module.css'

export function ItemCreator() {
    const dispatch = useDispatch();
    const {
        title,
        description,
        startDate,
        finishDate
    } = useSelector((state: TRootState) => state.mainStore.formData)

    const { register, handleSubmit } = useForm<TForm>()

    const onFormChange = (e: any) => {
        //  dispatch(getFormData({ [e.target.name]: e.target.value }))
    }

    const onSubmit = (data: any) => {
        dispatch(getFormData(data.title))
    }

    return (
        <section className={styles.box}>
            <h1 className={styles.header}>Новая задача</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}>
                <label htmlFor="title" className={styles.title}>Задача</label>
                <input type='text' value={title} name="title" id="title" {...register}
                    className={styles.textField} />

                <label htmlFor="description" className={styles.title}>Описание</label>
                <input type='text' onChange={onFormChange} value={description} name="description" id="description"
                    className={styles.textField} />

                <div className={styles.date}>
                    <div className={styles.container}>
                        <label htmlFor="startDate" className={styles.title}>Дата начала</label>
                        <input type='date' onChange={onFormChange} value={startDate} name="startDate" id="startDate"
                            className={styles.dateField} />
                    </div>

                    <div className={styles.container}>
                        <label htmlFor="finishDate" className={styles.title}>Дата окончания</label>
                        <input type='date' onChange={onFormChange} value={finishDate} name="finishDate" id="finishDate"
                            className={styles.dateField} />
                    </div>
                </div>

                <div className={styles.buttonBox}>
                    <Link to='/'>
                        <button className={styles.button}>Отменить</button>
                    </Link>
                    <button type="submit" className={styles.button}>Сохранить</button>
                </div>
            </form>
        </section>
    )
}