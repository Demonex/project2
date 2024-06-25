import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coreApi } from '../services/core.service';
import { tabsReducer } from './reducers/tabs.slice';
import { coreReducer } from './reducers/core.slice';
import { clickerReducer } from './reducers/clicker.slice';

const rootReducer = combineReducers({
    coreReducer,
    tabsReducer,
    clickerReducer,
    [coreApi.reducerPath]: coreApi.reducer,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(coreApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
