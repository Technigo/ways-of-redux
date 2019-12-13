import { createSlice } from '@reduxjs/toolkit'

const increment = (amount) => {
    return {
        type: 'INCREMENT'

    }
}

export const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state, action) => {
        state.count = state.count + action.payload
    },
    decrement: (state, action) => {
        state.count = state.count - action.payload
    }
  }
})

// example usage
dispatch(counter.actions.increment(5))