import { createSlice } from '@reduxjs/toolkit';

export type TTodo = {
    title: string,
    description: string,
    id: string,
    startDate: string,
    finishDate: string,
    isChecked: boolean,
    isDeleted: boolean,
};

export type TInitState = {
    formData: TTodo,
    todos: Array<TTodo>,
    deletedTodos: Array<TTodo>,
};

const initialState: TInitState = {
    formData: {
        title: '',
        description: '',
        id: '',
        startDate: '',
        finishDate: '',
        isChecked: false,
        isDeleted: false
    },
    todos: [],
    deletedTodos: [],
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillItemList(state, action) {
            state.todos = action.payload;
        },
        createTodo(state, action) {
            state.todos.push(action.payload)
        },
        editTodo(state, action) {
            state.todos = state.todos.map(todo =>
                todo.id == action.payload.id
                    ?
                    todo = action.payload
                    :
                    todo
            )
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id != action.payload.id);
            state.deletedTodos.push(action.payload)
        },
        clearTrashBin(state) {
            state.deletedTodos = [];
        },


        //     addItemToCart(state, action) {
        //         state.cart.length ?
        //             (
        //                 state.cart.some((item) => (item.id === action.payload.id))
        //                     ?
        //                     state.cart.map((item) => (item.id === action.payload.id) ? { ...item, number: ++item.number } : item)
        //                     :
        //                     state.cart.push(action.payload)
        //             ) : (
        //                 state.cart.push(action.payload)
        //             )
        //         state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        //     },
        //     increaseNumber(state, action) {
        //         state.cart.map((item) => (item.id === action.payload.id) ? { ...item, number: ++item.number } : item);
        //         state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        //     },
        //     decreaseNumber(state, action) {
        //         state.cart.map((item) => (item.id === action.payload.id) ? { ...item, number: --item.number } : item);
        //         state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        //     },
        //     deleteItem(state, action) {
        //         state.cart = state.cart.filter(item => item.id !== action.payload.id);
        //         state.sum = state.cart.reduce((a, b) => a + b.price * b.number, 0);
        //     },
    }
})

export default mainStore.reducer;
export const { fillItemList, createTodo, deleteTodo, clearTrashBin, editTodo } = mainStore.actions;