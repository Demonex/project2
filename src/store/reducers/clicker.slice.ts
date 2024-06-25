import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    collectedCoins: 0
}

export const clickerSlice = createSlice({
    name: 'clicker',
    initialState: initialState,
    reducers: {
        addCoin: (state) => {
            state.collectedCoins += 1
        },
    }
})

export const clickerReducer = clickerSlice.reducer
export const clickerActions = clickerSlice.actions
