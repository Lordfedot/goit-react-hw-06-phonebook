import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
      value(_,action){
          return action.payload
      }
    }
  });

  export const {value} = filterSlice.actions

  export default filterSlice.reducer