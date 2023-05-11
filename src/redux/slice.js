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

export const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    addName: (state, action) => {
      return (state = action.payload);
    },
    resetName: (state, action) => {
      return (state = '');
    },
  },
});

export const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    addNumber: (state, action) => {
      return (state = action.payload);
    },

    resetNumber: (state, action) => {
      return (state = '');
    },
  },
});

export const { addName, resetName } = nameSlice.actions;
export const { addNumber, resetNumber } = numberSlice.actions;
export const { onFilter } = filterSlice.actions;
export const { addContacts, deleteContacts } = conSlice.actions;
