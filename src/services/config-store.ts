import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mainStore from "./main-store";

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch | any>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    mainStore
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredActionPaths: ['meta.arg', 'payload.startDate', 'payload.finishDate'],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
});


export const persistor = persistStore(store);