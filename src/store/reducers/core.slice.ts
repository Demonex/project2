import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    isIntroStatePassed: false
}

export const coreSlice = createSlice({
    name: 'core',
    initialState: initialState,
    reducers: {
        switchIntroState: (state) => {
            state.isIntroStatePassed = !state.isIntroStatePassed
        }
    }
})

export const coreReducer = coreSlice.reducer
export const coreActions = coreSlice.actions
