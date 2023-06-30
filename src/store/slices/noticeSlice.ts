import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@store/store'

// Define a type for the slice state
interface NoticeState {
    clicked: string
}

// Define the initial state using that type
const initialState: NoticeState = {
    clicked: "division",
}

export const noticeSlice = createSlice({
    name: 'notice',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        changeClicked: (state, action: PayloadAction<string>) => {
            state.clicked = action.payload
        },
    },
})

export const { changeClicked } = noticeSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default noticeSlice.reducer