import { createSlice } from '@reduxjs/toolkit';

export const conSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContacts: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.value = state.value.filter(ret => ret.id !== action.payload);
    },
  },
});

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const { addContacts, deleteContacts } = conSlice.actions;
