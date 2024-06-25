import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    isAllActive: false,
    savedTabsRoute: 'myActions'
}

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: initialState,
    reducers: {
        switchTabs: (state) => {
            state.isAllActive = !state.isAllActive
        },
        saveLastRoute: (state, payload: PayloadAction<string>) => {
            const url = payload.payload.split('/')
            state.savedTabsRoute = (url.pop() || url.pop()) as string
        }
    }
})

export const tabsReducer = tabsSlice.reducer
export const tabsActions = tabsSlice.actions
