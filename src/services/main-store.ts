import { createSlice } from '@reduxjs/toolkit';

export type TTodo = {
    title: string,
    description: string,
    id?: string,
    startDate?: string | number | Date,
    finishDate?: string | number | Date,
    isChecked?: boolean,
    isDeleted?: boolean,
};

export type TInitState = {
    todos: Array<TTodo>,
    deletedTodos: Array<TTodo>,

    currentPageTodos: Array<TTodo>,
    currentPage: number,
    todosPerPage: number,

    sorting: boolean,
    filterByStartDate: boolean,
    filterByFinishDate: boolean,
    filterByTitle: boolean,
    filterChecked: boolean,
    filterUnchecked: boolean,
};

const initialState: TInitState = {
    todos: [],
    deletedTodos: [],

    currentPageTodos: [],
    currentPage: 1,
    todosPerPage: 15,

    sorting: false,
    filterByStartDate: false,
    filterByFinishDate: false,
    filterByTitle: false,
    filterChecked: false,
    filterUnchecked: false,
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillItemList(state, action) {
            state.todos = action.payload;
        },
        createTodo(state, action) {
            state.todos.unshift(action.payload);
            state.currentPageTodos.unshift(action.payload);
        },
        editTodo(state, action) {
            state.todos = state.todos.map(todo =>
                todo.id == action.payload.id
                    ?
                    todo = action.payload
                    :
                    todo
            )

            state.currentPageTodos = state.currentPageTodos.map(todo =>
                todo.id == action.payload.id
                    ?
                    todo = action.payload
                    :
                    todo
            )
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id);
            state.currentPageTodos = state.currentPageTodos.filter(todo => todo.id != action.payload.id);
            state.deletedTodos.push(action.payload)
        },
        clearTrashBin(state) {
            state.deletedTodos = [];
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
            const startIndex = (action.payload == 1) ? 0 : (action.payload - 1) * 15;
            state.currentPageTodos = state.todos.slice(startIndex, startIndex + 15)
        },
        setSorting(state, action) {
            state.sorting = action.payload
        },
        setSortByStartDate(state) {
            state.filterByStartDate = true;
            state.filterByFinishDate = false;
            state.filterChecked = false;
            state.filterUnchecked = false;
        },
        setSortByFinishDate(state) {
            state.filterByStartDate = false;
            state.filterByFinishDate = true;
            state.filterChecked = false;
            state.filterUnchecked = false;
        },
        setSortChecked(state) {
            state.filterByStartDate = false;
            state.filterByFinishDate = false;
            state.filterChecked = true;
            state.filterUnchecked = false;
        },
        setSortUnchecked(state) {
            state.filterByStartDate = false;
            state.filterByFinishDate = false;
            state.filterChecked = false;
            state.filterUnchecked = true;
        },
    }
})

export default mainStore.reducer;
export const {
    fillItemList,
    createTodo,
    deleteTodo,
    clearTrashBin,
    editTodo,
    setCurrentPage,
    setSorting,
    setSortByStartDate,
    setSortByFinishDate,
    setSortChecked,
    setSortUnchecked,
} = mainStore.actions;