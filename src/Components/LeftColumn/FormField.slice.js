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
    removeField: (state, action) => {
      state = state.filter(field => field.id !== action.payload);
    }
  }
})

export const { addField, modifyField, removeField } = formFieldSlice.actions;
export default formFieldSlice.reducer;