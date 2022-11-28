import { createSlice } from '@reduxjs/toolkit';

export type TForm = {
    title: string,
    description: string,
    id: string,
    startDate: number,
    finishDate: number,
};

export type TInitState = {
    formData: TForm,
    todos: Array<TForm>,
};

const initialState: TInitState = {
    formData: {
        title: '',
        description: '',
        id: '',
        startDate: null,
        finishDate: null,
    },
    todos: [],
};

const mainStore = createSlice({
    name: 'mainStore',
    initialState: initialState,
    reducers: {
        fillItemList(state, action) {
            state.todos = action.payload;
        },
        getFormData(state, action) {
            state.formData.title = action.payload
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
export const { fillItemList, getFormData } = mainStore.actions;