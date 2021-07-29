import {createSlice, nanoid} from '@reduxjs/toolkit';

const formFieldSlice = createSlice({
  name: 'inputFields',
  initialState: [],
  reducers: {
    addField: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (type, language = null) => {
        return {payload: {type, language, value: '', id: nanoid()}};
      }
    },
    modifyField: (state, action) => state.map(field => {
      if (field.id !== action.payload.id) return field;
      return { ...field, value: action.payload.value }
    }),
    removeField: (state, action) => state.filter(field => {
      return field.id !== action.payload
    }),
    wipeFields: () => [{type: 'comment', language: null, value: '', id: nanoid()}]
  }
})

export const { addField, modifyField, removeField, wipeFields } = formFieldSlice.actions;
export default formFieldSlice.reducer;